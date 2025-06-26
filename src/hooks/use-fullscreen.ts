'use client';

import type React from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';

import type {
  FullscreenDocument,
  FullscreenElement,
  FullscreenEventType,
  FullscreenState,
} from '@/types/fullscreen';

/**
 * Custom hook for managing fullscreen functionality
 * @param elementRef - Reference to the element that should go fullscreen
 * @returns Fullscreen state and control functions
 */
export function useFullscreen<T extends HTMLElement = HTMLDivElement>(
  elementRef: React.RefObject<T>
) {
  const [state, setState] = useState<FullscreenState>({
    isSupported: false,
    isActive: false,
    error: null,
  });

  const isInitialized = useRef(false);

  /**
   * Check if fullscreen is supported in the current browser
   */
  const checkFullscreenSupport = useCallback((): boolean => {
    if (typeof document === 'undefined') return false;

    const doc = document as FullscreenDocument;
    return !!(
      doc.fullscreenEnabled ||
      doc.webkitFullscreenEnabled ||
      doc.mozFullScreenEnabled ||
      doc.msFullscreenEnabled
    );
  }, []);

  /**
   * Get the current fullscreen element
   */
  const getCurrentFullscreenElement = useCallback((): Element | null => {
    const doc = document as FullscreenDocument;
    return (
      doc.fullscreenElement ||
      doc.webkitFullscreenElement ||
      doc.mozFullScreenElement ||
      doc.msFullscreenElement ||
      null
    );
  }, []);

  /**
   * Enter fullscreen mode
   */
  const enterFullscreen = useCallback(async (): Promise<void> => {
    if (!elementRef.current || !state.isSupported) {
      setState((prev) => ({
        ...prev,
        error: 'Fullscreen not supported or element not available',
      }));
      return;
    }

    try {
      const element = elementRef.current as FullscreenElement;

      if (element.requestFullscreen) {
        await element.requestFullscreen();
      } else if (element.webkitRequestFullscreen) {
        await element.webkitRequestFullscreen();
      } else if (element.mozRequestFullScreen) {
        await element.mozRequestFullScreen();
      } else if (element.msRequestFullscreen) {
        await element.msRequestFullscreen();
      } else {
        throw new Error('No fullscreen method available');
      }

      setState((prev) => ({ ...prev, error: null }));
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Failed to enter fullscreen';
      setState((prev) => ({ ...prev, error: errorMessage }));
      console.error('Error entering fullscreen:', error);
    }
  }, [elementRef, state.isSupported]);

  /**
   * Exit fullscreen mode
   */
  const exitFullscreen = useCallback(async (): Promise<void> => {
    if (!getCurrentFullscreenElement()) return;

    try {
      const doc = document as FullscreenDocument;

      if (doc.exitFullscreen) {
        await doc.exitFullscreen();
      } else if (doc.webkitExitFullscreen) {
        await doc.webkitExitFullscreen();
      } else if (doc.mozCancelFullScreen) {
        await doc.mozCancelFullScreen();
      } else if (doc.msExitFullscreen) {
        await doc.msExitFullscreen();
      } else {
        throw new Error('No exit fullscreen method available');
      }

      setState((prev) => ({ ...prev, error: null }));
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Failed to exit fullscreen';
      setState((prev) => ({ ...prev, error: errorMessage }));
      console.error('Error exiting fullscreen:', error);
    }
  }, [getCurrentFullscreenElement]);

  /**
   * Toggle fullscreen mode
   */
  const toggleFullscreen = useCallback((): void => {
    if (state.isActive) {
      void exitFullscreen();
    } else {
      void enterFullscreen();
    }
  }, [state.isActive, exitFullscreen, enterFullscreen]);

  /**
   * Handle fullscreen change events
   */
  const handleFullscreenChange = useCallback((): void => {
    const isCurrentlyFullscreen = !!getCurrentFullscreenElement();
    setState((prev) => ({ ...prev, isActive: isCurrentlyFullscreen }));
  }, [getCurrentFullscreenElement]);

  /**
   * Handle keyboard events
   */
  const handleKeyDown = useCallback(
    (event: KeyboardEvent): void => {
      if (event.key === 'Escape' && state.isActive) {
        void exitFullscreen();
      }
    },
    [state.isActive, exitFullscreen]
  );

  /**
   * Initialize fullscreen support detection
   */
  useEffect(() => {
    if (isInitialized.current) return;

    const isSupported = checkFullscreenSupport();
    setState((prev) => ({ ...prev, isSupported }));
    isInitialized.current = true;
  }, [checkFullscreenSupport]);

  /**
   * Set up event listeners
   */
  useEffect(() => {
    if (!state.isSupported) return;

    const events: FullscreenEventType[] = [
      'fullscreenchange',
      'webkitfullscreenchange',
      'mozfullscreenchange',
      'MSFullscreenChange',
    ];

    // Add fullscreen change listeners
    events.forEach((event) => {
      document.addEventListener(event, handleFullscreenChange);
    });

    // Add keyboard listener
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      events.forEach((event) => {
        document.removeEventListener(event, handleFullscreenChange);
      });
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [state.isSupported, handleFullscreenChange, handleKeyDown]);

  return {
    ...state,
    enterFullscreen,
    exitFullscreen,
    toggleFullscreen,
  };
}
