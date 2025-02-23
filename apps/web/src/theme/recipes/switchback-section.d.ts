/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface SwitchbackSectionVariant {
  
}

type SwitchbackSectionVariantMap = {
  [key in keyof SwitchbackSectionVariant]: Array<SwitchbackSectionVariant[key]>
}

export type SwitchbackSectionVariantProps = {
  [key in keyof SwitchbackSectionVariant]?: ConditionalValue<SwitchbackSectionVariant[key]> | undefined
}

export interface SwitchbackSectionRecipe {
  __type: SwitchbackSectionVariantProps
  (props?: SwitchbackSectionVariantProps): Pretty<Record<"root" | "heading" | "switchbackWrapper" | "switchbacksContainer" | "switchbackMedia" | "mediaOverlay", string>>
  raw: (props?: SwitchbackSectionVariantProps) => SwitchbackSectionVariantProps
  variantMap: SwitchbackSectionVariantMap
  variantKeys: Array<keyof SwitchbackSectionVariant>
  splitVariantProps<Props extends SwitchbackSectionVariantProps>(props: Props): [SwitchbackSectionVariantProps, Pretty<DistributiveOmit<Props, keyof SwitchbackSectionVariantProps>>]
  getVariantProps: (props?: SwitchbackSectionVariantProps) => SwitchbackSectionVariantProps
}


export declare const switchbackSection: SwitchbackSectionRecipe