// import { SITE_DOMAIN } from "constants/general";

// import Link from "next/link";

// TODO: Make sure to move this to a constants file
import type { ElementType } from 'react';

const SITE_DOMAIN = 'example.com';

const urlPrefixConstants = ['http', 'tel:', 'mailto:'] as const;
export const internalDomains = [SITE_DOMAIN, `www.${SITE_DOMAIN}`] as const;

/**
 * Checks if the given URL starts with any of the URL prefix constants.
 *
 * @param url - The URL to check.
 * @returns `true` if the URL starts with any of the URL prefix constants, `false` otherwise.
 */
export const hasPrefixConstant = (url: string) =>
  urlPrefixConstants.some(prefix => url.toLowerCase().startsWith(prefix));

/**
 * Checks if the given URL is an internal link, based on the `internalDomains` list.
 *
 * @param url - The URL to check.
 * @returns `true` if the URL is an internal link, `false` otherwise.
 */
export const isInternalLink = (url: URL) => internalDomains.some(domain => url.hostname === domain);

/**
 * Converts a URL string to a URL object.
 *
 * @param href - The URL string to convert.
 * @returns A URL object representing the input URL string.
 * @throws {Error} If the input URL string is invalid.
 */
export const getUrlObject = (href?: string | undefined | null) => {
  if (!href) {
    return undefined;
  }

  if (href.charAt(0) === '/' || href.charAt(0) === '#') {
    href = `https://${internalDomains[0]}${href}`;
  }

  try {
    return new URL(href);
  } catch {
    return undefined;
  }
};

// const addTrailingSlash = (url: string) => (url.endsWith('/') ? url : `${url}/`);

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
const parseUrl = (href?: string | undefined | null, fallback?: ElementType) => {
  const url = getUrlObject(href);

  if (!url || !href) {
    return {
      as: fallback || 'span',
      href: '',
    } as const;
  }

  const firstChar = href.at(0),
    [domain] = internalDomains,
    isInternal = isInternalLink(url),
    isPageHash = firstChar === '#',
    link = isInternal ? url.href.split(url.host)[1] : href;

  switch (true) {
    case firstChar !== '/' && !hasPrefixConstant(href):
      href = `https://${domain}/${href}/`;
      break;
    case firstChar === '/':
      href = `https://${domain}${href}/`;
      break;
    default:
      break;
  }

  return {
    // as: isInternalNotDocs ? Link : "a", TODO: Make sure to import `next/link``
    rel: isInternal ? '' : 'noreferrer noopener',
    target: isInternal ? '' : '_blank',
    href: isPageHash ? url.hash : link,
  } as const;
};

export default parseUrl;
