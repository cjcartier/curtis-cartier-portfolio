/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface ToolsEyebrowVariant {
  
}

type ToolsEyebrowVariantMap = {
  [key in keyof ToolsEyebrowVariant]: Array<ToolsEyebrowVariant[key]>
}

export type ToolsEyebrowVariantProps = {
  [key in keyof ToolsEyebrowVariant]?: ConditionalValue<ToolsEyebrowVariant[key]> | undefined
}

export interface ToolsEyebrowRecipe {
  __type: ToolsEyebrowVariantProps
  (props?: ToolsEyebrowVariantProps): Pretty<Record<"root" | "tool", string>>
  raw: (props?: ToolsEyebrowVariantProps) => ToolsEyebrowVariantProps
  variantMap: ToolsEyebrowVariantMap
  variantKeys: Array<keyof ToolsEyebrowVariant>
  splitVariantProps<Props extends ToolsEyebrowVariantProps>(props: Props): [ToolsEyebrowVariantProps, Pretty<DistributiveOmit<Props, keyof ToolsEyebrowVariantProps>>]
  getVariantProps: (props?: ToolsEyebrowVariantProps) => ToolsEyebrowVariantProps
}


export declare const toolsEyebrow: ToolsEyebrowRecipe