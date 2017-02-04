const h = require('virtual-dom/h')
const _ = require('lodash')

const styles = require('./styles.js')

const render = (page, browserWidth) => {
  const breakpoints = [
    (styles.grid.column * 3) + (styles.grid.gutter * 2) + styles.grid.padding.mobile * 2,
    (styles.grid.column * 4) + (styles.grid.gutter * 3) + styles.grid.padding.desktop * 2,
    (styles.grid.column * 5) + (styles.grid.gutter * 4) + styles.grid.padding.desktop * 2,
    (styles.grid.column * 6) + (styles.grid.gutter * 5) + styles.grid.padding.desktop * 2,
    (styles.grid.column * 7) + (styles.grid.gutter * 6) + styles.grid.padding.desktop * 2, // 864px
    (styles.grid.column * 8) + (styles.grid.gutter * 7) + styles.grid.padding.desktop * 2,
    (styles.grid.column * 9) + (styles.grid.gutter * 8) + styles.grid.padding.desktop * 2
  ]

  const calculatedMaxWidth = _.findLast(breakpoints, value => browserWidth > value) // returns undefined if browserWidth is less than the first breakpoint

  console.log(browserWidth > breakpoints[0] ? calculatedMaxWidth : breakpoints[0])

  const contactInfo = h('div', !browserWidth ? {} : {
    style: {
      display: browserWidth > breakpoints[4] ? 'flex' : 'block',
      justifyContent: 'space-between',
      maxWidth: browserWidth > breakpoints[0] ? calculatedMaxWidth : breakpoints[0],
      marginRight: 'auto',
      marginLeft: 'auto',
      marginTop: styles.baseline,
      marginBottom: ((styles.baseline / 2) * 3) - 6,
      paddingRight: browserWidth > breakpoints[1] ? styles.grid.padding.desktop : styles.grid.padding.mobile,
      paddingLeft: browserWidth > breakpoints[1] ? styles.grid.padding.desktop : styles.grid.padding.mobile
    }
  }, [
    h('div', {style: styles.fonts.info}, [
      h('div', [
        h('p', !browserWidth ? {} : {style: {display: browserWidth < breakpoints[0] ? 'block' : 'inline'}}, browserWidth && browserWidth < breakpoints[0] ? 'Abierto Ahora' : 'Abierto Ahora  ||  '),
        h('p', !browserWidth ? {} : {style: {display: browserWidth < breakpoints[0] ? 'block' : 'inline'}}, 'Telefono: (616) 117-5551'),
        h('a', {href: 'facebook.com', style: {display: browserWidth && browserWidth > breakpoints[4] ? 'none' : 'block'}}, 'facebook.com/guerrerofitness') // hide this
      ]),
      h('div', [
        h('p', !browserWidth ? {} : {style: {display: browserWidth > breakpoints[2] ? 'inline' : 'block'}}, browserWidth > breakpoints[2] ? 'Lun-Vie 05:00 - 11:00 & 15:00 - 22:00  ||  ' : 'Lun-Vie 05:00 - 11:00 & 15:00 - 22:00'),
        h('p', !browserWidth ? {} : {style: {display: browserWidth > breakpoints[2] ? 'inline' : 'block'}}, browserWidth > breakpoints[2] ? 'Sab 06:00 - 17:00  ||  ' : 'Sab 06:00 - 17:00'),
        h('p', !browserWidth ? {} : {style: {display: browserWidth > breakpoints[2] ? 'inline' : 'block'}}, 'Dom 07:00 - 14:00'),
        h('p', 'Plaza Magnolia local 2-A, Colonia Vicente Guerrero, Baja California, Mexico')
      ])
    ]),
    h('a', {href: 'facebook.com'}, h('img', {src: 'img/facebook-icon.svg', style: {height: styles.baseline * 3, display: browserWidth > breakpoints[4] ? 'block' : 'none'}}))
  ])

  const header = h('header', !browserWidth ? {} : {
    style: {
      display: browserWidth > breakpoints[2] ? 'flex' : 'block',
      justifyContent: 'space-between',
      alignItems: 'center',
      maxWidth: browserWidth > breakpoints[0] ? calculatedMaxWidth : breakpoints[0],
      marginRight: 'auto',
      marginLeft: 'auto',
      marginBottom: styles.baseline * 4,
      paddingRight: browserWidth > breakpoints[1] ? styles.grid.padding.desktop : styles.grid.padding.mobile,
      paddingLeft: browserWidth > breakpoints[1] ? styles.grid.padding.desktop : styles.grid.padding.mobile
    }
  }, [
    h('a', {href: 'index.html', style: !browserWidth ? {} : {marginBottom: browserWidth < breakpoints[2] ? styles.baseline : 0}}, h('img', {src: 'img/logo.svg', style: {height: styles.baseline * 4, marginRight: 'auto', marginLeft: 'auto'}})),
    h('nav', [
      h('ul', !browserWidth ? {} : {style: _.assign({}, styles.fonts.paragraph, {display: 'flex', justifyContent: 'space-around'})}, [
        h('li', {style: {marginRight: styles.baseline * 2}}, h('a', {href: '/'}, 'Inicio')),
        h('li', {style: {marginRight: styles.baseline * 2}}, h('a', {href: '/info'}, 'Informacion')),
        h('li', h('a', {href: '/contact'}, 'Contacto'))
      ])
    ])
  ])

  const footer = h('footer', !browserWidth ? {} : { style: _.assign({}, styles.fonts.info, {
    textAlign: 'right',
    maxWidth: browserWidth > breakpoints[0] ? calculatedMaxWidth : breakpoints[0],
    marginRight: 'auto',
    marginLeft: 'auto',
    paddingRight: browserWidth > breakpoints[1] ? styles.grid.padding.desktop : styles.grid.padding.mobile,
    paddingLeft: browserWidth > breakpoints[1] ? styles.grid.padding.desktop : styles.grid.padding.mobile
  })}, [
    h('p', {style: {display: 'inline'}}, 'Diseno de marca, Pagina Web y Administracion de Redes Sociales: '),
    h('a', {href: 'facebook.com/alexisdelatorre', style: _.assign({}, styles.fonts.link, {display: 'inline'})}, 'Alexis De La Torre')
  ])

  return h('div#wrapper', [
    contactInfo,
    h('div.line-separator', {style: {height: 1, background: styles.colors.dark, marginTop: -1, marginBottom: (styles.baseline / 2 * 5) - 1}}),
    header,
    // page(browserWidth),
    h('div.line-separator', {style: {height: 1, background: styles.colors.dark, marginTop: -1, marginBottom: (styles.baseline / 2 * 1) - 1}}),
    footer
  ])
}

module.exports = (page, browserWidth) => {
  return render(page, browserWidth)
}
