'use client';

import { useCallback } from 'react';
import { smoothScrollTo, scrollToContact, SmoothScrollOptions } from '@/utils/smoothScroll';

/**
 * Hook for smooth scrolling functionality
 * Returns helper functions for scrolling
 */
export const useSmoothScroll = () => {
  const scrollTo = useCallback(
    (target: string | HTMLElement | React.RefObject<HTMLElement>, options?: SmoothScrollOptions) => {
      smoothScrollTo(target, options);
    },
    []
  );

  const scrollToContactSection = useCallback((options?: SmoothScrollOptions) => {
    scrollToContact(options);
  }, []);

  return {
    scrollTo,
    scrollToContactSection
  };
};
