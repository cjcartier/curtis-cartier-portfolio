import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const headerDefaultVariants = {}
const headerCompoundVariants = []

const headerSlotNames = [
  [
    "root",
    "header__root"
  ],
  [
    "headerWrapper",
    "header__headerWrapper"
  ],
  [
    "logoWrapper",
    "header__logoWrapper"
  ],
  [
    "logo",
    "header__logo"
  ]
]
const headerSlotFns = /* @__PURE__ */ headerSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, headerDefaultVariants, getSlotCompoundVariant(headerCompoundVariants, slotName))])

const headerFn = memo((props = {}) => {
  return Object.fromEntries(headerSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const headerVariantKeys = []
const getVariantProps = (variants) => ({ ...headerDefaultVariants, ...compact(variants) })

export const header = /* @__PURE__ */ Object.assign(headerFn, {
  __recipe__: false,
  __name__: 'header',
  raw: (props) => props,
  variantKeys: headerVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, headerVariantKeys)
  },
  getVariantProps
})