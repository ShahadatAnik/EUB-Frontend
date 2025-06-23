'use client';

import { useCallback, useEffect, useState } from 'react';

interface UseScrollToTopProps {
	threshold?: number;
}

export function useScrollToTop({ threshold = 300 }: UseScrollToTopProps = {}) {
	const [isVisible, setIsVisible] = useState(false);

	// Show button when page is scrolled down
	const toggleVisibility = useCallback(() => {
		if (window.pageYOffset > threshold) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	}, [threshold]);

	// Scroll to top smoothly
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	useEffect(() => {
		window.addEventListener('scroll', toggleVisibility);
		return () => {
			window.removeEventListener('scroll', toggleVisibility);
		};
	}, [threshold, toggleVisibility]);

	return {
		isVisible,
		scrollToTop,
	};
}
