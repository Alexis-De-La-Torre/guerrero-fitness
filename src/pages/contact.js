const h = require('virtual-dom/h')
const _ = require('lodash')

const styles = require('../styles.js')

const render = browserWidth => {
  const calculatedMaxWidth = _.findLast(styles.breakpoints, value => browserWidth > value) // returns undefined if browserWidth is less than the first breakpoint

  const numberAndEmail = h('div', {
    style: {
      maxWidth: browserWidth > styles.breakpoints[0] ? calculatedMaxWidth : styles.breakpoints[0],
      marginRight: 'auto',
      marginLeft: 'auto',
      marginBottom: browserWidth > styles.breakpoints[4] ? styles.baseline * 4 : styles.baseline * 4 + 3,
      paddingRight: browserWidth > styles.breakpoints[1] ? styles.grid.padding.desktop : styles.grid.padding.mobile,
      paddingLeft: browserWidth > styles.breakpoints[1] ? styles.grid.padding.desktop : styles.grid.padding.mobile
    }
  }, [
    h('a', _.assign({}, {href: 'tel:+526161175551'}, !browserWidth ? {} : {
      style: browserWidth > styles.breakpoints[3] ? styles.fonts.desktop.title : _.assign({width: 120, marginRight: 'auto', marginLeft: 'auto', marginBottom: styles.baseline * 2}, styles.button)
    }), '(616) 117-5551'),
    h('a', _.assign({}, {href: 'mailto:contacto@guerrerofitness.mx'}, !browserWidth ? {} : {
      style: browserWidth > styles.breakpoints[3] ? styles.fonts.desktop.title : _.assign({width: 270, marginRight: 'auto', marginLeft: 'auto', marginBottom: styles.baseline * 4}, styles.button)
    }), 'CONTACTO@GUERREROFITNESS.MX')
  ])

  const direction = h('div', {
    style: {
      maxWidth: browserWidth > styles.breakpoints[0] ? calculatedMaxWidth : styles.breakpoints[0],
      marginRight: 'auto',
      marginLeft: 'auto',
      marginBottom: browserWidth > styles.breakpoints[4] ? styles.baseline * 2 : styles.baseline * 2 + 3,
      paddingRight: browserWidth > styles.breakpoints[1] ? styles.grid.padding.desktop : styles.grid.padding.mobile,
      paddingLeft: browserWidth > styles.breakpoints[1] ? styles.grid.padding.desktop : styles.grid.padding.mobile
    }
  }, [
    h('h2', !browserWidth ? {} : {
      style: browserWidth > styles.breakpoints[1] ? _.assign({}, styles.fonts.desktop.title, {marginTop: -styles.baseline}) : styles.fonts.mobile.title
    }, 'VEN A VISITARNOS'),
    h('p', {style: styles.fonts.info}, 'Plaza Magnolia local 2-A, Colonia Vicente Guerrero, Baja California, Mexico')
  ])

  const responsive = [
    (styles.grid.column * 3) + (styles.grid.gutter * 2) + (styles.baseline * 4),
    (styles.grid.column * 4) + (styles.grid.gutter * 3) + (styles.baseline * 4),
    (styles.grid.column * 5) + (styles.grid.gutter * 4) + (styles.baseline * 4),
    (styles.grid.column * 6) + (styles.grid.gutter * 5) + (styles.baseline * 4),
    (styles.grid.column * 8) + (styles.grid.gutter * 7) + (styles.baseline * 4),
    (styles.grid.column * 9) + (styles.grid.gutter * 8) + (styles.baseline * 4)
  ]

  const currentBreakpoint = _.findLast(responsive, value => browserWidth > value)

  console.log(currentBreakpoint)

  const map = h('div#map', {
    style: {
      width: currentBreakpoint !== undefined ? currentBreakpoint : responsive[0].containerWidth,
      height: styles.baseline * 14,
      marginRight: 'auto',
      marginLeft: 'auto',
      marginBottom: styles.baseline * 4,
      backgroundColor: 'coral'
    }
  }, 'djadhakjshdkjash')

  return h('div.wrapper', [
    numberAndEmail,
    direction,
    map
  ])
}

module.exports = (browserWidth) => {
  return render(browserWidth)
}
