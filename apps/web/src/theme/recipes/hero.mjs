import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const heroDefaultVariants = {}
const heroCompoundVariants = []

const heroSlotNames = [
  [
    "root",
    "hero__root"
  ],
  [
    "heading",
    "hero__heading"
  ],
  [
    "doodle",
    "hero__doodle"
  ],
  [
    "doodleOne",
    "hero__doodleOne"
  ],
  [
    "doodleTwo",
    "hero__doodleTwo"
  ]
]
const heroSlotFns = /* @__PURE__ */ heroSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, heroDefaultVariants, getSlotCompoundVariant(heroCompoundVariants, slotName))])

const heroFn = memo((props = {}) => {
  return Object.fromEntries(heroSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const heroVariantKeys = []
const getVariantProps = (variants) => ({ ...heroDefaultVariants, ...compact(variants) })

export const hero = /* @__PURE__ */ Object.assign(heroFn, {
  __recipe__: false,
  __name__: 'hero',
  raw: (props) => props,
  variantKeys: heroVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, heroVariantKeys)
  },
  getVariantProps
})