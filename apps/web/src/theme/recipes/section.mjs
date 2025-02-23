import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const sectionDefaultVariants = {
  "paddingTop": "medium",
  "paddingBottom": "medium"
}
const sectionCompoundVariants = []

const sectionSlotNames = [
  [
    "root",
    "section__root"
  ],
  [
    "grain",
    "section__grain"
  ],
  [
    "container",
    "section__container"
  ]
]
const sectionSlotFns = /* @__PURE__ */ sectionSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, sectionDefaultVariants, getSlotCompoundVariant(sectionCompoundVariants, slotName))])

const sectionFn = memo((props = {}) => {
  return Object.fromEntries(sectionSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const sectionVariantKeys = [
  "paddingTop",
  "paddingBottom"
]
const getVariantProps = (variants) => ({ ...sectionDefaultVariants, ...compact(variants) })

export const section = /* @__PURE__ */ Object.assign(sectionFn, {
  __recipe__: false,
  __name__: 'section',
  raw: (props) => props,
  variantKeys: sectionVariantKeys,
  variantMap: {
  "paddingTop": [
    "none",
    "small",
    "medium",
    "large",
    "xLarge"
  ],
  "paddingBottom": [
    "none",
    "small",
    "medium",
    "large",
    "xLarge"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, sectionVariantKeys)
  },
  getVariantProps
})