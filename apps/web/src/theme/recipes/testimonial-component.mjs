import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const testimonialComponentDefaultVariants = {}
const testimonialComponentCompoundVariants = []

const testimonialComponentSlotNames = [
  [
    "root",
    "testimonialComponent__root"
  ],
  [
    "headerWrapper",
    "testimonialComponent__headerWrapper"
  ],
  [
    "testimonials",
    "testimonialComponent__testimonials"
  ]
]
const testimonialComponentSlotFns = /* @__PURE__ */ testimonialComponentSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, testimonialComponentDefaultVariants, getSlotCompoundVariant(testimonialComponentCompoundVariants, slotName))])

const testimonialComponentFn = memo((props = {}) => {
  return Object.fromEntries(testimonialComponentSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const testimonialComponentVariantKeys = []
const getVariantProps = (variants) => ({ ...testimonialComponentDefaultVariants, ...compact(variants) })

export const testimonialComponent = /* @__PURE__ */ Object.assign(testimonialComponentFn, {
  __recipe__: false,
  __name__: 'testimonialComponent',
  raw: (props) => props,
  variantKeys: testimonialComponentVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, testimonialComponentVariantKeys)
  },
  getVariantProps
})