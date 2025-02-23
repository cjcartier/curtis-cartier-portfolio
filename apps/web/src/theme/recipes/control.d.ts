/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface ControlVariant {
  
}

type ControlVariantMap = {
  [key in keyof ControlVariant]: Array<ControlVariant[key]>
}

export type ControlVariantProps = {
  [key in keyof ControlVariant]?: ConditionalValue<ControlVariant[key]> | undefined
}

export interface ControlRecipe {
  __type: ControlVariantProps
  (props?: ControlVariantProps): string
  raw: (props?: ControlVariantProps) => ControlVariantProps
  variantMap: ControlVariantMap
  variantKeys: Array<keyof ControlVariant>
  splitVariantProps<Props extends ControlVariantProps>(props: Props): [ControlVariantProps, Pretty<DistributiveOmit<Props, keyof ControlVariantProps>>]
  getVariantProps: (props?: ControlVariantProps) => ControlVariantProps
}


export declare const control: ControlRecipe