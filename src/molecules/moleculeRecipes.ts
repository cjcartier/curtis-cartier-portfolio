import badgeRecipe from 'molecules/badge/styles';
import buttonRecipe from 'molecules/button/styles';
import carouselRecipe from 'molecules/carousel/styles';
import frameRecipe from 'molecules/frame/styles';
import headingRecipe from 'molecules/heading/styles';
import hoverCardRecipe from 'molecules/hoverCard/styles';
import switchbackRecipe from 'molecules/switchback/styles';
import testimonialRecipe from 'molecules/testimonial/styles';
import themeToggleRecipe from 'molecules/themeToggle/styles';

export const moleculeRecipes = {
  badge: badgeRecipe,
  frame: frameRecipe,
  switchback: switchbackRecipe,
  themeToggle: themeToggleRecipe,
};

export const moleculeSlotRecipes = {
  button: buttonRecipe,
  carousel: carouselRecipe,
  heading: headingRecipe,
  hoverCard: hoverCardRecipe,
  testimonial: testimonialRecipe,
};

export default moleculeSlotRecipes;
