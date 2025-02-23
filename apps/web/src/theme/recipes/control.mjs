import { memo, splitProps } from '../helpers.mjs';
import { createRecipe, mergeRecipes } from './create-recipe.mjs';

const controlFn = /* @__PURE__ */ createRecipe('control', {}, [])

const controlVariantMap = {}

const controlVariantKeys = Object.keys(controlVariantMap)

export const control = /* @__PURE__ */ Object.assign(memo(controlFn.recipeFn), {
  __recipe__: true,
  __name__: 'control',
  __getCompoundVariantCss__: controlFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: controlVariantKeys,
  variantMap: controlVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, controlVariantKeys)
  },
  getVariantProps: controlFn.getVariantProps,
})