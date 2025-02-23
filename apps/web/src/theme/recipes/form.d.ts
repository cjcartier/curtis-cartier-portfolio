/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface FormVariant {
  hasSubmitted: boolean
}

type FormVariantMap = {
  [key in keyof FormVariant]: Array<FormVariant[key]>
}

export type FormVariantProps = {
  [key in keyof FormVariant]?: ConditionalValue<FormVariant[key]> | undefined
}

export interface FormRecipe {
  __type: FormVariantProps
  (props?: FormVariantProps): Pretty<Record<"root" | "title" | "formSubmission" | "submissionTitle" | "submissionDescription", string>>
  raw: (props?: FormVariantProps) => FormVariantProps
  variantMap: FormVariantMap
  variantKeys: Array<keyof FormVariant>
  splitVariantProps<Props extends FormVariantProps>(props: Props): [FormVariantProps, Pretty<DistributiveOmit<Props, keyof FormVariantProps>>]
  getVariantProps: (props?: FormVariantProps) => FormVariantProps
}


export declare const form: FormRecipe