/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface PortcoVariant {
  
}

type PortcoVariantMap = {
  [key in keyof PortcoVariant]: Array<PortcoVariant[key]>
}

export type PortcoVariantProps = {
  [key in keyof PortcoVariant]?: ConditionalValue<PortcoVariant[key]> | undefined
}

export interface PortcoRecipe {
  __type: PortcoVariantProps
  (props?: PortcoVariantProps): Pretty<Record<"root" | "headingContainer" | "brandContainer" | "brand", string>>
  raw: (props?: PortcoVariantProps) => PortcoVariantProps
  variantMap: PortcoVariantMap
  variantKeys: Array<keyof PortcoVariant>
  splitVariantProps<Props extends PortcoVariantProps>(props: Props): [PortcoVariantProps, Pretty<DistributiveOmit<Props, keyof PortcoVariantProps>>]
  getVariantProps: (props?: PortcoVariantProps) => PortcoVariantProps
}


export declare const portco: PortcoRecipe