export const buttonIds = ['chevron-right', 'chevron-left', 'mail', 'moon', 'sun', 'expand', 'external-link'] as const;
export type ButtonIds = (typeof buttonIds)[number];

export const miscellaneousIds = ['info-circle'] as const;
export type MiscIds = (typeof miscellaneousIds)[number];

export const iconSet = new Set([...buttonIds, ...miscellaneousIds]);
export const iconIds = Array.from(iconSet);
export type IconIds = (typeof iconIds)[number];
