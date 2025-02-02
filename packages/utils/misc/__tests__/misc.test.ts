import { describe, expect, it, vi } from 'vitest';

import { off, on } from '../misc';

describe('on', () => {
  it('should add an event listener to a valid HTMLElement', () => {
    const element = document.createElement('div'),
      listener = vi.fn();

    on(element, 'click', listener);
    element.dispatchEvent(new Event('click'));

    expect(listener).toHaveBeenCalled();
  });

  it('should not throw an error when called with null', () => {
    expect(() => on(null, 'click', () => {})).not.toThrow();
  });

  it('should not add an event listener if the object does not have addEventListener', () => {
    const obj = {},
      listener = vi.fn();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    on(obj as any, 'click', listener);

    expect(listener).not.toHaveBeenCalled();
  });

  it('should handle multiple arguments correctly', () => {
    const element = document.createElement('div'),
      listener = vi.fn();

    on(element, 'click', listener, { capture: true });
    element.dispatchEvent(new Event('click'));

    expect(listener).toHaveBeenCalled();
  });

  it('should not add an event listener if the listener is null', () => {
    const element = document.createElement('div'),
      listener = vi.fn();

    on(element, 'click', null);
    element.dispatchEvent(new Event('click'));

    expect(listener).not.toHaveBeenCalled();
  });
});

describe('off', () => {
  it('should not throw an error when called with null', () => {
    expect(() => off(null, 'click', () => {})).not.toThrow();
  });

  it('should not call removeEventListener if the object does not have removeEventListener', () => {
    const obj = {},
      listener = vi.fn();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    off(obj as any, 'click', listener);

    expect(listener).not.toHaveBeenCalled();
  });

  it('should handle multiple arguments correctly', () => {
    const element = document.createElement('div'),
      listener = vi.fn();

    element.addEventListener('click', listener);
    off(element, 'click', listener);
    element.dispatchEvent(new Event('click'));

    expect(listener).not.toHaveBeenCalled();
  });

  it('should not throw an error when called with an invalid event type', () => {
    const element = document.createElement('div'),
      listener = vi.fn();

    element.addEventListener('click', listener);
    expect(() => off(element, 'invalidEvent', listener)).not.toThrow();
  });

  it('should not call removeEventListener if the listener is null', () => {
    const element = document.createElement('div'),
      listener = vi.fn();

    element.addEventListener('click', listener);
    off(element, 'click', null);
    element.dispatchEvent(new Event('click'));

    expect(listener).toHaveBeenCalled();
  });
});
