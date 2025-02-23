import { memo, splitProps } from '../helpers.mjs';
import { createRecipe, mergeRecipes } from './create-recipe.mjs';

const glowFn = /* @__PURE__ */ createRecipe('glow', {
  "temperature": "cool"
}, [])

const glowVariantMap = {
  "temperature": [
    "cool",
    "warm"
  ]
}

const glowVariantKeys = Object.keys(glowVariantMap)

export const glow = /* @__PURE__ */ Object.assign(memo(glowFn.recipeFn), {
  __recipe__: true,
  __name__: 'glow',
  __getCompoundVariantCss__: glowFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: glowVariantKeys,
  variantMap: glowVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, glowVariantKeys)
  },
  getVariantProps: glowFn.getVariantProps,
})