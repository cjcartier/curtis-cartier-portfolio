import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const testimonialDefaultVariants = {}
const testimonialCompoundVariants = []

const testimonialSlotNames = [
  [
    "root",
    "testimonial__root"
  ],
  [
    "topContainer",
    "testimonial__topContainer"
  ],
  [
    "expandButton",
    "testimonial__expandButton"
  ],
  [
    "copy",
    "testimonial__copy"
  ]
]
const testimonialSlotFns = /* @__PURE__ */ testimonialSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, testimonialDefaultVariants, getSlotCompoundVariant(testimonialCompoundVariants, slotName))])

const testimonialFn = memo((props = {}) => {
  return Object.fromEntries(testimonialSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const testimonialVariantKeys = []
const getVariantProps = (variants) => ({ ...testimonialDefaultVariants, ...compact(variants) })

export const testimonial = /* @__PURE__ */ Object.assign(testimonialFn, {
  __recipe__: false,
  __name__: 'testimonial',
  raw: (props) => props,
  variantKeys: testimonialVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, testimonialVariantKeys)
  },
  getVariantProps
})