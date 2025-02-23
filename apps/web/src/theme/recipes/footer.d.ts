/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface FooterVariant {
  
}

type FooterVariantMap = {
  [key in keyof FooterVariant]: Array<FooterVariant[key]>
}

export type FooterVariantProps = {
  [key in keyof FooterVariant]?: ConditionalValue<FooterVariant[key]> | undefined
}

export interface FooterRecipe {
  __type: FooterVariantProps
  (props?: FooterVariantProps): Pretty<Record<"section" | "glowOne" | "glowTwo" | "root" | "container" | "logoWrapper" | "logo" | "menuContainer" | "menuWrapper" | "menuList" | "menuHeading" | "menuItem" | "legalContainer" | "copyright", string>>
  raw: (props?: FooterVariantProps) => FooterVariantProps
  variantMap: FooterVariantMap
  variantKeys: Array<keyof FooterVariant>
  splitVariantProps<Props extends FooterVariantProps>(props: Props): [FooterVariantProps, Pretty<DistributiveOmit<Props, keyof FooterVariantProps>>]
  getVariantProps: (props?: FooterVariantProps) => FooterVariantProps
}


export declare const footer: FooterRecipe