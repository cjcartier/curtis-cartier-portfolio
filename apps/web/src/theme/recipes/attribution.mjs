import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const attributionDefaultVariants = {}
const attributionCompoundVariants = []

const attributionSlotNames = [
  [
    "root",
    "attribution__root"
  ],
  [
    "details",
    "attribution__details"
  ],
  [
    "name",
    "attribution__name"
  ],
  [
    "position",
    "attribution__position"
  ],
  [
    "headshot",
    "attribution__headshot"
  ]
]
const attributionSlotFns = /* @__PURE__ */ attributionSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, attributionDefaultVariants, getSlotCompoundVariant(attributionCompoundVariants, slotName))])

const attributionFn = memo((props = {}) => {
  return Object.fromEntries(attributionSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const attributionVariantKeys = []
const getVariantProps = (variants) => ({ ...attributionDefaultVariants, ...compact(variants) })

export const attribution = /* @__PURE__ */ Object.assign(attributionFn, {
  __recipe__: false,
  __name__: 'attribution',
  raw: (props) => props,
  variantKeys: attributionVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, attributionVariantKeys)
  },
  getVariantProps
})