const h = require('virtual-dom/h')
const _ = require('lodash')

const styles = require('../styles.js')

const render = (page, browserWidth) => {
  const calculatedMaxWidth = _.findLast(styles.breakpoints, value => browserWidth > value) // returns undefined if browserWidth is less than the first breakpoint

  const contactInfo = h('div', !browserWidth ? {} : {
    style: {
      display: browserWidth > styles.breakpoints[4] ? 'flex' : 'block',
      justifyContent: 'space-between',
      maxWidth: browserWidth > styles.breakpoints[0] ? calculatedMaxWidth : styles.breakpoints[0],
      marginRight: 'auto',
      marginLeft: 'auto',
      marginTop: styles.baseline,
      marginBottom: ((styles.baseline / 2) * 3) - 6,
      paddingRight: browserWidth > styles.breakpoints[1] ? styles.grid.padding.desktop : styles.grid.padding.mobile,
      paddingLeft: browserWidth > styles.breakpoints[1] ? styles.grid.padding.desktop : styles.grid.padding.mobile
    }
  }, [
    h('div', {style: styles.fonts.info}, [
      h('div', [
        h('p', !browserWidth ? {} : {style: {display: browserWidth < styles.breakpoints[0] ? 'block' : 'inline'}}, browserWidth && browserWidth < styles.breakpoints[0] ? 'Abierto Ahora' : 'Abierto Ahora  ||  '),
        h('p', !browserWidth ? {} : {style: {display: browserWidth < styles.breakpoints[0] ? 'block' : 'inline'}}, 'Telefono: (616) 117-5551'),
        h('a', {href: 'facebook.com', style: {display: browserWidth && browserWidth > styles.breakpoints[4] ? 'none' : 'block'}}, 'facebook.com/guerrerofitness') // hide this
      ]),
      h('div', [
        h('p', !browserWidth ? {} : {style: {display: browserWidth > styles.breakpoints[2] ? 'inline' : 'block'}}, browserWidth > styles.breakpoints[2] ? 'Lun-Vie 05:00 - 11:00 & 15:00 - 22:00  ||  ' : 'Lun-Vie 05:00 - 11:00 & 15:00 - 22:00'),
        h('p', !browserWidth ? {} : {style: {display: browserWidth > styles.breakpoints[2] ? 'inline' : 'block'}}, browserWidth > styles.breakpoints[2] ? 'Sab 06:00 - 17:00  ||  ' : 'Sab 06:00 - 17:00'),
        h('p', !browserWidth ? {} : {style: {display: browserWidth > styles.breakpoints[2] ? 'inline' : 'block'}}, 'Dom 07:00 - 14:00'),
        h('p', 'Plaza Magnolia local 2-A, Colonia Vicente Guerrero, Baja California, Mexico')
      ])
    ]),
    h('a', {href: 'facebook.com'}, h('img', {src: 'img/facebook-icon.svg', style: {height: styles.baseline * 3, display: browserWidth > styles.breakpoints[4] ? 'block' : 'none'}}))
  ])

  const header = h('header', !browserWidth ? {} : {
    style: {
      display: browserWidth > styles.breakpoints[2] ? 'flex' : 'block',
      justifyContent: 'space-between',
      alignItems: 'center',
      maxWidth: browserWidth > styles.breakpoints[0] ? calculatedMaxWidth : styles.breakpoints[0],
      marginRight: 'auto',
      marginLeft: 'auto',
      marginBottom: browserWidth > styles.breakpoints[2] ? (styles.baseline * 4) : (styles.baseline * 4) - styles.fonts.paragraph.paddingTop,
      paddingRight: browserWidth > styles.breakpoints[1] ? styles.grid.padding.desktop : styles.grid.padding.mobile,
      paddingLeft: browserWidth > styles.breakpoints[1] ? styles.grid.padding.desktop : styles.grid.padding.mobile
    }
  }, [
    h('a', {href: 'index.html', style: !browserWidth ? {} : {marginBottom: browserWidth < styles.breakpoints[2] ? styles.baseline : 0}}, h('img', {src: 'img/logo.svg', style: {height: styles.baseline * 4, marginRight: 'auto', marginLeft: 'auto'}})),
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
    maxWidth: browserWidth > styles.breakpoints[0] ? calculatedMaxWidth : styles.breakpoints[0],
    marginRight: 'auto',
    marginLeft: 'auto',
    paddingRight: browserWidth > styles.breakpoints[1] ? styles.grid.padding.desktop : styles.grid.padding.mobile,
    paddingLeft: browserWidth > styles.breakpoints[1] ? styles.grid.padding.desktop : styles.grid.padding.mobile
  })}, [
    h('p', {style: {display: 'inline'}}, 'Diseno de marca, Pagina Web y Administracion de Redes Sociales: '),
    h('a', {href: 'facebook.com/alexisdelatorre', style: _.assign({}, styles.fonts.link, {display: 'inline'})}, 'Alexis De La Torre')
  ])

  return h('div#wrapper', [
    contactInfo,
    h('div.line-separator', {style: {height: 1, background: styles.colors.dark, marginTop: -1, marginBottom: (styles.baseline / 2 * 5) - 1}}),
    header,
    page(browserWidth),
    h('div.line-separator', {style: {height: 1, background: styles.colors.dark, marginTop: -1, marginBottom: (styles.baseline / 2 * 1) - 1}}),
    footer
  ])
}

module.exports = (page, browserWidth) => {
  return render(page, browserWidth)
}
