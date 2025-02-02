/**
 * Attaches an event listener to the specified object.
 *
 * @param obj - The object to attach the event listener to. Can be `Window`, `Document`, `HTMLElement`, or any other `EventTarget`.
 * @param args - The arguments to pass to the `addEventListener` method. Can be either an array of `Parameters<T["addEventListener"]>` or an array starting with a string (the event name), followed by a function (the event listener), and optional additional arguments.
 */
export const on = <T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  ...args: Parameters<T['addEventListener']> | [string, EventListenerOrEventListenerObject | null, ...unknown[]]
): void => {
  if (obj?.addEventListener) {
    obj.addEventListener(...(args as Parameters<HTMLElement['addEventListener']>));
  }
};

/**
 * Removes an event listener from the specified object.
 *
 * @param obj - The object to remove the event listener from. Can be `Window`, `Document`, `HTMLElement`, or any other `EventTarget`.
 * @param args - The arguments to pass to the `removeEventListener` method. Can be either an array of `Parameters<T["removeEventListener"]>` or an array starting with a string (the event name), followed by a function (the event listener), and optional additional arguments.
 */
export const off = <T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  ...args: Parameters<T['removeEventListener']> | [string, EventListenerOrEventListenerObject | null, ...unknown[]]
): void => {
  if (obj?.removeEventListener) {
    obj.removeEventListener(...(args as Parameters<HTMLElement['removeEventListener']>));
  }
};

/**
 * Determines whether the current environment is a browser.
 *
 * @returns `true` if the current environment is a browser, `false` otherwise.
 */
export const isBrowser = typeof window !== 'undefined' && window.document !== undefined;
