import { useEffect, useState } from 'react';

import { isBrowser, off, on } from '../misc/misc';

/**
 * A React hook that tracks the current scroll position of the window.
 *
 * This hook uses the `useState` and `useEffect` hooks to manage the scroll position state.
 * It listens for the `scroll` event on the window and updates the state accordingly.
 *
 * @returns {number} The current scroll position of the window.
 */
const useWindowScroll = () => {
  const [scrollPosition, setScrollPosition] = useState(isBrowser ? window.scrollY : 0);

  const handler = () => {
    setScrollPosition(state => (state !== window.scrollY ? window.scrollY : state));
  };

  useEffect(() => {
    if (isBrowser) {
      handler();
      on(window, 'scroll', handler);

      return () => off(window, 'scroll', handler);
    }
  }, []);

  return scrollPosition;
};

export default useWindowScroll;
