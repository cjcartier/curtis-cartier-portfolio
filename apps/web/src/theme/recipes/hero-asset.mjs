import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const heroAssetDefaultVariants = {}
const heroAssetCompoundVariants = []

const heroAssetSlotNames = [
  [
    "root",
    "hero-asset__root"
  ],
  [
    "image",
    "hero-asset__image"
  ],
  [
    "frame",
    "hero-asset__frame"
  ],
  [
    "asset",
    "hero-asset__asset"
  ],
  [
    "assetOne",
    "hero-asset__assetOne"
  ],
  [
    "assetTwo",
    "hero-asset__assetTwo"
  ],
  [
    "assetThree",
    "hero-asset__assetThree"
  ],
  [
    "assetFour",
    "hero-asset__assetFour"
  ]
]
const heroAssetSlotFns = /* @__PURE__ */ heroAssetSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, heroAssetDefaultVariants, getSlotCompoundVariant(heroAssetCompoundVariants, slotName))])

const heroAssetFn = memo((props = {}) => {
  return Object.fromEntries(heroAssetSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const heroAssetVariantKeys = []
const getVariantProps = (variants) => ({ ...heroAssetDefaultVariants, ...compact(variants) })

export const heroAsset = /* @__PURE__ */ Object.assign(heroAssetFn, {
  __recipe__: false,
  __name__: 'heroAsset',
  raw: (props) => props,
  variantKeys: heroAssetVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, heroAssetVariantKeys)
  },
  getVariantProps
})