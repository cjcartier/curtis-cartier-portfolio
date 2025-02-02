import { beforeEach, describe, expect, test, vi } from 'vitest';

import onKeyDown from '../onKeyDown';

import type { Mock } from 'vitest';

describe('onKeyDown', () => {
  let mockAction: Mock;
  let event: KeyboardEvent;

  beforeEach(() => {
    mockAction = vi.fn();
    event = new KeyboardEvent('keydown', { key: 'Enter' });
  });

  test('should call action when targetKey is a single string and matches event key', () => {
    onKeyDown(event, mockAction, 'Enter');

    expect(mockAction).toHaveBeenCalled();
  });

  test('should not call action when targetKey is a single string and does not match event key', () => {
    event = new KeyboardEvent('keydown', { key: 'Escape' });

    onKeyDown(event, mockAction, 'Enter');

    expect(mockAction).not.toHaveBeenCalled();
  });

  test('should call action when targetKey is an array and event key is included', () => {
    event = new KeyboardEvent('keydown', { key: ' ' });

    onKeyDown(event, mockAction, ['Enter', ' ']);

    expect(mockAction).toHaveBeenCalled();
  });

  test('should not call action when targetKey is an array and event key is not included', () => {
    event = new KeyboardEvent('keydown', { key: 'ArrowUp' });

    onKeyDown(event, mockAction, ['Enter', ' ']);

    expect(mockAction).not.toHaveBeenCalled();
  });

  test('should call action when targetKey is undefined and event key is Enter', () => {
    onKeyDown(event, mockAction);

    expect(mockAction).toHaveBeenCalled();
  });

  test('should call action when targetKey is undefined and event key is Space', () => {
    event = new KeyboardEvent('keydown', { key: ' ' });

    onKeyDown(event, mockAction);

    expect(mockAction).toHaveBeenCalled();
  });

  test('should prevent default behavior when action is called', () => {
    const preventDefault = vi.fn();

    event.preventDefault = preventDefault;
    onKeyDown(event, mockAction, 'Enter');

    expect(preventDefault).toHaveBeenCalled();
  });
});
