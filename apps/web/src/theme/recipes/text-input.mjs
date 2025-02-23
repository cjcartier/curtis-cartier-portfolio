import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const textInputDefaultVariants = {}
const textInputCompoundVariants = []

const textInputSlotNames = [
  [
    "root",
    "textInput__root"
  ],
  [
    "input",
    "textInput__input"
  ],
  [
    "resizeIcon",
    "textInput__resizeIcon"
  ]
]
const textInputSlotFns = /* @__PURE__ */ textInputSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, textInputDefaultVariants, getSlotCompoundVariant(textInputCompoundVariants, slotName))])

const textInputFn = memo((props = {}) => {
  return Object.fromEntries(textInputSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const textInputVariantKeys = [
  "error"
]
const getVariantProps = (variants) => ({ ...textInputDefaultVariants, ...compact(variants) })

export const textInput = /* @__PURE__ */ Object.assign(textInputFn, {
  __recipe__: false,
  __name__: 'textInput',
  raw: (props) => props,
  variantKeys: textInputVariantKeys,
  variantMap: {
  "error": [
    "true"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, textInputVariantKeys)
  },
  getVariantProps
})