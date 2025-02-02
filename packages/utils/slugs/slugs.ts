/**
 * Ensures a given URL uses the HTTPS protocol.
 *
 * If the URL is empty or starts with a forward slash (`/`), it is returned as-is.
 * Otherwise, the function attempts to parse the URL and update the protocol to `https:`.
 * If the URL cannot be parsed, the original URL is returned.
 *
 * @param url - The URL to force to use HTTPS.
 * @returns The URL with the HTTPS protocol, or the original URL if it could not be updated.
 */
export const forceHttps = (url: string) => {
  if (!url?.trim() || url.startsWith('/')) {
    return url;
  }

  try {
    const urlObj = new URL(url.includes('://') ? url : `https://${url}`);
    urlObj.protocol = 'https:';

    return urlObj.toString();
  } catch {
    return url;
  }
};

/**
 * Adds a trailing slash to the end of a URL if it doesn't already have one.
 *
 * If the URL is empty or doesn't contain a protocol, it is returned as-is.
 * Otherwise, the function attempts to parse the URL and add a trailing slash to the pathname.
 * If the URL cannot be parsed, the function attempts to add a trailing slash to the URL string.
 *
 * @param url - The URL to add a trailing slash to.
 * @returns The URL with a trailing slash, or the original URL if it could not be updated.
 */
export const addTrailingSlash = (url: string) => {
  if (!url?.trim()) {
    return url;
  }

  try {
    const urlObj = new URL(url.includes('://') ? url : `https://${url}`);
    if (!urlObj.pathname.endsWith('/')) {
      urlObj.pathname += '/';
    }

    return urlObj.toString();
  } catch {
    const [path, ...rest] = url.split(/[?#]/, 2),
      query = rest.length ? `?${rest[0]}` : '',
      hash = url.includes('#') ? `#${url.split('#')[1]}` : '';

    return path.endsWith('/') ? url : `${path}/${query}${hash}`;
  }
};
