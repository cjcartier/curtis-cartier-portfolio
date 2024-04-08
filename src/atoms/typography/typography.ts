import { defineTextStyles } from '@pandacss/dev';

const displayFont = 'var(--grotesk-sharp)';
const bodyFont = 'var(--sans-sharp)';
const codeFont = 'var(--roboto-mono)';

export const fonts = {
  display: { value: displayFont },
  body: { value: bodyFont },
  code: { value: codeFont },
};

export const fontSizes = {
  displayXs: { value: '1.5rem' },
  displaySm: { value: '1.875rem' },
  displayMd: { value: '2.25rem' },
  displayLg: { value: '3rem' },
  displayXl: { value: '3.75rem' },
  display2xl: { value: '4.5rem' },
  textXs: { value: '0.75rem' },
  textSm: { value: '0.875rem' },
  textMd: { value: '1rem' },
  textLg: { value: '1.125rem' },
  textXl: { value: '1.25rem' },
  code: { value: '1rem' },
};

export const lineHeights = {
  zero: { value: '0' },
  displayXs: { value: '1.33' },
  displaySm: { value: '1.25' },
  displayMd: { value: '1.22' },
  displayLg: { value: '1.25' },
  displayXl: { value: '1.2' },
  display2xl: { value: '1.25' },
  textXs: { value: '1.5' },
  textSm: { value: '1.42' },
  textMd: { value: '1.5' },
  textLg: { value: '1.55' },
  textXl: { value: '1.5' },
  code: { value: '1.5' },
};

export const letterSpacings = {
  neg2: { value: '-0.02em' },
  0: { value: '0em' },
};

export const fontWeights = {
  regular: { value: '400' },
  medium: { value: '500' },
  semibold: { value: '600' },
  bold: { value: '700' },
  extraBold: { value: '800' },
};

export const typeMap = {
  text: {
    xs: {
      value: {
        fontFamily: fonts.body,
        fontSize: fontSizes.textXs.value,
        lineHeight: lineHeights.textXs.value,
      },
    },
    sm: {
      value: {
        fontFamily: fonts.body,
        fontSize: fontSizes.textSm.value,
        lineHeight: lineHeights.textSm.value,
      },
    },
    md: {
      value: {
        fontFamily: fonts.body,
        fontSize: fontSizes.textMd.value,
        lineHeight: lineHeights.textMd.value,
      },
    },
    lg: {
      value: {
        fontFamily: fonts.body,
        fontSize: fontSizes.textLg.value,
        lineHeight: lineHeights.textLg.value,
      },
    },
    xl: {
      value: {
        fontFamily: fonts.body,
        fontSize: fontSizes.textXl.value,
        lineHeight: lineHeights.textXl.value,
      },
    },
  },
  display: {
    xs: {
      value: {
        fontFamily: fonts.display,
        fontSize: fontSizes.displayXs.value,
        lineHeight: lineHeights.displayXs.value,
        fontWeight: fontWeights.bold.value,
      },
    },
    sm: {
      value: {
        fontFamily: fonts.display,
        fontSize: fontSizes.displaySm.value,
        lineHeight: lineHeights.displaySm.value,
        fontWeight: fontWeights.bold.value,
      },
    },
    md: {
      value: {
        fontFamily: fonts.display,
        fontSize: fontSizes.displayMd.value,
        lineHeight: lineHeights.displayMd.value,
        fontWeight: fontWeights.bold.value,
        letterSpacing: letterSpacings.neg2.value,
      },
    },
    lg: {
      value: {
        fontFamily: fonts.display,
        fontSize: fontSizes.displayLg.value,
        lineHeight: lineHeights.displayLg.value,
        fontWeight: fontWeights.bold.value,
        letterSpacing: letterSpacings.neg2.value,
      },
    },
    xl: {
      value: {
        fontFamily: fonts.display,
        fontSize: fontSizes.displayXl.value,
        lineHeight: lineHeights.displayXl.value,
        fontWeight: fontWeights.bold.value,
        letterSpacing: letterSpacings.neg2.value,
      },
    },
    xxl: {
      value: {
        fontFamily: fonts.display,
        fontSize: fontSizes.display2xl.value,
        lineHeight: lineHeights.display2xl.value,
        fontWeight: fontWeights.bold.value,
        letterSpacing: letterSpacings.neg2.value,
      },
    },
  },
  code: {
    value: {
      fontFamily: fonts.code,
      fontSize: fontSizes.code.value,
      lineHeight: lineHeights.code.value,
    },
  },
};

const textStyles = defineTextStyles(typeMap);

export const fontTokens = {
  fonts,
  fontSizes,
  lineHeights,
  letterSpacings,
  fontWeights,
};
export default textStyles;
