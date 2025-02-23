/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface TestimonialVariant {
  
}

type TestimonialVariantMap = {
  [key in keyof TestimonialVariant]: Array<TestimonialVariant[key]>
}

export type TestimonialVariantProps = {
  [key in keyof TestimonialVariant]?: ConditionalValue<TestimonialVariant[key]> | undefined
}

export interface TestimonialRecipe {
  __type: TestimonialVariantProps
  (props?: TestimonialVariantProps): Pretty<Record<"root" | "topContainer" | "expandButton" | "copy", string>>
  raw: (props?: TestimonialVariantProps) => TestimonialVariantProps
  variantMap: TestimonialVariantMap
  variantKeys: Array<keyof TestimonialVariant>
  splitVariantProps<Props extends TestimonialVariantProps>(props: Props): [TestimonialVariantProps, Pretty<DistributiveOmit<Props, keyof TestimonialVariantProps>>]
  getVariantProps: (props?: TestimonialVariantProps) => TestimonialVariantProps
}


export declare const testimonial: TestimonialRecipe