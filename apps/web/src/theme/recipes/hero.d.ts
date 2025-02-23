/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface HeroVariant {
  
}

type HeroVariantMap = {
  [key in keyof HeroVariant]: Array<HeroVariant[key]>
}

export type HeroVariantProps = {
  [key in keyof HeroVariant]?: ConditionalValue<HeroVariant[key]> | undefined
}

export interface HeroRecipe {
  __type: HeroVariantProps
  (props?: HeroVariantProps): Pretty<Record<"root" | "heading" | "doodle" | "doodleOne" | "doodleTwo", string>>
  raw: (props?: HeroVariantProps) => HeroVariantProps
  variantMap: HeroVariantMap
  variantKeys: Array<keyof HeroVariant>
  splitVariantProps<Props extends HeroVariantProps>(props: Props): [HeroVariantProps, Pretty<DistributiveOmit<Props, keyof HeroVariantProps>>]
  getVariantProps: (props?: HeroVariantProps) => HeroVariantProps
}


export declare const hero: HeroRecipe