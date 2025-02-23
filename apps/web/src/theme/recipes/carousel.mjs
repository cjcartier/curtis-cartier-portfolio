import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const carouselDefaultVariants = {}
const carouselCompoundVariants = []

const carouselSlotNames = [
  [
    "root",
    "carousel__root"
  ],
  [
    "navigationContainer",
    "carousel__navigationContainer"
  ],
  [
    "navigationArrows",
    "carousel__navigationArrows"
  ],
  [
    "indicatorGroup",
    "carousel__indicatorGroup"
  ],
  [
    "indicator",
    "carousel__indicator"
  ]
]
const carouselSlotFns = /* @__PURE__ */ carouselSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, carouselDefaultVariants, getSlotCompoundVariant(carouselCompoundVariants, slotName))])

const carouselFn = memo((props = {}) => {
  return Object.fromEntries(carouselSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const carouselVariantKeys = []
const getVariantProps = (variants) => ({ ...carouselDefaultVariants, ...compact(variants) })

export const carousel = /* @__PURE__ */ Object.assign(carouselFn, {
  __recipe__: false,
  __name__: 'carousel',
  raw: (props) => props,
  variantKeys: carouselVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, carouselVariantKeys)
  },
  getVariantProps
})