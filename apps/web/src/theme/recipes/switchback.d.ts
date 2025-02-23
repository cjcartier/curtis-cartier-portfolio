/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface SwitchbackVariant {
  /**
 * @default false
 */
reversed: boolean
}

type SwitchbackVariantMap = {
  [key in keyof SwitchbackVariant]: Array<SwitchbackVariant[key]>
}

export type SwitchbackVariantProps = {
  [key in keyof SwitchbackVariant]?: ConditionalValue<SwitchbackVariant[key]> | undefined
}

export interface SwitchbackRecipe {
  __type: SwitchbackVariantProps
  (props?: SwitchbackVariantProps): string
  raw: (props?: SwitchbackVariantProps) => SwitchbackVariantProps
  variantMap: SwitchbackVariantMap
  variantKeys: Array<keyof SwitchbackVariant>
  splitVariantProps<Props extends SwitchbackVariantProps>(props: Props): [SwitchbackVariantProps, Pretty<DistributiveOmit<Props, keyof SwitchbackVariantProps>>]
  getVariantProps: (props?: SwitchbackVariantProps) => SwitchbackVariantProps
}


export declare const switchback: SwitchbackRecipe