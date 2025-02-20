import conversionPanelRecipe from 'components/conversionPanel/styles';
import componentHeroRecipe, { heroAssetRecipe } from 'components/hero/styles';
import portcoRecipe from 'components/portco/styles';
import toolsEyebrowRecipe from 'components/switchback/components/toolsEyebrow/styles';
import switchbackSectionRecipe from 'components/switchback/styles';
import testimonialComponentRecipe from 'components/testimonials/styles';
import toolsRecipe from 'components/tools/styles';

export const componentRecipes = {};

export const componentSlotRecipes = {
  conversionPanel: conversionPanelRecipe,
  hero: componentHeroRecipe,
  heroAsset: heroAssetRecipe,
  portco: portcoRecipe,
  switchbackSection: switchbackSectionRecipe,
  testimonialComponent: testimonialComponentRecipe,
  toolsComponent: toolsRecipe,
  toolsEyebrow: toolsEyebrowRecipe,
};
