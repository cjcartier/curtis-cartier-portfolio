import { useEffect, useState } from 'react';

import { isBrowser, off, on } from '../misc/misc';

interface Options {
  initialWidth?: number;
  initialHeight?: number;
}

/**
 * A React hook that returns the current width and height of the browser window.
 *
 * @param {Options} [options] - Optional configuration options.
 * @param {number} [options.initialWidth=Infinity] - The initial width to use if the browser is not available.
 * @param {number} [options.initialHeight=Infinity] - The initial height to use if the browser is not available.
 * @returns {object} - An object containing the current width and height of the browser window.
 */
const useWindowSize = ({ initialWidth = Infinity, initialHeight = Infinity }: Options = {}) => {
  const [state, setState] = useState<{ width: number; height: number }>({
    width: isBrowser ? window.innerWidth : initialWidth,
    height: isBrowser ? window.innerHeight : initialHeight,
  });

  useEffect(() => {
    if (isBrowser) {
      const handler = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        setState({
          width,
          height,
        });
      };

      on(window, 'resize', handler);

      return () => off(window, 'resize', handler);
    }
  }, []);

  return state;
};

export default useWindowSize;
