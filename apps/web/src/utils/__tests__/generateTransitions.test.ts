import { describe, expect, it } from 'vitest';

import generateTransitions from '@/utils/styles';

describe('generateTransitions', () => {
  it('should generate transition strings', () => {
    const result = generateTransitions(['color', 'transform'], 500);
    expect(result).toEqual([
      'color 500ms ease-in-out',
      'transform 500ms ease-in-out',
    ]);
  });

  it('should handle custom curve', () => {
    const result = generateTransitions(['opacity'], 300, 'linear');
    expect(result).toEqual(['opacity 300ms linear']);
  });

  it('should add comma between transitions', () => {
    const result = generateTransitions(['color', 'transform', 'opacity'], 200);
    expect(result).toEqual([
      'color 200ms ease-in-out',
      'transform 200ms ease-in-out,',
      'opacity 200ms ease-in-out',
    ]);
  });

  it('should handle empty props array', () => {
    const result = generateTransitions([], 100);
    expect(result).toEqual([]);
  });
});
