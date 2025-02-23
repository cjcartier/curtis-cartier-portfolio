import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const buttonDefaultVariants = {
  "hierarchy": "fill",
  "size": "md"
}
const buttonCompoundVariants = []

const buttonSlotNames = [
  [
    "root",
    "button__root"
  ],
  [
    "label",
    "button__label"
  ],
  [
    "endIcon",
    "button__endIcon"
  ]
]
const buttonSlotFns = /* @__PURE__ */ buttonSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, buttonDefaultVariants, getSlotCompoundVariant(buttonCompoundVariants, slotName))])

const buttonFn = memo((props = {}) => {
  return Object.fromEntries(buttonSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const buttonVariantKeys = [
  "size",
  "hierarchy",
  "color",
  "noPadding",
  "fullWidth",
  "loading"
]
const getVariantProps = (variants) => ({ ...buttonDefaultVariants, ...compact(variants) })

export const button = /* @__PURE__ */ Object.assign(buttonFn, {
  __recipe__: false,
  __name__: 'button',
  raw: (props) => props,
  variantKeys: buttonVariantKeys,
  variantMap: {
  "size": [
    "md",
    "lg"
  ],
  "hierarchy": [
    "fill",
    "ghost",
    "text"
  ],
  "color": [],
  "noPadding": [
    "true"
  ],
  "fullWidth": [
    "true"
  ],
  "loading": [
    "true"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, buttonVariantKeys)
  },
  getVariantProps
})