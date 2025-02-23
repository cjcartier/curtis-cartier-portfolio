/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface ThemeToggleVariant {
  
}

type ThemeToggleVariantMap = {
  [key in keyof ThemeToggleVariant]: Array<ThemeToggleVariant[key]>
}

export type ThemeToggleVariantProps = {
  [key in keyof ThemeToggleVariant]?: ConditionalValue<ThemeToggleVariant[key]> | undefined
}

export interface ThemeToggleRecipe {
  __type: ThemeToggleVariantProps
  (props?: ThemeToggleVariantProps): string
  raw: (props?: ThemeToggleVariantProps) => ThemeToggleVariantProps
  variantMap: ThemeToggleVariantMap
  variantKeys: Array<keyof ThemeToggleVariant>
  splitVariantProps<Props extends ThemeToggleVariantProps>(props: Props): [ThemeToggleVariantProps, Pretty<DistributiveOmit<Props, keyof ThemeToggleVariantProps>>]
  getVariantProps: (props?: ThemeToggleVariantProps) => ThemeToggleVariantProps
}


export declare const themeToggle: ThemeToggleRecipe