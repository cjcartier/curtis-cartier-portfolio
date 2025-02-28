/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface HeadingVariant {
  /**
 * @default "md"
 */
size: "sm" | "md" | "lg"
alignment: "start" | "center"
}

type HeadingVariantMap = {
  [key in keyof HeadingVariant]: Array<HeadingVariant[key]>
}

export type HeadingVariantProps = {
  [key in keyof HeadingVariant]?: ConditionalValue<HeadingVariant[key]> | undefined
}

export interface HeadingRecipe {
  __type: HeadingVariantProps
  (props?: HeadingVariantProps): Pretty<Record<"root" | "heading" | "subheading" | "doodle" | "badges" | "buttons", string>>
  raw: (props?: HeadingVariantProps) => HeadingVariantProps
  variantMap: HeadingVariantMap
  variantKeys: Array<keyof HeadingVariant>
  splitVariantProps<Props extends HeadingVariantProps>(props: Props): [HeadingVariantProps, Pretty<DistributiveOmit<Props, keyof HeadingVariantProps>>]
  getVariantProps: (props?: HeadingVariantProps) => HeadingVariantProps
}


export declare const heading: HeadingRecipe