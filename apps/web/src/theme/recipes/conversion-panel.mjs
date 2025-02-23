import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const conversionPanelDefaultVariants = {}
const conversionPanelCompoundVariants = []

const conversionPanelSlotNames = [
  [
    "root",
    "conversionPanel__root"
  ],
  [
    "headingWrapper",
    "conversionPanel__headingWrapper"
  ],
  [
    "headingFrame",
    "conversionPanel__headingFrame"
  ],
  [
    "formWrapper",
    "conversionPanel__formWrapper"
  ],
  [
    "formTitle",
    "conversionPanel__formTitle"
  ],
  [
    "doodle",
    "conversionPanel__doodle"
  ],
  [
    "doodleOne",
    "conversionPanel__doodleOne"
  ],
  [
    "doodleTwo",
    "conversionPanel__doodleTwo"
  ],
  [
    "doodleThree",
    "conversionPanel__doodleThree"
  ]
]
const conversionPanelSlotFns = /* @__PURE__ */ conversionPanelSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, conversionPanelDefaultVariants, getSlotCompoundVariant(conversionPanelCompoundVariants, slotName))])

const conversionPanelFn = memo((props = {}) => {
  return Object.fromEntries(conversionPanelSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const conversionPanelVariantKeys = []
const getVariantProps = (variants) => ({ ...conversionPanelDefaultVariants, ...compact(variants) })

export const conversionPanel = /* @__PURE__ */ Object.assign(conversionPanelFn, {
  __recipe__: false,
  __name__: 'conversionPanel',
  raw: (props) => props,
  variantKeys: conversionPanelVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, conversionPanelVariantKeys)
  },
  getVariantProps
})