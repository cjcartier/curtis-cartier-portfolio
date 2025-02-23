import { memo, splitProps } from '../helpers.mjs';
import { createRecipe, mergeRecipes } from './create-recipe.mjs';

const frameFn = /* @__PURE__ */ createRecipe('frame', {
  "size": "md"
}, [])

const frameVariantMap = {
  "size": [
    "sm",
    "md",
    "lg"
  ]
}

const frameVariantKeys = Object.keys(frameVariantMap)

export const frame = /* @__PURE__ */ Object.assign(memo(frameFn.recipeFn), {
  __recipe__: true,
  __name__: 'frame',
  __getCompoundVariantCss__: frameFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: frameVariantKeys,
  variantMap: frameVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, frameVariantKeys)
  },
  getVariantProps: frameFn.getVariantProps,
})