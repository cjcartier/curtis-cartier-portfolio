/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface AttributionVariant {
  
}

type AttributionVariantMap = {
  [key in keyof AttributionVariant]: Array<AttributionVariant[key]>
}

export type AttributionVariantProps = {
  [key in keyof AttributionVariant]?: ConditionalValue<AttributionVariant[key]> | undefined
}

export interface AttributionRecipe {
  __type: AttributionVariantProps
  (props?: AttributionVariantProps): Pretty<Record<"root" | "details" | "name" | "position" | "headshot", string>>
  raw: (props?: AttributionVariantProps) => AttributionVariantProps
  variantMap: AttributionVariantMap
  variantKeys: Array<keyof AttributionVariant>
  splitVariantProps<Props extends AttributionVariantProps>(props: Props): [AttributionVariantProps, Pretty<DistributiveOmit<Props, keyof AttributionVariantProps>>]
  getVariantProps: (props?: AttributionVariantProps) => AttributionVariantProps
}


export declare const attribution: AttributionRecipe