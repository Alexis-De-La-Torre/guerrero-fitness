const h = require('virtual-dom/h')
const _ = require('lodash')

const styles = require('../styles')

const responsive = [
  (styles.grid.column * 3) + (styles.grid.gutter * 2) + (styles.baseline * 4),
  (styles.grid.column * 4) + (styles.grid.gutter * 3) + (styles.baseline * 4),
  (styles.grid.column * 5) + (styles.grid.gutter * 4) + (styles.baseline * 4),
  (styles.grid.column * 6) + (styles.grid.gutter * 5) + (styles.baseline * 4),
  (styles.grid.column * 8) + (styles.grid.gutter * 7) + (styles.baseline * 4),
  (styles.grid.column * 9) + (styles.grid.gutter * 8) + (styles.baseline * 4)
]

const render = browserWidth => {
  const currentBreakpoint = _.findLast(responsive, value => browserWidth > value)

  const line = h('div.line-separator', {
    style: {
      height: 1,
      background: styles.colors.dark,
      marginTop: -1,
      marginBottom: (styles.baseline / 2 * 1) - 1
    }
  })

  const footer = h('footer', !browserWidth ? {} : { style: _.assign({}, styles.fonts.info, {
    textAlign: 'right',
    width: currentBreakpoint !== undefined ? currentBreakpoint : responsive[0].containerWidth,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: styles.baseline / 2
  })}, [
    h('p', {style: {display: 'inline'}}, 'Diseno de marca, Pagina Web y Administracion de Redes Sociales: '),
    h('a', {href: 'facebook.com/alexisdelatorre', style: _.assign({}, styles.fonts.link, {display: 'inline'})}, 'Alexis De La Torre')
  ])

  return h('footer', browserWidth ? [line, footer] : footer)
}

module.exports = browserWidth => render(browserWidth)
