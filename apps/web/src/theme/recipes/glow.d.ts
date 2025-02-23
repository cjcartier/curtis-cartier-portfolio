/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface GlowVariant {
  /**
 * @default "cool"
 */
temperature: "cool" | "warm"
}

type GlowVariantMap = {
  [key in keyof GlowVariant]: Array<GlowVariant[key]>
}

export type GlowVariantProps = {
  [key in keyof GlowVariant]?: ConditionalValue<GlowVariant[key]> | undefined
}

export interface GlowRecipe {
  __type: GlowVariantProps
  (props?: GlowVariantProps): string
  raw: (props?: GlowVariantProps) => GlowVariantProps
  variantMap: GlowVariantMap
  variantKeys: Array<keyof GlowVariant>
  splitVariantProps<Props extends GlowVariantProps>(props: Props): [GlowVariantProps, Pretty<DistributiveOmit<Props, keyof GlowVariantProps>>]
  getVariantProps: (props?: GlowVariantProps) => GlowVariantProps
}


export declare const glow: GlowRecipe