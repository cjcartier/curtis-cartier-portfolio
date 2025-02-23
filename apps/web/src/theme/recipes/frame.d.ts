/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface FrameVariant {
  /**
 * @default "md"
 */
size: "sm" | "md" | "lg"
}

type FrameVariantMap = {
  [key in keyof FrameVariant]: Array<FrameVariant[key]>
}

export type FrameVariantProps = {
  [key in keyof FrameVariant]?: ConditionalValue<FrameVariant[key]> | undefined
}

export interface FrameRecipe {
  __type: FrameVariantProps
  (props?: FrameVariantProps): string
  raw: (props?: FrameVariantProps) => FrameVariantProps
  variantMap: FrameVariantMap
  variantKeys: Array<keyof FrameVariant>
  splitVariantProps<Props extends FrameVariantProps>(props: Props): [FrameVariantProps, Pretty<DistributiveOmit<Props, keyof FrameVariantProps>>]
  getVariantProps: (props?: FrameVariantProps) => FrameVariantProps
}


export declare const frame: FrameRecipe