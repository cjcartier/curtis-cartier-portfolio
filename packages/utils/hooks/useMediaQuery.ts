import { useEffect, useState } from 'react';

import { isBrowser, off, on } from '../misc/misc';

/**
 * A React hook that returns a boolean indicating whether the current browser window matches the provided media query string.
 *
 * @param mediaQueryString - The media query string to match against.
 * @returns A boolean indicating whether the current browser window matches the provided media query string.
 */
const useMediaQuery = (mediaQueryString: string) => {
  const [matches, setMatches] = useState<boolean>(isBrowser ? window.matchMedia(mediaQueryString).matches : false);

  useEffect(() => {
    if (isBrowser) {
      const mediaQueryList = window.matchMedia(mediaQueryString),
        listener = () => setMatches(!!mediaQueryList.matches);
      listener();

      on(mediaQueryList, 'change', listener);

      return () => off(mediaQueryList, 'change', listener);
    }
  }, [mediaQueryString]);

  return matches;
};

export default useMediaQuery;
