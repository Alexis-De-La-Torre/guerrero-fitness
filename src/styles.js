const _ = require('lodash')

const baseline = 24

const grid = {
  column: baseline * 4, // 96
  gutter: baseline, // 24
  padding: {
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
    paddingTop: 7 // baseline fix
  },
  info: {
    fontFamily: 'Roboto Mono',
    fontSize: 12,
    lineHeight: baseline + 'px',
    paddingTop: 7 // baseline fix
  },
  link: {
    color: colors.accent,
    textDecoration: 'underline'
  },
  mobile: {
    title: {
      fontFamily: 'Cooper Hewitt',
      fontSize: 24,
      fontWeight: 700,
      lineHeight: baseline + 'px',
      paddingTop: 12 // baseline fix
    },
    hero: {
      fontFamily: 'Cooper Hewitt',
      fontSize: 42,
      fontWeight: 700,
      lineHeight: baseline * 2 + 'px',
      paddingTop: 9 // baseline fix
    }
  },
  desktop: {
    title: {
      fontFamily: 'Cooper Hewitt',
      fontSize: 32,
      fontWeight: 700,
      lineHeight: baseline * 2 + 'px',
      paddingTop: 12 // baseline fix
    },
    hero: {
      fontFamily: 'Cooper Hewitt',
      fontSize: 64,
      fontWeight: 700,
      lineHeight: baseline * 3 + 'px'
      // paddingTop: 12 // baseline fix
    }
  }
}

const button = _.assign({}, fonts.mobile.title, {
  fontSize: 16,
  color: colors.complement,
  backgroundColor: colors.accent,
  paddingTop: (baseline / 2) + fonts.mobile.title.paddingTop,
  paddingBottom: (baseline / 2) + fonts.mobile.title.paddingTop,
  paddingLeft: baseline,
  paddingRight: baseline
})

const breakpoints = [
  (grid.column * 3) + (grid.gutter * 2) + grid.padding.mobile * 2,
  (grid.column * 4) + (grid.gutter * 3) + grid.padding.desktop * 2,
  (grid.column * 5) + (grid.gutter * 4) + grid.padding.desktop * 2,
  (grid.column * 6) + (grid.gutter * 5) + grid.padding.desktop * 2,
  (grid.column * 7) + (grid.gutter * 6) + grid.padding.desktop * 2, // 864px
  (grid.column * 8) + (grid.gutter * 7) + grid.padding.desktop * 2,
  (grid.column * 9) + (grid.gutter * 8) + grid.padding.desktop * 2
]

// exports

module.exports = {
  baseline: baseline,
  grid: grid,
  fonts: fonts,
  colors: colors,
  breakpoints: breakpoints,
  button: button
}
