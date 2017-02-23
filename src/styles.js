const _ = require('lodash')

const baseline = 24

const grid = {
  column: baseline * 4, // 96
  gutter: baseline // 24
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
    lineHeight: baseline + 'px'
  },
  info: {
    fontFamily: 'Roboto Mono',
    fontSize: 12,
    lineHeight: baseline + 'px'
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
      lineHeight: baseline + 'px'
    },
    hero: {
      fontFamily: 'Cooper Hewitt',
      fontSize: 42,
      fontWeight: 700,
      lineHeight: baseline * 2 + 'px'
    }
  },
  desktop: {
    title: {
      fontFamily: 'Cooper Hewitt',
      fontSize: 32,
      fontWeight: 700,
      lineHeight: baseline * 2 + 'px'
    },
    hero: {
      fontFamily: 'Cooper Hewitt',
      fontSize: 54,
      fontWeight: 700,
      lineHeight: baseline * 3 + 'px'
    }
  }
}

const button = _.assign({}, fonts.mobile.title, {
  fontSize: 16,
  color: colors.complement,
  backgroundColor: colors.accent,
  padding: baseline
})

// exports

module.exports = {
  baseline: baseline,
  grid: grid,
  fonts: fonts,
  colors: colors,
  button: button
}
