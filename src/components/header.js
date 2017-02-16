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

  const topInfo = h('div', !browserWidth ? {} : {
    style: _.assign({}, styles.fonts.info, {
      width: currentBreakpoint !== undefined ? currentBreakpoint : responsive[0],
      marginRight: 'auto',
      marginLeft: 'auto',
      marginTop: styles.baseline,
      marginBottom: (styles.baseline / 2) * 3
    })
  }, [
    h('p', !browserWidth ? {} : {style: {display: browserWidth < responsive[0] ? 'block' : 'inline'}}, browserWidth < responsive[0] ? 'Abierto Ahora' : 'Abierto Ahora  ||  '),
    h('p', !browserWidth ? {} : {style: {display: browserWidth < responsive[0] ? 'block' : 'inline'}}, browserWidth < responsive[0] ? 'Telefono: (616) 117-5551' : 'Telefono: (616) 117-5551  ||  '),
    h('a', {href: 'facebook.com', style: !browserWidth ? {} : {display: browserWidth < responsive[0] ? 'block' : 'inline'}}, 'facebook.com/guerrerofitness'),
    h('div', [
      h('p', !browserWidth ? {} : {style: {display: browserWidth > responsive[2] ? 'inline' : 'block'}}, browserWidth > responsive[2] ? 'Lun-Vie 05:00 - 11:00 & 15:00 - 22:00  ||  ' : 'Lun-Vie 05:00 - 11:00 & 15:00 - 22:00'),
      h('p', !browserWidth ? {} : {style: {display: browserWidth > responsive[2] ? 'inline' : 'block'}}, browserWidth > responsive[2] ? 'Sab 06:00 - 17:00  ||  ' : 'Sab 06:00 - 17:00'),
      h('p', !browserWidth ? {} : {style: {display: browserWidth > responsive[2] ? 'inline' : 'block'}}, 'Dom 07:00 - 14:00')
    ]),
    h('p', !browserWidth ? {} : {style: {display: browserWidth < responsive[0] ? 'block' : 'block'}}, 'Plaza Magnolia local 2-A, Colonia Vicente Guerrero, Baja California, Mexico')
  ])

  const line = h('div.line-separator', {
    style: {
      height: 1,
      background: styles.colors.dark,
      marginTop: -1,
      marginBottom: (styles.baseline / 2 * 5) - 1
    }
  })

  const navigation = h('header', !browserWidth ? {} : {
    style: {
      width: currentBreakpoint !== undefined ? currentBreakpoint : responsive[0],
      display: browserWidth > responsive[2] ? 'flex' : 'block',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginRight: 'auto',
      marginLeft: 'auto',
      marginBottom: browserWidth > responsive[2] ? styles.baseline * 4 : styles.baseline * 4
    }
  }, [
    h('a', {href: 'index.html', style: !browserWidth ? {} : {marginBottom: browserWidth < responsive[2] ? styles.baseline : 0}}, h('img', {src: 'img/logo.svg', style: {height: styles.baseline * 4, marginRight: 'auto', marginLeft: 'auto'}})),
    h('nav', [
      h('ul', !browserWidth ? {} : {style: _.assign({}, styles.fonts.paragraph, {display: 'flex', justifyContent: 'space-around'})}, [
        h('li', {style: {marginRight: styles.baseline * 2}}, h('a', {href: '/'}, 'Inicio')),
        h('li', {style: {marginRight: styles.baseline * 2}}, h('a', {href: '/info'}, 'Informacion')),
        h('li', h('a', {href: '/contact'}, 'Contacto'))
      ])
    ])
  ])

  return h('div', [
    topInfo,
    line,
    navigation
  ])
}

module.exports = browserWidth => render(browserWidth)
