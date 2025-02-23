import { memo, splitProps } from '../helpers.mjs';
import { createRecipe, mergeRecipes } from './create-recipe.mjs';

const switchbackFn = /* @__PURE__ */ createRecipe('switchback', {
  "reversed": false
}, [])

const switchbackVariantMap = {
  "reversed": [
    "true"
  ]
}

const switchbackVariantKeys = Object.keys(switchbackVariantMap)

export const switchback = /* @__PURE__ */ Object.assign(memo(switchbackFn.recipeFn), {
  __recipe__: true,
  __name__: 'switchback',
  __getCompoundVariantCss__: switchbackFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: switchbackVariantKeys,
  variantMap: switchbackVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, switchbackVariantKeys)
  },
  getVariantProps: switchbackFn.getVariantProps,
})