import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const toolsEyebrowDefaultVariants = {}
const toolsEyebrowCompoundVariants = []

const toolsEyebrowSlotNames = [
  [
    "root",
    "toolsEyebrow__root"
  ],
  [
    "tool",
    "toolsEyebrow__tool"
  ]
]
const toolsEyebrowSlotFns = /* @__PURE__ */ toolsEyebrowSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, toolsEyebrowDefaultVariants, getSlotCompoundVariant(toolsEyebrowCompoundVariants, slotName))])

const toolsEyebrowFn = memo((props = {}) => {
  return Object.fromEntries(toolsEyebrowSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const toolsEyebrowVariantKeys = []
const getVariantProps = (variants) => ({ ...toolsEyebrowDefaultVariants, ...compact(variants) })

export const toolsEyebrow = /* @__PURE__ */ Object.assign(toolsEyebrowFn, {
  __recipe__: false,
  __name__: 'toolsEyebrow',
  raw: (props) => props,
  variantKeys: toolsEyebrowVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, toolsEyebrowVariantKeys)
  },
  getVariantProps
})