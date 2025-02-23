/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface ToolsComponentVariant {
  
}

type ToolsComponentVariantMap = {
  [key in keyof ToolsComponentVariant]: Array<ToolsComponentVariant[key]>
}

export type ToolsComponentVariantProps = {
  [key in keyof ToolsComponentVariant]?: ConditionalValue<ToolsComponentVariant[key]> | undefined
}

export interface ToolsComponentRecipe {
  __type: ToolsComponentVariantProps
  (props?: ToolsComponentVariantProps): Pretty<Record<"root" | "toolsContainer" | "hiddenTool" | "tool" | "toolLogo" | "hoverCardIcon", string>>
  raw: (props?: ToolsComponentVariantProps) => ToolsComponentVariantProps
  variantMap: ToolsComponentVariantMap
  variantKeys: Array<keyof ToolsComponentVariant>
  splitVariantProps<Props extends ToolsComponentVariantProps>(props: Props): [ToolsComponentVariantProps, Pretty<DistributiveOmit<Props, keyof ToolsComponentVariantProps>>]
  getVariantProps: (props?: ToolsComponentVariantProps) => ToolsComponentVariantProps
}


export declare const toolsComponent: ToolsComponentRecipe