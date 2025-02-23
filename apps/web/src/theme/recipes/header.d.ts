/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface HeaderVariant {
  
}

type HeaderVariantMap = {
  [key in keyof HeaderVariant]: Array<HeaderVariant[key]>
}

export type HeaderVariantProps = {
  [key in keyof HeaderVariant]?: ConditionalValue<HeaderVariant[key]> | undefined
}

export interface HeaderRecipe {
  __type: HeaderVariantProps
  (props?: HeaderVariantProps): Pretty<Record<"root" | "headerWrapper" | "logoWrapper" | "logo", string>>
  raw: (props?: HeaderVariantProps) => HeaderVariantProps
  variantMap: HeaderVariantMap
  variantKeys: Array<keyof HeaderVariant>
  splitVariantProps<Props extends HeaderVariantProps>(props: Props): [HeaderVariantProps, Pretty<DistributiveOmit<Props, keyof HeaderVariantProps>>]
  getVariantProps: (props?: HeaderVariantProps) => HeaderVariantProps
}


export declare const header: HeaderRecipe