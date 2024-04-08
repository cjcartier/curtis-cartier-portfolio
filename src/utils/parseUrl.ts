import Link from 'next/link';

const urlPrefixConstants = ['http', 'tel:', 'mailto:'] as const;

/**
 * Parses a URL string and returns an object with information about the URL.
 *
 * @param href - The URL string to parse.
 * @returns An object with the following properties:
 *   - Component: The appropriate React component to use for the URL ('Link' for internal URLs, 'a' for external URLs).
 *   - rel: The 'rel' attribute for the link ('noreferrer noopener' for external URLs, empty string for internal URLs).
 *   - target: The 'target' attribute for the link ('_blank' for external URLs, empty string for internal URLs).
 *   - href: The URL path (without the domain) for internal URLs, or the full URL for external URLs.
 */
const parseUrl = (href: string) => {
  if (!href) {
    return {
      Component: 'div',
    } as const;
  }

  const domain = 'curtiscartier.com';

  if (href.charAt(0) !== '/' && !urlPrefixConstants.some(prefix => href.includes(prefix))) {
    href = `https://${domain}/${href}`;
  }

  if (href[0] === '/') {
    href = `https://${domain}${href}`;
  }

  let url: URL;
  try {
    url = new URL(href);
  } catch (error) {
    throw new Error(`Invalid URL: ${href}`);
  }

  const isInternal = url.hostname === `www.${domain}` || url.hostname === domain;

  return {
    Component: isInternal ? Link : 'a',
    rel: isInternal ? '' : 'noreferrer noopener',
    target: isInternal ? '' : '_blank',
    href: isInternal ? url.href.split(url.host)[1] : href,
  } as const;
};

export default parseUrl;
