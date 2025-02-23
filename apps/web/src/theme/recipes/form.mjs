import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const formDefaultVariants = {}
const formCompoundVariants = []

const formSlotNames = [
  [
    "root",
    "form__root"
  ],
  [
    "title",
    "form__title"
  ],
  [
    "formSubmission",
    "form__formSubmission"
  ],
  [
    "submissionTitle",
    "form__submissionTitle"
  ],
  [
    "submissionDescription",
    "form__submissionDescription"
  ]
]
const formSlotFns = /* @__PURE__ */ formSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, formDefaultVariants, getSlotCompoundVariant(formCompoundVariants, slotName))])

const formFn = memo((props = {}) => {
  return Object.fromEntries(formSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const formVariantKeys = [
  "hasSubmitted"
]
const getVariantProps = (variants) => ({ ...formDefaultVariants, ...compact(variants) })

export const form = /* @__PURE__ */ Object.assign(formFn, {
  __recipe__: false,
  __name__: 'form',
  raw: (props) => props,
  variantKeys: formVariantKeys,
  variantMap: {
  "hasSubmitted": [
    "true"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, formVariantKeys)
  },
  getVariantProps
})