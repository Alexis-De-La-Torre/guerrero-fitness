const baseline = 24

const grid = {
  column: baseline * 4, // 96
  gutter: baseline, // 24
  margin: {
    mobile: baseline, // 24
    desktop: baseline * 2 // 48
  }
}

const colors = {
  dark: '#000000',
  light: '#ffffff',
  accent: '#0e38b1',
  complement: '#e4f5fd'
}

const fonts = {
  paragraph: {
    fontFamily: 'Cooper Hewitt',
    fontSize: 16,
    fontWeight: 300,
    lineHeight: baseline + 'px',
    paddingTop: 6 // baseline fix
  },
  info: {
    fontFamily: 'Roboto Mono',
    fontSize: 12,
    lineHeight: baseline + 'px',
    paddingTop: 7 // baseline fix
  },
  mobile: {
    title: {
      fontFamily: 'Cooper Hewitt',
      fontSize: 32,
      fontWeight: 700,
      lineHeight: baseline * 2 + 'px'
      // paddingTop: 12 // baseline fix
    },
    hero: {
      fontFamily: 'Cooper Hewitt',
      fontSize: 42,
      fontWeight: 700,
      lineHeight: baseline * 2 + 'px'
      // paddingTop: 12 + baseline // baseline fix
    }
  },
  desktop: {
    title: {
      fontFamily: 'Cooper Hewitt',
      fontSize: 32,
      fontWeight: 700,
      lineHeight: baseline * 2 + 'px'
      // paddingTop: 12 // baseline fix
    },
    hero: {
      fontFamily: 'Cooper Hewitt',
      fontSize: 64,
      fontWeight: 700,
      lineHeight: baseline * 3 + 'px'
      // paddingTop: 12 + baseline // baseline fix
    }
  }
}

// exports

module.exports = {
  baseline: baseline,
  grid: grid,
  fonts: fonts,
  colors: colors
}
