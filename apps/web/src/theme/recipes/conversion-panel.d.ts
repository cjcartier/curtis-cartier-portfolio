/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface ConversionPanelVariant {
  
}

type ConversionPanelVariantMap = {
  [key in keyof ConversionPanelVariant]: Array<ConversionPanelVariant[key]>
}

export type ConversionPanelVariantProps = {
  [key in keyof ConversionPanelVariant]?: ConditionalValue<ConversionPanelVariant[key]> | undefined
}

export interface ConversionPanelRecipe {
  __type: ConversionPanelVariantProps
  (props?: ConversionPanelVariantProps): Pretty<Record<"root" | "headingWrapper" | "headingFrame" | "formWrapper" | "formTitle" | "doodle" | "doodleOne" | "doodleTwo" | "doodleThree", string>>
  raw: (props?: ConversionPanelVariantProps) => ConversionPanelVariantProps
  variantMap: ConversionPanelVariantMap
  variantKeys: Array<keyof ConversionPanelVariant>
  splitVariantProps<Props extends ConversionPanelVariantProps>(props: Props): [ConversionPanelVariantProps, Pretty<DistributiveOmit<Props, keyof ConversionPanelVariantProps>>]
  getVariantProps: (props?: ConversionPanelVariantProps) => ConversionPanelVariantProps
}


export declare const conversionPanel: ConversionPanelRecipe