import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const headingDefaultVariants = {
  "size": "md"
}
const headingCompoundVariants = []

const headingSlotNames = [
  [
    "root",
    "heading__root"
  ],
  [
    "heading",
    "heading__heading"
  ],
  [
    "subheading",
    "heading__subheading"
  ],
  [
    "doodle",
    "heading__doodle"
  ],
  [
    "badges",
    "heading__badges"
  ],
  [
    "buttons",
    "heading__buttons"
  ]
]
const headingSlotFns = /* @__PURE__ */ headingSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, headingDefaultVariants, getSlotCompoundVariant(headingCompoundVariants, slotName))])

const headingFn = memo((props = {}) => {
  return Object.fromEntries(headingSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const headingVariantKeys = [
  "size",
  "alignment"
]
const getVariantProps = (variants) => ({ ...headingDefaultVariants, ...compact(variants) })

export const heading = /* @__PURE__ */ Object.assign(headingFn, {
  __recipe__: false,
  __name__: 'heading',
  raw: (props) => props,
  variantKeys: headingVariantKeys,
  variantMap: {
  "size": [
    "sm",
    "md",
    "lg"
  ],
  "alignment": [
    "start",
    "center"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, headingVariantKeys)
  },
  getVariantProps
})