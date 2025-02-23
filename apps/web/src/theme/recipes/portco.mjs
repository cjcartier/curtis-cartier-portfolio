import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const portcoDefaultVariants = {}
const portcoCompoundVariants = []

const portcoSlotNames = [
  [
    "root",
    "portco__root"
  ],
  [
    "headingContainer",
    "portco__headingContainer"
  ],
  [
    "brandContainer",
    "portco__brandContainer"
  ],
  [
    "brand",
    "portco__brand"
  ]
]
const portcoSlotFns = /* @__PURE__ */ portcoSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, portcoDefaultVariants, getSlotCompoundVariant(portcoCompoundVariants, slotName))])

const portcoFn = memo((props = {}) => {
  return Object.fromEntries(portcoSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const portcoVariantKeys = []
const getVariantProps = (variants) => ({ ...portcoDefaultVariants, ...compact(variants) })

export const portco = /* @__PURE__ */ Object.assign(portcoFn, {
  __recipe__: false,
  __name__: 'portco',
  raw: (props) => props,
  variantKeys: portcoVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, portcoVariantKeys)
  },
  getVariantProps
})