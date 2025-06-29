/**
 * Extended Document interface with fullscreen API properties
 */
export interface FullscreenDocument extends Document {
  readonly fullscreenEnabled: boolean;
  readonly webkitFullscreenEnabled?: boolean;
  readonly mozFullScreenEnabled?: boolean;
  readonly msFullscreenEnabled?: boolean;
  readonly fullscreenElement: Element | null;
  readonly webkitFullscreenElement?: Element | null;
  readonly mozFullScreenElement?: Element | null;
  readonly msFullscreenElement?: Element | null;
  exitFullscreen(): Promise<void>;
  webkitExitFullscreen?(): Promise<void>;
  mozCancelFullScreen?(): Promise<void>;
  msExitFullscreen?(): Promise<void>;
}

/**
 * Extended HTMLElement interface with fullscreen API methods
 */
export interface FullscreenElement extends HTMLElement {
  requestFullscreen(options?: FullscreenOptions): Promise<void>;
  webkitRequestFullscreen?(): Promise<void>;
  mozRequestFullScreen?(): Promise<void>;
  msRequestFullscreen?(): Promise<void>;
}

/**
 * Fullscreen event types
 */
export type FullscreenEventType =
  | 'fullscreenchange'
  | 'webkitfullscreenchange'
  | 'mozfullscreenchange'
  | 'MSFullscreenChange';

/**
 * Fullscreen state
 */
export interface FullscreenState {
  isSupported: boolean;
  isActive: boolean;
  error: string | null;
}
