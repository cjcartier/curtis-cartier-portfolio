import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const toolsComponentDefaultVariants = {}
const toolsComponentCompoundVariants = []

const toolsComponentSlotNames = [
  [
    "root",
    "tools__root"
  ],
  [
    "toolsContainer",
    "tools__toolsContainer"
  ],
  [
    "hiddenTool",
    "tools__hiddenTool"
  ],
  [
    "tool",
    "tools__tool"
  ],
  [
    "toolLogo",
    "tools__toolLogo"
  ],
  [
    "hoverCardIcon",
    "tools__hoverCardIcon"
  ]
]
const toolsComponentSlotFns = /* @__PURE__ */ toolsComponentSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, toolsComponentDefaultVariants, getSlotCompoundVariant(toolsComponentCompoundVariants, slotName))])

const toolsComponentFn = memo((props = {}) => {
  return Object.fromEntries(toolsComponentSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const toolsComponentVariantKeys = []
const getVariantProps = (variants) => ({ ...toolsComponentDefaultVariants, ...compact(variants) })

export const toolsComponent = /* @__PURE__ */ Object.assign(toolsComponentFn, {
  __recipe__: false,
  __name__: 'toolsComponent',
  raw: (props) => props,
  variantKeys: toolsComponentVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, toolsComponentVariantKeys)
  },
  getVariantProps
})