const tokens = {
  "colors.white": {
    "value": "#FFFFFF",
    "variable": "var(--colors-white)"
  },
  "colors.black": {
    "value": "#000000",
    "variable": "var(--colors-black)"
  },
  "colors.transparent": {
    "value": "transparent",
    "variable": "var(--colors-transparent)"
  },
  "colors.current": {
    "value": "currentColor",
    "variable": "var(--colors-current)"
  },
  "colors.gray.25": {
    "value": "#F7F9FC",
    "variable": "var(--colors-gray-25)"
  },
  "colors.gray.50": {
    "value": "#eef0f3",
    "variable": "var(--colors-gray-50)"
  },
  "colors.gray.100": {
    "value": "#d4d9e0",
    "variable": "var(--colors-gray-100)"
  },
  "colors.gray.200": {
    "value": "#b8c0cb",
    "variable": "var(--colors-gray-200)"
  },
  "colors.gray.300": {
    "value": "#9ca7b6",
    "variable": "var(--colors-gray-300)"
  },
  "colors.gray.400": {
    "value": "#8693a5",
    "variable": "var(--colors-gray-400)"
  },
  "colors.gray.500": {
    "value": "#718095",
    "variable": "var(--colors-gray-500)"
  },
  "colors.gray.600": {
    "value": "#637184",
    "variable": "var(--colors-gray-600)"
  },
  "colors.gray.700": {
    "value": "#525e6d",
    "variable": "var(--colors-gray-700)"
  },
  "colors.gray.800": {
    "value": "#424b57",
    "variable": "var(--colors-gray-800)"
  },
  "colors.gray.900": {
    "value": "#2f363f",
    "variable": "var(--colors-gray-900)"
  },
  "colors.teal.25": {
    "value": "#F2FFFE",
    "variable": "var(--colors-teal-25)"
  },
  "colors.teal.50": {
    "value": "#e3f8f7",
    "variable": "var(--colors-teal-50)"
  },
  "colors.teal.100": {
    "value": "#bbedec",
    "variable": "var(--colors-teal-100)"
  },
  "colors.teal.200": {
    "value": "#92e2e1",
    "variable": "var(--colors-teal-200)"
  },
  "colors.teal.300": {
    "value": "#70d5d6",
    "variable": "var(--colors-teal-300)"
  },
  "colors.teal.400": {
    "value": "#5fccce",
    "variable": "var(--colors-teal-400)"
  },
  "colors.teal.500": {
    "value": "#58c3c8",
    "variable": "var(--colors-teal-500)"
  },
  "colors.teal.600": {
    "value": "#52b2b6",
    "variable": "var(--colors-teal-600)"
  },
  "colors.teal.700": {
    "value": "#4c9d9e",
    "variable": "var(--colors-teal-700)"
  },
  "colors.teal.800": {
    "value": "#468888",
    "variable": "var(--colors-teal-800)"
  },
  "colors.teal.900": {
    "value": "#3c6460",
    "variable": "var(--colors-teal-900)"
  },
  "colors.yellow.25": {
    "value": "#FFFEF5",
    "variable": "var(--colors-yellow-25)"
  },
  "colors.yellow.50": {
    "value": "#fffeeb",
    "variable": "var(--colors-yellow-50)"
  },
  "colors.yellow.100": {
    "value": "#fefacc",
    "variable": "var(--colors-yellow-100)"
  },
  "colors.yellow.200": {
    "value": "#fdf6ab",
    "variable": "var(--colors-yellow-200)"
  },
  "colors.yellow.300": {
    "value": "#fbf18b",
    "variable": "var(--colors-yellow-300)"
  },
  "colors.yellow.400": {
    "value": "#f9ed73",
    "variable": "var(--colors-yellow-400)"
  },
  "colors.yellow.500": {
    "value": "#f6e85f",
    "variable": "var(--colors-yellow-500)"
  },
  "colors.yellow.600": {
    "value": "#fcdf61",
    "variable": "var(--colors-yellow-600)"
  },
  "colors.yellow.700": {
    "value": "#f9c959",
    "variable": "var(--colors-yellow-700)"
  },
  "colors.yellow.800": {
    "value": "#f4b350",
    "variable": "var(--colors-yellow-800)"
  },
  "colors.yellow.900": {
    "value": "#ec8f42",
    "variable": "var(--colors-yellow-900)"
  },
  "colors.red.25": {
    "value": "#FFF7F7",
    "variable": "var(--colors-red-25)"
  },
  "colors.red.50": {
    "value": "#f8e7e7",
    "variable": "var(--colors-red-50)"
  },
  "colors.red.100": {
    "value": "#f9c7bc",
    "variable": "var(--colors-red-100)"
  },
  "colors.red.200": {
    "value": "#f6a392",
    "variable": "var(--colors-red-200)"
  },
  "colors.red.300": {
    "value": "#f37f68",
    "variable": "var(--colors-red-300)"
  },
  "colors.red.400": {
    "value": "#f26349",
    "variable": "var(--colors-red-400)"
  },
  "colors.red.500": {
    "value": "#f1442c",
    "variable": "var(--colors-red-500)"
  },
  "colors.red.600": {
    "value": "#e63f28",
    "variable": "var(--colors-red-600)"
  },
  "colors.red.700": {
    "value": "#d93823",
    "variable": "var(--colors-red-700)"
  },
  "colors.red.800": {
    "value": "#ca311f",
    "variable": "var(--colors-red-800)"
  },
  "colors.red.900": {
    "value": "#b12416",
    "variable": "var(--colors-red-900)"
  },
  "colors.blue.25": {
    "value": "#F7F5FF",
    "variable": "var(--colors-blue-25)"
  },
  "colors.blue.50": {
    "value": "#ebe6fd",
    "variable": "var(--colors-blue-50)"
  },
  "colors.blue.100": {
    "value": "#cbc2f8",
    "variable": "var(--colors-blue-100)"
  },
  "colors.blue.200": {
    "value": "#a799f5",
    "variable": "var(--colors-blue-200)"
  },
  "colors.blue.300": {
    "value": "#7e6ff3",
    "variable": "var(--colors-blue-300)"
  },
  "colors.blue.400": {
    "value": "#5850f1",
    "variable": "var(--colors-blue-400)"
  },
  "colors.blue.500": {
    "value": "#1432ed",
    "variable": "var(--colors-blue-500)"
  },
  "colors.blue.600": {
    "value": "#002ee7",
    "variable": "var(--colors-blue-600)"
  },
  "colors.blue.700": {
    "value": "#0027df",
    "variable": "var(--colors-blue-700)"
  },
  "colors.blue.800": {
    "value": "#0022d9",
    "variable": "var(--colors-blue-800)"
  },
  "colors.blue.900": {
    "value": "#0019ca",
    "variable": "var(--colors-blue-900)"
  },
  "colors.pink.25": {
    "value": "#FFF7FD",
    "variable": "var(--colors-pink-25)"
  },
  "colors.pink.50": {
    "value": "#ffe6f9",
    "variable": "var(--colors-pink-50)"
  },
  "colors.pink.100": {
    "value": "#fdbff1",
    "variable": "var(--colors-pink-100)"
  },
  "colors.pink.200": {
    "value": "#fc91e8",
    "variable": "var(--colors-pink-200)"
  },
  "colors.pink.300": {
    "value": "#f55fdc",
    "variable": "var(--colors-pink-300)"
  },
  "colors.pink.400": {
    "value": "#eb31cf",
    "variable": "var(--colors-pink-400)"
  },
  "colors.pink.500": {
    "value": "#e000c4",
    "variable": "var(--colors-pink-500)"
  },
  "colors.pink.600": {
    "value": "#d100bf",
    "variable": "var(--colors-pink-600)"
  },
  "colors.pink.700": {
    "value": "#bc00b9",
    "variable": "var(--colors-pink-700)"
  },
  "colors.pink.800": {
    "value": "#aa00b3",
    "variable": "var(--colors-pink-800)"
  },
  "colors.pink.900": {
    "value": "#8a00a8",
    "variable": "var(--colors-pink-900)"
  },
  "fonts.display": {
    "value": "var(--sharp-grotesk)",
    "variable": "var(--fonts-display)"
  },
  "fonts.body": {
    "value": "var(--sharp-sans)",
    "variable": "var(--fonts-body)"
  },
  "fonts.code": {
    "value": "var(--roboto-mono)",
    "variable": "var(--fonts-code)"
  },
  "fontSizes.displayXs": {
    "value": "1.5rem",
    "variable": "var(--font-sizes-display-xs)"
  },
  "fontSizes.displaySm": {
    "value": "1.875rem",
    "variable": "var(--font-sizes-display-sm)"
  },
  "fontSizes.displayMd": {
    "value": "2.25rem",
    "variable": "var(--font-sizes-display-md)"
  },
  "fontSizes.displayLg": {
    "value": "3rem",
    "variable": "var(--font-sizes-display-lg)"
  },
  "fontSizes.displayXl": {
    "value": "3.75rem",
    "variable": "var(--font-sizes-display-xl)"
  },
  "fontSizes.display2xl": {
    "value": "4.5rem",
    "variable": "var(--font-sizes-display2xl)"
  },
  "fontSizes.textXs": {
    "value": "0.75rem",
    "variable": "var(--font-sizes-text-xs)"
  },
  "fontSizes.textSm": {
    "value": "0.875rem",
    "variable": "var(--font-sizes-text-sm)"
  },
  "fontSizes.textMd": {
    "value": "1rem",
    "variable": "var(--font-sizes-text-md)"
  },
  "fontSizes.textLg": {
    "value": "1.125rem",
    "variable": "var(--font-sizes-text-lg)"
  },
  "fontSizes.textXl": {
    "value": "1.25rem",
    "variable": "var(--font-sizes-text-xl)"
  },
  "fontSizes.code": {
    "value": "1rem",
    "variable": "var(--font-sizes-code)"
  },
  "lineHeights.zero": {
    "value": "0",
    "variable": "var(--line-heights-zero)"
  },
  "lineHeights.displayXs": {
    "value": "1.33",
    "variable": "var(--line-heights-display-xs)"
  },
  "lineHeights.displaySm": {
    "value": "1.25",
    "variable": "var(--line-heights-display-sm)"
  },
  "lineHeights.displayMd": {
    "value": "1.22",
    "variable": "var(--line-heights-display-md)"
  },
  "lineHeights.displayLg": {
    "value": "1.25",
    "variable": "var(--line-heights-display-lg)"
  },
  "lineHeights.displayXl": {
    "value": "1.2",
    "variable": "var(--line-heights-display-xl)"
  },
  "lineHeights.display2xl": {
    "value": "1.25",
    "variable": "var(--line-heights-display2xl)"
  },
  "lineHeights.textXs": {
    "value": "1.5",
    "variable": "var(--line-heights-text-xs)"
  },
  "lineHeights.textSm": {
    "value": "1.42",
    "variable": "var(--line-heights-text-sm)"
  },
  "lineHeights.textMd": {
    "value": "1.5",
    "variable": "var(--line-heights-text-md)"
  },
  "lineHeights.textLg": {
    "value": "1.55",
    "variable": "var(--line-heights-text-lg)"
  },
  "lineHeights.textXl": {
    "value": "1.5",
    "variable": "var(--line-heights-text-xl)"
  },
  "lineHeights.code": {
    "value": "1.5",
    "variable": "var(--line-heights-code)"
  },
  "letterSpacings.0": {
    "value": "0em",
    "variable": "var(--letter-spacings-0)"
  },
  "letterSpacings.neg2": {
    "value": "-0.02em",
    "variable": "var(--letter-spacings-neg2)"
  },
  "fontWeights.regular": {
    "value": "400",
    "variable": "var(--font-weights-regular)"
  },
  "fontWeights.medium": {
    "value": "500",
    "variable": "var(--font-weights-medium)"
  },
  "fontWeights.semibold": {
    "value": "600",
    "variable": "var(--font-weights-semibold)"
  },
  "fontWeights.bold": {
    "value": "700",
    "variable": "var(--font-weights-bold)"
  },
  "fontWeights.extraBold": {
    "value": "800",
    "variable": "var(--font-weights-extra-bold)"
  },
  "gradients.frameDark": {
    "value": "linear-gradient(39.01deg, rgba(255, 255, 255, 0) 30.88%, rgba(255, 255, 255, 0.4) 79.58%), linear-gradient(31.19deg, rgba(255, 255, 255, 0.4) -1.47%, rgba(255, 255, 255, 0) 46.11%)",
    "variable": "var(--gradients-frame-dark)"
  },
  "gradients.frameLight": {
    "value": "linear-gradient(44.75deg, rgba(48, 69, 141, 0.8) -13.72%, rgba(255, 255, 255, 0) 39.77%, rgba(48, 69, 141, 0) 39.77%), linear-gradient(49.76deg, rgba(48, 69, 141, 0) 45.06%, rgba(48, 69, 141, 0.3) 84.22%)",
    "variable": "var(--gradients-frame-light)"
  },
  "gradients.coolGlow": {
    "value": "linear-gradient(90deg, var(--colors-blue-400) 0%, var(--colors-pink-300) 100%)",
    "variable": "var(--gradients-cool-glow)"
  },
  "gradients.warmGlow": {
    "value": "linear-gradient(63.31deg, var(--colors-red-300) 22.15%, var(--colors-yellow-700) 81.34%)",
    "variable": "var(--gradients-warm-glow)"
  },
  "gradients.gentleBlue": {
    "value": "linear-gradient(84deg, rgba(63, 93, 255, 0) 0%, rgba(63, 93, 255, .09) 100%)",
    "variable": "var(--gradients-gentle-blue)"
  },
  "gradients.mediumBlue": {
    "value": "linear-gradient(84deg, rgba(63, 93, 255, 0) 0%, rgba(63, 93, 255, .2) 100%)",
    "variable": "var(--gradients-medium-blue)"
  },
  "gradients.overlay": {
    "value": "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%)",
    "variable": "var(--gradients-overlay)"
  },
  "radii.xs": {
    "value": "2px",
    "variable": "var(--radii-xs)"
  },
  "radii.sm": {
    "value": "4px",
    "variable": "var(--radii-sm)"
  },
  "radii.md": {
    "value": "8px",
    "variable": "var(--radii-md)"
  },
  "radii.lg": {
    "value": "16px",
    "variable": "var(--radii-lg)"
  },
  "radii.xl": {
    "value": "20px",
    "variable": "var(--radii-xl)"
  },
  "radii.xxl": {
    "value": "28px",
    "variable": "var(--radii-xxl)"
  },
  "radii.round": {
    "value": "50%",
    "variable": "var(--radii-round)"
  },
  "shadows.none": {
    "value": "none",
    "variable": "var(--shadows-none)"
  },
  "shadows.black.md": {
    "value": "0px 0px 28px rgba(0, 0, 0, 0.25)",
    "variable": "var(--shadows-black-md)"
  },
  "shadows.black.lg": {
    "value": "0px 4px 100px rgba(0, 0, 0, 0.25)",
    "variable": "var(--shadows-black-lg)"
  },
  "shadows.black.lgDim": {
    "value": "0px 4px 100px rgba(0, 0, 0, 0.05)",
    "variable": "var(--shadows-black-lg-dim)"
  },
  "shadows.blue.lg": {
    "value": "0px 0px 36px rgba(68, 77, 107, 0.11)",
    "variable": "var(--shadows-blue-lg)"
  },
  "shadows.solid.md": {
    "value": "0px 0px 0px 3px rgba(63, 93, 255, .4)",
    "variable": "var(--shadows-solid-md)"
  },
  "sizes.0": {
    "value": "0",
    "variable": "var(--sizes-0)"
  },
  "sizes.0.rem": {
    "value": "0",
    "variable": "var(--sizes-0-rem)"
  },
  "sizes.2.px": {
    "value": "2px",
    "variable": "var(--sizes-2-px)"
  },
  "sizes.2.rem": {
    "value": "0.125rem",
    "variable": "var(--sizes-2-rem)"
  },
  "sizes.2": {
    "value": "2px",
    "variable": "var(--sizes-2)"
  },
  "sizes.4.px": {
    "value": "4px",
    "variable": "var(--sizes-4-px)"
  },
  "sizes.4.rem": {
    "value": "0.25rem",
    "variable": "var(--sizes-4-rem)"
  },
  "sizes.4": {
    "value": "4px",
    "variable": "var(--sizes-4)"
  },
  "sizes.6.px": {
    "value": "6px",
    "variable": "var(--sizes-6-px)"
  },
  "sizes.6.rem": {
    "value": "0.375rem",
    "variable": "var(--sizes-6-rem)"
  },
  "sizes.6": {
    "value": "6px",
    "variable": "var(--sizes-6)"
  },
  "sizes.8.px": {
    "value": "8px",
    "variable": "var(--sizes-8-px)"
  },
  "sizes.8.rem": {
    "value": "0.5rem",
    "variable": "var(--sizes-8-rem)"
  },
  "sizes.8": {
    "value": "8px",
    "variable": "var(--sizes-8)"
  },
  "sizes.10.px": {
    "value": "10px",
    "variable": "var(--sizes-10-px)"
  },
  "sizes.10.rem": {
    "value": "0.625rem",
    "variable": "var(--sizes-10-rem)"
  },
  "sizes.10": {
    "value": "10px",
    "variable": "var(--sizes-10)"
  },
  "sizes.12.px": {
    "value": "12px",
    "variable": "var(--sizes-12-px)"
  },
  "sizes.12.rem": {
    "value": "0.75rem",
    "variable": "var(--sizes-12-rem)"
  },
  "sizes.12": {
    "value": "12px",
    "variable": "var(--sizes-12)"
  },
  "sizes.14.px": {
    "value": "14px",
    "variable": "var(--sizes-14-px)"
  },
  "sizes.14.rem": {
    "value": "0.875rem",
    "variable": "var(--sizes-14-rem)"
  },
  "sizes.14": {
    "value": "14px",
    "variable": "var(--sizes-14)"
  },
  "sizes.16.px": {
    "value": "16px",
    "variable": "var(--sizes-16-px)"
  },
  "sizes.16.rem": {
    "value": "1rem",
    "variable": "var(--sizes-16-rem)"
  },
  "sizes.16": {
    "value": "16px",
    "variable": "var(--sizes-16)"
  },
  "sizes.18.px": {
    "value": "18px",
    "variable": "var(--sizes-18-px)"
  },
  "sizes.18.rem": {
    "value": "1.125rem",
    "variable": "var(--sizes-18-rem)"
  },
  "sizes.18": {
    "value": "18px",
    "variable": "var(--sizes-18)"
  },
  "sizes.20.px": {
    "value": "20px",
    "variable": "var(--sizes-20-px)"
  },
  "sizes.20.rem": {
    "value": "1.25rem",
    "variable": "var(--sizes-20-rem)"
  },
  "sizes.20": {
    "value": "20px",
    "variable": "var(--sizes-20)"
  },
  "sizes.24.px": {
    "value": "24px",
    "variable": "var(--sizes-24-px)"
  },
  "sizes.24.rem": {
    "value": "1.5rem",
    "variable": "var(--sizes-24-rem)"
  },
  "sizes.24": {
    "value": "24px",
    "variable": "var(--sizes-24)"
  },
  "sizes.32.px": {
    "value": "32px",
    "variable": "var(--sizes-32-px)"
  },
  "sizes.32.rem": {
    "value": "2rem",
    "variable": "var(--sizes-32-rem)"
  },
  "sizes.32": {
    "value": "32px",
    "variable": "var(--sizes-32)"
  },
  "sizes.40.px": {
    "value": "40px",
    "variable": "var(--sizes-40-px)"
  },
  "sizes.40.rem": {
    "value": "2.5rem",
    "variable": "var(--sizes-40-rem)"
  },
  "sizes.40": {
    "value": "40px",
    "variable": "var(--sizes-40)"
  },
  "sizes.48.px": {
    "value": "48px",
    "variable": "var(--sizes-48-px)"
  },
  "sizes.48.rem": {
    "value": "3rem",
    "variable": "var(--sizes-48-rem)"
  },
  "sizes.48": {
    "value": "48px",
    "variable": "var(--sizes-48)"
  },
  "sizes.64.px": {
    "value": "64px",
    "variable": "var(--sizes-64-px)"
  },
  "sizes.64.rem": {
    "value": "4rem",
    "variable": "var(--sizes-64-rem)"
  },
  "sizes.64": {
    "value": "64px",
    "variable": "var(--sizes-64)"
  },
  "sizes.80.px": {
    "value": "80px",
    "variable": "var(--sizes-80-px)"
  },
  "sizes.80.rem": {
    "value": "5rem",
    "variable": "var(--sizes-80-rem)"
  },
  "sizes.80": {
    "value": "80px",
    "variable": "var(--sizes-80)"
  },
  "sizes.96.px": {
    "value": "96px",
    "variable": "var(--sizes-96-px)"
  },
  "sizes.96.rem": {
    "value": "6rem",
    "variable": "var(--sizes-96-rem)"
  },
  "sizes.96": {
    "value": "96px",
    "variable": "var(--sizes-96)"
  },
  "sizes.100": {
    "value": "100%",
    "variable": "var(--sizes-100)"
  },
  "sizes.128.px": {
    "value": "128px",
    "variable": "var(--sizes-128-px)"
  },
  "sizes.128.rem": {
    "value": "8rem",
    "variable": "var(--sizes-128-rem)"
  },
  "sizes.128": {
    "value": "128px",
    "variable": "var(--sizes-128)"
  },
  "sizes.160.px": {
    "value": "160px",
    "variable": "var(--sizes-160-px)"
  },
  "sizes.160.rem": {
    "value": "10rem",
    "variable": "var(--sizes-160-rem)"
  },
  "sizes.160": {
    "value": "160px",
    "variable": "var(--sizes-160)"
  },
  "sizes.192.px": {
    "value": "192px",
    "variable": "var(--sizes-192-px)"
  },
  "sizes.192.rem": {
    "value": "12rem",
    "variable": "var(--sizes-192-rem)"
  },
  "sizes.192": {
    "value": "192px",
    "variable": "var(--sizes-192)"
  },
  "sizes.224.px": {
    "value": "224px",
    "variable": "var(--sizes-224-px)"
  },
  "sizes.224.rem": {
    "value": "14rem",
    "variable": "var(--sizes-224-rem)"
  },
  "sizes.224": {
    "value": "224px",
    "variable": "var(--sizes-224)"
  },
  "sizes.256.px": {
    "value": "256px",
    "variable": "var(--sizes-256-px)"
  },
  "sizes.256.rem": {
    "value": "16rem",
    "variable": "var(--sizes-256-rem)"
  },
  "sizes.256": {
    "value": "256px",
    "variable": "var(--sizes-256)"
  },
  "sizes.container.sm": {
    "value": "640px",
    "variable": "var(--sizes-container-sm)"
  },
  "sizes.container.md": {
    "value": "768px",
    "variable": "var(--sizes-container-md)"
  },
  "sizes.container.lg": {
    "value": "1024px",
    "variable": "var(--sizes-container-lg)"
  },
  "sizes.container.xl": {
    "value": "1280px",
    "variable": "var(--sizes-container-xl)"
  },
  "sizes.breakpoint-xs": {
    "value": "375px",
    "variable": "var(--sizes-breakpoint-xs)"
  },
  "sizes.breakpoint-sm": {
    "value": "576px",
    "variable": "var(--sizes-breakpoint-sm)"
  },
  "sizes.breakpoint-md": {
    "value": "768px",
    "variable": "var(--sizes-breakpoint-md)"
  },
  "sizes.breakpoint-lg": {
    "value": "992px",
    "variable": "var(--sizes-breakpoint-lg)"
  },
  "sizes.breakpoint-xl": {
    "value": "1280px",
    "variable": "var(--sizes-breakpoint-xl)"
  },
  "spacing.0": {
    "value": "0",
    "variable": "var(--spacing-0)"
  },
  "spacing.0.rem": {
    "value": "0",
    "variable": "var(--spacing-0-rem)"
  },
  "spacing.2.px": {
    "value": "2px",
    "variable": "var(--spacing-2-px)"
  },
  "spacing.2.rem": {
    "value": "0.125rem",
    "variable": "var(--spacing-2-rem)"
  },
  "spacing.2": {
    "value": "2px",
    "variable": "var(--spacing-2)"
  },
  "spacing.4.px": {
    "value": "4px",
    "variable": "var(--spacing-4-px)"
  },
  "spacing.4.rem": {
    "value": "0.25rem",
    "variable": "var(--spacing-4-rem)"
  },
  "spacing.4": {
    "value": "4px",
    "variable": "var(--spacing-4)"
  },
  "spacing.6.px": {
    "value": "6px",
    "variable": "var(--spacing-6-px)"
  },
  "spacing.6.rem": {
    "value": "0.375rem",
    "variable": "var(--spacing-6-rem)"
  },
  "spacing.6": {
    "value": "6px",
    "variable": "var(--spacing-6)"
  },
  "spacing.8.px": {
    "value": "8px",
    "variable": "var(--spacing-8-px)"
  },
  "spacing.8.rem": {
    "value": "0.5rem",
    "variable": "var(--spacing-8-rem)"
  },
  "spacing.8": {
    "value": "8px",
    "variable": "var(--spacing-8)"
  },
  "spacing.10.px": {
    "value": "10px",
    "variable": "var(--spacing-10-px)"
  },
  "spacing.10.rem": {
    "value": "0.625rem",
    "variable": "var(--spacing-10-rem)"
  },
  "spacing.10": {
    "value": "10px",
    "variable": "var(--spacing-10)"
  },
  "spacing.12.px": {
    "value": "12px",
    "variable": "var(--spacing-12-px)"
  },
  "spacing.12.rem": {
    "value": "0.75rem",
    "variable": "var(--spacing-12-rem)"
  },
  "spacing.12": {
    "value": "12px",
    "variable": "var(--spacing-12)"
  },
  "spacing.14.px": {
    "value": "14px",
    "variable": "var(--spacing-14-px)"
  },
  "spacing.14.rem": {
    "value": "0.875rem",
    "variable": "var(--spacing-14-rem)"
  },
  "spacing.14": {
    "value": "14px",
    "variable": "var(--spacing-14)"
  },
  "spacing.16.px": {
    "value": "16px",
    "variable": "var(--spacing-16-px)"
  },
  "spacing.16.rem": {
    "value": "1rem",
    "variable": "var(--spacing-16-rem)"
  },
  "spacing.16": {
    "value": "16px",
    "variable": "var(--spacing-16)"
  },
  "spacing.18.px": {
    "value": "18px",
    "variable": "var(--spacing-18-px)"
  },
  "spacing.18.rem": {
    "value": "1.125rem",
    "variable": "var(--spacing-18-rem)"
  },
  "spacing.18": {
    "value": "18px",
    "variable": "var(--spacing-18)"
  },
  "spacing.20.px": {
    "value": "20px",
    "variable": "var(--spacing-20-px)"
  },
  "spacing.20.rem": {
    "value": "1.25rem",
    "variable": "var(--spacing-20-rem)"
  },
  "spacing.20": {
    "value": "20px",
    "variable": "var(--spacing-20)"
  },
  "spacing.24.px": {
    "value": "24px",
    "variable": "var(--spacing-24-px)"
  },
  "spacing.24.rem": {
    "value": "1.5rem",
    "variable": "var(--spacing-24-rem)"
  },
  "spacing.24": {
    "value": "24px",
    "variable": "var(--spacing-24)"
  },
  "spacing.32.px": {
    "value": "32px",
    "variable": "var(--spacing-32-px)"
  },
  "spacing.32.rem": {
    "value": "2rem",
    "variable": "var(--spacing-32-rem)"
  },
  "spacing.32": {
    "value": "32px",
    "variable": "var(--spacing-32)"
  },
  "spacing.40.px": {
    "value": "40px",
    "variable": "var(--spacing-40-px)"
  },
  "spacing.40.rem": {
    "value": "2.5rem",
    "variable": "var(--spacing-40-rem)"
  },
  "spacing.40": {
    "value": "40px",
    "variable": "var(--spacing-40)"
  },
  "spacing.48.px": {
    "value": "48px",
    "variable": "var(--spacing-48-px)"
  },
  "spacing.48.rem": {
    "value": "3rem",
    "variable": "var(--spacing-48-rem)"
  },
  "spacing.48": {
    "value": "48px",
    "variable": "var(--spacing-48)"
  },
  "spacing.64.px": {
    "value": "64px",
    "variable": "var(--spacing-64-px)"
  },
  "spacing.64.rem": {
    "value": "4rem",
    "variable": "var(--spacing-64-rem)"
  },
  "spacing.64": {
    "value": "64px",
    "variable": "var(--spacing-64)"
  },
  "spacing.80.px": {
    "value": "80px",
    "variable": "var(--spacing-80-px)"
  },
  "spacing.80.rem": {
    "value": "5rem",
    "variable": "var(--spacing-80-rem)"
  },
  "spacing.80": {
    "value": "80px",
    "variable": "var(--spacing-80)"
  },
  "spacing.96.px": {
    "value": "96px",
    "variable": "var(--spacing-96-px)"
  },
  "spacing.96.rem": {
    "value": "6rem",
    "variable": "var(--spacing-96-rem)"
  },
  "spacing.96": {
    "value": "96px",
    "variable": "var(--spacing-96)"
  },
  "spacing.128.px": {
    "value": "128px",
    "variable": "var(--spacing-128-px)"
  },
  "spacing.128.rem": {
    "value": "8rem",
    "variable": "var(--spacing-128-rem)"
  },
  "spacing.128": {
    "value": "128px",
    "variable": "var(--spacing-128)"
  },
  "spacing.160.px": {
    "value": "160px",
    "variable": "var(--spacing-160-px)"
  },
  "spacing.160.rem": {
    "value": "10rem",
    "variable": "var(--spacing-160-rem)"
  },
  "spacing.160": {
    "value": "160px",
    "variable": "var(--spacing-160)"
  },
  "spacing.192.px": {
    "value": "192px",
    "variable": "var(--spacing-192-px)"
  },
  "spacing.192.rem": {
    "value": "12rem",
    "variable": "var(--spacing-192-rem)"
  },
  "spacing.192": {
    "value": "192px",
    "variable": "var(--spacing-192)"
  },
  "spacing.224.px": {
    "value": "224px",
    "variable": "var(--spacing-224-px)"
  },
  "spacing.224.rem": {
    "value": "14rem",
    "variable": "var(--spacing-224-rem)"
  },
  "spacing.224": {
    "value": "224px",
    "variable": "var(--spacing-224)"
  },
  "spacing.256.px": {
    "value": "256px",
    "variable": "var(--spacing-256-px)"
  },
  "spacing.256.rem": {
    "value": "16rem",
    "variable": "var(--spacing-256-rem)"
  },
  "spacing.256": {
    "value": "256px",
    "variable": "var(--spacing-256)"
  },
  "breakpoints.xs": {
    "value": "375px",
    "variable": "var(--breakpoints-xs)"
  },
  "breakpoints.sm": {
    "value": "576px",
    "variable": "var(--breakpoints-sm)"
  },
  "breakpoints.md": {
    "value": "768px",
    "variable": "var(--breakpoints-md)"
  },
  "breakpoints.lg": {
    "value": "992px",
    "variable": "var(--breakpoints-lg)"
  },
  "breakpoints.xl": {
    "value": "1280px",
    "variable": "var(--breakpoints-xl)"
  },
  "colors.bodyCopy": {
    "value": "var(--colors-body-copy)",
    "variable": "var(--colors-body-copy)"
  },
  "colors.heading": {
    "value": "var(--colors-heading)",
    "variable": "var(--colors-heading)"
  },
  "shadows.xs": {
    "value": "var(--shadows-xs)",
    "variable": "var(--shadows-xs)"
  },
  "shadows.sm": {
    "value": "var(--shadows-sm)",
    "variable": "var(--shadows-sm)"
  },
  "shadows.md": {
    "value": "var(--shadows-md)",
    "variable": "var(--shadows-md)"
  },
  "shadows.lg": {
    "value": "var(--shadows-lg)",
    "variable": "var(--shadows-lg)"
  },
  "shadows.xl": {
    "value": "var(--shadows-xl)",
    "variable": "var(--shadows-xl)"
  },
  "spacing.-0": {
    "value": "calc(var(--spacing-0) * -1)",
    "variable": "var(--spacing-0)"
  },
  "spacing.0.-rem": {
    "value": "calc(var(--spacing-0-rem) * -1)",
    "variable": "var(--spacing-0-rem)"
  },
  "spacing.2.-px": {
    "value": "calc(var(--spacing-2-px) * -1)",
    "variable": "var(--spacing-2-px)"
  },
  "spacing.2.-rem": {
    "value": "calc(var(--spacing-2-rem) * -1)",
    "variable": "var(--spacing-2-rem)"
  },
  "spacing.-2": {
    "value": "calc(var(--spacing-2) * -1)",
    "variable": "var(--spacing-2)"
  },
  "spacing.4.-px": {
    "value": "calc(var(--spacing-4-px) * -1)",
    "variable": "var(--spacing-4-px)"
  },
  "spacing.4.-rem": {
    "value": "calc(var(--spacing-4-rem) * -1)",
    "variable": "var(--spacing-4-rem)"
  },
  "spacing.-4": {
    "value": "calc(var(--spacing-4) * -1)",
    "variable": "var(--spacing-4)"
  },
  "spacing.6.-px": {
    "value": "calc(var(--spacing-6-px) * -1)",
    "variable": "var(--spacing-6-px)"
  },
  "spacing.6.-rem": {
    "value": "calc(var(--spacing-6-rem) * -1)",
    "variable": "var(--spacing-6-rem)"
  },
  "spacing.-6": {
    "value": "calc(var(--spacing-6) * -1)",
    "variable": "var(--spacing-6)"
  },
  "spacing.8.-px": {
    "value": "calc(var(--spacing-8-px) * -1)",
    "variable": "var(--spacing-8-px)"
  },
  "spacing.8.-rem": {
    "value": "calc(var(--spacing-8-rem) * -1)",
    "variable": "var(--spacing-8-rem)"
  },
  "spacing.-8": {
    "value": "calc(var(--spacing-8) * -1)",
    "variable": "var(--spacing-8)"
  },
  "spacing.10.-px": {
    "value": "calc(var(--spacing-10-px) * -1)",
    "variable": "var(--spacing-10-px)"
  },
  "spacing.10.-rem": {
    "value": "calc(var(--spacing-10-rem) * -1)",
    "variable": "var(--spacing-10-rem)"
  },
  "spacing.-10": {
    "value": "calc(var(--spacing-10) * -1)",
    "variable": "var(--spacing-10)"
  },
  "spacing.12.-px": {
    "value": "calc(var(--spacing-12-px) * -1)",
    "variable": "var(--spacing-12-px)"
  },
  "spacing.12.-rem": {
    "value": "calc(var(--spacing-12-rem) * -1)",
    "variable": "var(--spacing-12-rem)"
  },
  "spacing.-12": {
    "value": "calc(var(--spacing-12) * -1)",
    "variable": "var(--spacing-12)"
  },
  "spacing.14.-px": {
    "value": "calc(var(--spacing-14-px) * -1)",
    "variable": "var(--spacing-14-px)"
  },
  "spacing.14.-rem": {
    "value": "calc(var(--spacing-14-rem) * -1)",
    "variable": "var(--spacing-14-rem)"
  },
  "spacing.-14": {
    "value": "calc(var(--spacing-14) * -1)",
    "variable": "var(--spacing-14)"
  },
  "spacing.16.-px": {
    "value": "calc(var(--spacing-16-px) * -1)",
    "variable": "var(--spacing-16-px)"
  },
  "spacing.16.-rem": {
    "value": "calc(var(--spacing-16-rem) * -1)",
    "variable": "var(--spacing-16-rem)"
  },
  "spacing.-16": {
    "value": "calc(var(--spacing-16) * -1)",
    "variable": "var(--spacing-16)"
  },
  "spacing.18.-px": {
    "value": "calc(var(--spacing-18-px) * -1)",
    "variable": "var(--spacing-18-px)"
  },
  "spacing.18.-rem": {
    "value": "calc(var(--spacing-18-rem) * -1)",
    "variable": "var(--spacing-18-rem)"
  },
  "spacing.-18": {
    "value": "calc(var(--spacing-18) * -1)",
    "variable": "var(--spacing-18)"
  },
  "spacing.20.-px": {
    "value": "calc(var(--spacing-20-px) * -1)",
    "variable": "var(--spacing-20-px)"
  },
  "spacing.20.-rem": {
    "value": "calc(var(--spacing-20-rem) * -1)",
    "variable": "var(--spacing-20-rem)"
  },
  "spacing.-20": {
    "value": "calc(var(--spacing-20) * -1)",
    "variable": "var(--spacing-20)"
  },
  "spacing.24.-px": {
    "value": "calc(var(--spacing-24-px) * -1)",
    "variable": "var(--spacing-24-px)"
  },
  "spacing.24.-rem": {
    "value": "calc(var(--spacing-24-rem) * -1)",
    "variable": "var(--spacing-24-rem)"
  },
  "spacing.-24": {
    "value": "calc(var(--spacing-24) * -1)",
    "variable": "var(--spacing-24)"
  },
  "spacing.32.-px": {
    "value": "calc(var(--spacing-32-px) * -1)",
    "variable": "var(--spacing-32-px)"
  },
  "spacing.32.-rem": {
    "value": "calc(var(--spacing-32-rem) * -1)",
    "variable": "var(--spacing-32-rem)"
  },
  "spacing.-32": {
    "value": "calc(var(--spacing-32) * -1)",
    "variable": "var(--spacing-32)"
  },
  "spacing.40.-px": {
    "value": "calc(var(--spacing-40-px) * -1)",
    "variable": "var(--spacing-40-px)"
  },
  "spacing.40.-rem": {
    "value": "calc(var(--spacing-40-rem) * -1)",
    "variable": "var(--spacing-40-rem)"
  },
  "spacing.-40": {
    "value": "calc(var(--spacing-40) * -1)",
    "variable": "var(--spacing-40)"
  },
  "spacing.48.-px": {
    "value": "calc(var(--spacing-48-px) * -1)",
    "variable": "var(--spacing-48-px)"
  },
  "spacing.48.-rem": {
    "value": "calc(var(--spacing-48-rem) * -1)",
    "variable": "var(--spacing-48-rem)"
  },
  "spacing.-48": {
    "value": "calc(var(--spacing-48) * -1)",
    "variable": "var(--spacing-48)"
  },
  "spacing.64.-px": {
    "value": "calc(var(--spacing-64-px) * -1)",
    "variable": "var(--spacing-64-px)"
  },
  "spacing.64.-rem": {
    "value": "calc(var(--spacing-64-rem) * -1)",
    "variable": "var(--spacing-64-rem)"
  },
  "spacing.-64": {
    "value": "calc(var(--spacing-64) * -1)",
    "variable": "var(--spacing-64)"
  },
  "spacing.80.-px": {
    "value": "calc(var(--spacing-80-px) * -1)",
    "variable": "var(--spacing-80-px)"
  },
  "spacing.80.-rem": {
    "value": "calc(var(--spacing-80-rem) * -1)",
    "variable": "var(--spacing-80-rem)"
  },
  "spacing.-80": {
    "value": "calc(var(--spacing-80) * -1)",
    "variable": "var(--spacing-80)"
  },
  "spacing.96.-px": {
    "value": "calc(var(--spacing-96-px) * -1)",
    "variable": "var(--spacing-96-px)"
  },
  "spacing.96.-rem": {
    "value": "calc(var(--spacing-96-rem) * -1)",
    "variable": "var(--spacing-96-rem)"
  },
  "spacing.-96": {
    "value": "calc(var(--spacing-96) * -1)",
    "variable": "var(--spacing-96)"
  },
  "spacing.128.-px": {
    "value": "calc(var(--spacing-128-px) * -1)",
    "variable": "var(--spacing-128-px)"
  },
  "spacing.128.-rem": {
    "value": "calc(var(--spacing-128-rem) * -1)",
    "variable": "var(--spacing-128-rem)"
  },
  "spacing.-128": {
    "value": "calc(var(--spacing-128) * -1)",
    "variable": "var(--spacing-128)"
  },
  "spacing.160.-px": {
    "value": "calc(var(--spacing-160-px) * -1)",
    "variable": "var(--spacing-160-px)"
  },
  "spacing.160.-rem": {
    "value": "calc(var(--spacing-160-rem) * -1)",
    "variable": "var(--spacing-160-rem)"
  },
  "spacing.-160": {
    "value": "calc(var(--spacing-160) * -1)",
    "variable": "var(--spacing-160)"
  },
  "spacing.192.-px": {
    "value": "calc(var(--spacing-192-px) * -1)",
    "variable": "var(--spacing-192-px)"
  },
  "spacing.192.-rem": {
    "value": "calc(var(--spacing-192-rem) * -1)",
    "variable": "var(--spacing-192-rem)"
  },
  "spacing.-192": {
    "value": "calc(var(--spacing-192) * -1)",
    "variable": "var(--spacing-192)"
  },
  "spacing.224.-px": {
    "value": "calc(var(--spacing-224-px) * -1)",
    "variable": "var(--spacing-224-px)"
  },
  "spacing.224.-rem": {
    "value": "calc(var(--spacing-224-rem) * -1)",
    "variable": "var(--spacing-224-rem)"
  },
  "spacing.-224": {
    "value": "calc(var(--spacing-224) * -1)",
    "variable": "var(--spacing-224)"
  },
  "spacing.256.-px": {
    "value": "calc(var(--spacing-256-px) * -1)",
    "variable": "var(--spacing-256-px)"
  },
  "spacing.256.-rem": {
    "value": "calc(var(--spacing-256-rem) * -1)",
    "variable": "var(--spacing-256-rem)"
  },
  "spacing.-256": {
    "value": "calc(var(--spacing-256) * -1)",
    "variable": "var(--spacing-256)"
  },
  "colors.colorPalette": {
    "value": "var(--colors-color-palette)",
    "variable": "var(--colors-color-palette)"
  },
  "colors.colorPalette.25": {
    "value": "var(--colors-color-palette-25)",
    "variable": "var(--colors-color-palette-25)"
  },
  "colors.colorPalette.50": {
    "value": "var(--colors-color-palette-50)",
    "variable": "var(--colors-color-palette-50)"
  },
  "colors.colorPalette.100": {
    "value": "var(--colors-color-palette-100)",
    "variable": "var(--colors-color-palette-100)"
  },
  "colors.colorPalette.200": {
    "value": "var(--colors-color-palette-200)",
    "variable": "var(--colors-color-palette-200)"
  },
  "colors.colorPalette.300": {
    "value": "var(--colors-color-palette-300)",
    "variable": "var(--colors-color-palette-300)"
  },
  "colors.colorPalette.400": {
    "value": "var(--colors-color-palette-400)",
    "variable": "var(--colors-color-palette-400)"
  },
  "colors.colorPalette.500": {
    "value": "var(--colors-color-palette-500)",
    "variable": "var(--colors-color-palette-500)"
  },
  "colors.colorPalette.600": {
    "value": "var(--colors-color-palette-600)",
    "variable": "var(--colors-color-palette-600)"
  },
  "colors.colorPalette.700": {
    "value": "var(--colors-color-palette-700)",
    "variable": "var(--colors-color-palette-700)"
  },
  "colors.colorPalette.800": {
    "value": "var(--colors-color-palette-800)",
    "variable": "var(--colors-color-palette-800)"
  },
  "colors.colorPalette.900": {
    "value": "var(--colors-color-palette-900)",
    "variable": "var(--colors-color-palette-900)"
  }
}

export function token(path, fallback) {
  return tokens[path]?.value || fallback
}

function tokenVar(path, fallback) {
  return tokens[path]?.variable || fallback
}

token.var = tokenVar