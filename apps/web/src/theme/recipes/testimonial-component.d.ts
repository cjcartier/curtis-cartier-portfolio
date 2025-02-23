/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface TestimonialComponentVariant {
  
}

type TestimonialComponentVariantMap = {
  [key in keyof TestimonialComponentVariant]: Array<TestimonialComponentVariant[key]>
}

export type TestimonialComponentVariantProps = {
  [key in keyof TestimonialComponentVariant]?: ConditionalValue<TestimonialComponentVariant[key]> | undefined
}

export interface TestimonialComponentRecipe {
  __type: TestimonialComponentVariantProps
  (props?: TestimonialComponentVariantProps): Pretty<Record<"root" | "headerWrapper" | "testimonials", string>>
  raw: (props?: TestimonialComponentVariantProps) => TestimonialComponentVariantProps
  variantMap: TestimonialComponentVariantMap
  variantKeys: Array<keyof TestimonialComponentVariant>
  splitVariantProps<Props extends TestimonialComponentVariantProps>(props: Props): [TestimonialComponentVariantProps, Pretty<DistributiveOmit<Props, keyof TestimonialComponentVariantProps>>]
  getVariantProps: (props?: TestimonialComponentVariantProps) => TestimonialComponentVariantProps
}


export declare const testimonialComponent: TestimonialComponentRecipe