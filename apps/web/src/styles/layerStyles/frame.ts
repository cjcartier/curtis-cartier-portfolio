const frame = {
  frame: {
    description: 'Styles for gradient style border',
    value: {
      position: 'absolute',
      inset: '0',
      padding: '1px',
      bgGradient: { base: 'frameLight', _dark: 'frameDark' },
      mask: 'linear-gradient({colors.white} 0 0) content-box, linear-gradient({colors.white} 0 0)',
      maskComposite: 'exclude',
      backgroundSize: '100%',
      transition: 'background-size 400ms ease-in-out',
      zIndex: '-1',
    },
  },
};

export default frame;
