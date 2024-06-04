export const buttonIds = ['chevron-right', 'chevron-left', 'mail', 'moon', 'sun', 'expand', 'external-link'] as const;
export const miscellaneousIds = ['info-circle'] as const;

export const iconSet = new Set([...buttonIds, ...miscellaneousIds]);
