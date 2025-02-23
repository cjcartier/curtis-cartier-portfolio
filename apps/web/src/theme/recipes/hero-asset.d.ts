/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface HeroAssetVariant {
  
}

type HeroAssetVariantMap = {
  [key in keyof HeroAssetVariant]: Array<HeroAssetVariant[key]>
}

export type HeroAssetVariantProps = {
  [key in keyof HeroAssetVariant]?: ConditionalValue<HeroAssetVariant[key]> | undefined
}

export interface HeroAssetRecipe {
  __type: HeroAssetVariantProps
  (props?: HeroAssetVariantProps): Pretty<Record<"root" | "image" | "frame" | "asset" | "assetOne" | "assetTwo" | "assetThree" | "assetFour", string>>
  raw: (props?: HeroAssetVariantProps) => HeroAssetVariantProps
  variantMap: HeroAssetVariantMap
  variantKeys: Array<keyof HeroAssetVariant>
  splitVariantProps<Props extends HeroAssetVariantProps>(props: Props): [HeroAssetVariantProps, Pretty<DistributiveOmit<Props, keyof HeroAssetVariantProps>>]
  getVariantProps: (props?: HeroAssetVariantProps) => HeroAssetVariantProps
}


export declare const heroAsset: HeroAssetRecipe