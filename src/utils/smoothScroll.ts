import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Register GSAP ScrollToPlugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollToPlugin);
}

export interface SmoothScrollOptions {
  duration?: number;
  ease?: string;
  offset?: number;
}

/**
 * Smooth scroll to a target element or ID using GSAP
 * @param target - CSS selector, element, or ref object
 * @param options - Scroll animation options
 */
export const smoothScrollTo = (
  target: string | HTMLElement | React.RefObject<HTMLElement>,
  options: SmoothScrollOptions = {}
) => {
  const {
    duration = 1.5,
    ease = 'power3.out',
    offset = 0
  } = options;

  let element: HTMLElement | null = null;

  // Handle different target types
  if (typeof target === 'string') {
    element = document.querySelector(target);
  } else if (target instanceof HTMLElement) {
    element = target;
  } else if (target && 'current' in target) {
    element = target.current;
  }

  if (!element) {
    console.warn('Scroll target not found:', target);
    return;
  }

  // Get element position with offset
  const elementPosition = element.offsetTop + offset;

  // Animate scroll
  gsap.to(window, {
    duration,
    scrollTo: {
      y: elementPosition,
      autoKill: true
    },
    ease
  });
};

/**
 * Smooth scroll to contact section
 * Use this for consistency across the app
 */
export const scrollToContact = (options?: SmoothScrollOptions) => {
  smoothScrollTo('#contact-section', {
    duration: 1.5,
    ease: 'power3.out',
    offset: -100, // Adjust this offset as needed
    ...options
  });
};
