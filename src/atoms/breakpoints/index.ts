export const breakpointsValue = {
  xs: 375,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1280,
};

export const breakpoints = Object.keys(breakpointsValue).reduce(
  (acc, breakpoint) => {
    acc[breakpoint] = `${breakpointsValue[breakpoint as breakpointKeys]}px`;

    return acc;
  },
  {} as { [key: string]: string }
);

export const media = Object.keys(breakpoints).reduce(
  (acc, breakpoint) => {
    acc[breakpoint] = `@media (min-width: ${breakpoints[breakpoint]})`;

    return acc;
  },
  {} as { [key: string]: string }
);

export default breakpoints;

type breakpointKeys = keyof typeof breakpointsValue;
