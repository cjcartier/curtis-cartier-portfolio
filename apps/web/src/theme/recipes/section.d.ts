/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface SectionVariant {
  /**
 * @default "medium"
 */
paddingTop: "none" | "small" | "medium" | "large" | "xLarge"
/**
 * @default "medium"
 */
paddingBottom: "none" | "small" | "medium" | "large" | "xLarge"
}

type SectionVariantMap = {
  [key in keyof SectionVariant]: Array<SectionVariant[key]>
}

export type SectionVariantProps = {
  [key in keyof SectionVariant]?: ConditionalValue<SectionVariant[key]> | undefined
}

export interface SectionRecipe {
  __type: SectionVariantProps
  (props?: SectionVariantProps): Pretty<Record<"root" | "grain" | "container", string>>
  raw: (props?: SectionVariantProps) => SectionVariantProps
  variantMap: SectionVariantMap
  variantKeys: Array<keyof SectionVariant>
  splitVariantProps<Props extends SectionVariantProps>(props: Props): [SectionVariantProps, Pretty<DistributiveOmit<Props, keyof SectionVariantProps>>]
  getVariantProps: (props?: SectionVariantProps) => SectionVariantProps
}


export declare const section: SectionRecipe