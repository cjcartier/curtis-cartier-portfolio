import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const footerDefaultVariants = {}
const footerCompoundVariants = []

const footerSlotNames = [
  [
    "section",
    "footer__section"
  ],
  [
    "glowOne",
    "footer__glowOne"
  ],
  [
    "glowTwo",
    "footer__glowTwo"
  ],
  [
    "root",
    "footer__root"
  ],
  [
    "container",
    "footer__container"
  ],
  [
    "logoWrapper",
    "footer__logoWrapper"
  ],
  [
    "logo",
    "footer__logo"
  ],
  [
    "menuContainer",
    "footer__menuContainer"
  ],
  [
    "menuWrapper",
    "footer__menuWrapper"
  ],
  [
    "menuList",
    "footer__menuList"
  ],
  [
    "menuHeading",
    "footer__menuHeading"
  ],
  [
    "menuItem",
    "footer__menuItem"
  ],
  [
    "legalContainer",
    "footer__legalContainer"
  ],
  [
    "copyright",
    "footer__copyright"
  ]
]
const footerSlotFns = /* @__PURE__ */ footerSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, footerDefaultVariants, getSlotCompoundVariant(footerCompoundVariants, slotName))])

const footerFn = memo((props = {}) => {
  return Object.fromEntries(footerSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const footerVariantKeys = []
const getVariantProps = (variants) => ({ ...footerDefaultVariants, ...compact(variants) })

export const footer = /* @__PURE__ */ Object.assign(footerFn, {
  __recipe__: false,
  __name__: 'footer',
  raw: (props) => props,
  variantKeys: footerVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, footerVariantKeys)
  },
  getVariantProps
})