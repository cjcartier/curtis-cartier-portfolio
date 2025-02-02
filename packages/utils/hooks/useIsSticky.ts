import { type RefObject, useEffect, useRef, useState } from 'react';

import useWindowSize from '../hooks/useWindowSize';
import { off, on } from '../misc/misc';

/**
 * A React hook that tracks whether an element is "sticky" (i.e. fixed to the top of the viewport) based on the element's position relative to the top of the viewport.
 *
 * @param elementRef - A React ref to the element to track.
 * @param topOffset - The number of pixels from the top of the viewport at which the element should be considered "sticky".
 * @returns A boolean indicating whether the element is currently "sticky".
 */
const useIsSticky = <T extends HTMLElement>(elementRef: RefObject<T>, topOffset: number) => {
  const [scrolled, setScrolled] = useState(false),
    { width } = useWindowSize(),
    rafId = useRef<number>(0);

  const handleStickyElement = () => {
    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
    }

    rafId.current = requestAnimationFrame(() => {
      if (elementRef?.current) {
        const refTop = elementRef.current.getBoundingClientRect().top;

        if (window.scrollY <= 0) {
          setScrolled(false);
        }

        setScrolled(Math.floor(refTop) <= topOffset);
      }
    });
  };

  const effect = () => {
    on(window, 'scroll', handleStickyElement);
    on(window, 'resize', handleStickyElement);

    return () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }

      off(window, 'scroll', handleStickyElement);
      off(window, 'resize', handleStickyElement);
    };
  };

  useEffect(effect, [width, topOffset, elementRef]);

  return scrolled;
};

export default useIsSticky;
