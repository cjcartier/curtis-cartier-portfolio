import attributionRecipe from 'molecules/attribution/styles';
import badgeRecipe from 'molecules/badge/styles';
import buttonRecipe from 'molecules/button/styles';
import carouselRecipe from 'molecules/carousel/styles';
import frameRecipe from 'molecules/frame/styles';
import headingRecipe from 'molecules/heading/styles';
import hoverCardRecipe from 'molecules/hoverCard/styles';
import controlRecipe from 'molecules/inputs/control/styles';
import labelRecipe from 'molecules/inputs/label/styles';
import textInputRecipe from 'molecules/inputs/text/styles';
import sectionRecipe from 'molecules/section/styles';
import switchbackRecipe from 'molecules/switchback/styles';
import testimonialRecipe from 'molecules/testimonial/styles';
import themeToggleRecipe from 'molecules/themeToggle/styles';

export const moleculeRecipes = {
  badge: badgeRecipe,
  control: controlRecipe,
  frame: frameRecipe,
  label: labelRecipe,
  switchback: switchbackRecipe,
  themeToggle: themeToggleRecipe,
};

export const moleculeSlotRecipes = {
  attribution: attributionRecipe,
  button: buttonRecipe,
  carousel: carouselRecipe,
  heading: headingRecipe,
  hoverCard: hoverCardRecipe,
  section: sectionRecipe,
  testimonial: testimonialRecipe,
  textInput: textInputRecipe,
};

export default moleculeSlotRecipes;
