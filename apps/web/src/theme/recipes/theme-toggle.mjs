import { memo, splitProps } from '../helpers.mjs';
import { createRecipe, mergeRecipes } from './create-recipe.mjs';

const themeToggleFn = /* @__PURE__ */ createRecipe('theme-toggle', {}, [])

const themeToggleVariantMap = {}

const themeToggleVariantKeys = Object.keys(themeToggleVariantMap)

export const themeToggle = /* @__PURE__ */ Object.assign(memo(themeToggleFn.recipeFn), {
  __recipe__: true,
  __name__: 'themeToggle',
  __getCompoundVariantCss__: themeToggleFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: themeToggleVariantKeys,
  variantMap: themeToggleVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, themeToggleVariantKeys)
  },
  getVariantProps: themeToggleFn.getVariantProps,
})