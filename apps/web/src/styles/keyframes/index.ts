import { defineKeyframes } from '@pandacss/dev';

export const keyframes = defineKeyframes({
  fadeIn: {
    '0%': { opacity: '0' },
    '100%': { opacity: '1' },
  },
  fadeOut: {
    '0%': { opacity: '1' },
    '100%': { opacity: '0' },
  },
  expandTestimonial: {
    from: { maxHeight: 'var(--copy-min-height)' },
    to: { maxHeight: 'var(--copy-max-height)' },
  },
  collapseTestimonial: {
    from: { maxHeight: 'var(--copy-max-height)' },
    to: { maxHeight: 'var(--copy-min-height)' },
  },
  flipOutRight: {
    from: { transform: 'rotateY(0deg)' },
    to: { transform: 'rotateY(90deg)' },
  },
  flipInRight: {
    from: { transform: 'rotateY(270deg)' },
    to: { transform: 'rotateY(0deg)' },
  },
  buttonLoading: {
    '0%': { width: '45%' },
    '50%': { width: '55%' },
    '100%': { width: '45%' },
  },
});

export default keyframes;
