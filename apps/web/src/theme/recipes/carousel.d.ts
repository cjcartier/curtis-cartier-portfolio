/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface CarouselVariant {
  
}

type CarouselVariantMap = {
  [key in keyof CarouselVariant]: Array<CarouselVariant[key]>
}

export type CarouselVariantProps = {
  [key in keyof CarouselVariant]?: ConditionalValue<CarouselVariant[key]> | undefined
}

export interface CarouselRecipe {
  __type: CarouselVariantProps
  (props?: CarouselVariantProps): Pretty<Record<"root" | "navigationContainer" | "navigationArrows" | "indicatorGroup" | "indicator", string>>
  raw: (props?: CarouselVariantProps) => CarouselVariantProps
  variantMap: CarouselVariantMap
  variantKeys: Array<keyof CarouselVariant>
  splitVariantProps<Props extends CarouselVariantProps>(props: Props): [CarouselVariantProps, Pretty<DistributiveOmit<Props, keyof CarouselVariantProps>>]
  getVariantProps: (props?: CarouselVariantProps) => CarouselVariantProps
}


export declare const carousel: CarouselRecipe