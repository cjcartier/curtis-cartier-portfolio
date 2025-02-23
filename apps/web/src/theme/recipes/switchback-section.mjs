import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const switchbackSectionDefaultVariants = {}
const switchbackSectionCompoundVariants = []

const switchbackSectionSlotNames = [
  [
    "root",
    "switchbackSection__root"
  ],
  [
    "heading",
    "switchbackSection__heading"
  ],
  [
    "switchbackWrapper",
    "switchbackSection__switchbackWrapper"
  ],
  [
    "switchbacksContainer",
    "switchbackSection__switchbacksContainer"
  ],
  [
    "switchbackMedia",
    "switchbackSection__switchbackMedia"
  ],
  [
    "mediaOverlay",
    "switchbackSection__mediaOverlay"
  ]
]
const switchbackSectionSlotFns = /* @__PURE__ */ switchbackSectionSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, switchbackSectionDefaultVariants, getSlotCompoundVariant(switchbackSectionCompoundVariants, slotName))])

const switchbackSectionFn = memo((props = {}) => {
  return Object.fromEntries(switchbackSectionSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const switchbackSectionVariantKeys = []
const getVariantProps = (variants) => ({ ...switchbackSectionDefaultVariants, ...compact(variants) })

export const switchbackSection = /* @__PURE__ */ Object.assign(switchbackSectionFn, {
  __recipe__: false,
  __name__: 'switchbackSection',
  raw: (props) => props,
  variantKeys: switchbackSectionVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, switchbackSectionVariantKeys)
  },
  getVariantProps
})