import { useCallback, useEffect, useState } from 'react';

import useWindowSize from '../hooks/useWindowSize';
import { isBrowser, off, on } from '../misc/misc';

/**
 * A React hook that calculates the total height of one or more DOM elements.
 *
 * @param elementIds - A string or array of strings representing the IDs of the elements to measure.
 * @returns The total height of the specified elements in pixels.
 */
const useElementHeight = (elementIds: string | string[]) => {
  const [elementsHeight, setElementsHeight] = useState(0),
    { width } = useWindowSize();

  const calculateElementHeight = () => {
    const elements = [...elementIds].map(id => document.getElementById(id)),
      totalHeight = elements.reduce(
        (acc, element) => (element ? acc + element.getBoundingClientRect().height : acc),
        0,
      );

    setElementsHeight(totalHeight);
  };

  const effect = useCallback(() => {
    on(window, 'scroll', calculateElementHeight);
    on(window, 'resize', calculateElementHeight);

    return () => {
      off(window, 'scroll', calculateElementHeight);
      off(window, 'resize', calculateElementHeight);
    };
  }, [calculateElementHeight]);

  useEffect(() => {
    if (isBrowser) {
      calculateElementHeight();
    }
  }, []);

  useEffect(effect, [width]);

  return elementsHeight;
};

export default useElementHeight;
