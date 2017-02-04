const h = require('virtual-dom/h')
const _ = require('lodash')

const styles = require('./styles.js')

const render = (page, browserWidth) => {
  const maxWidth = {
    marginRight: 'auto',
    marginLeft: 'auto',
    maxWidth: (styles.grid.column * 3) + (styles.grid.gutter * 2), // 3 colums, 2 gutters, 2 margin = 384
    paddingLeft: styles.baseline,
    paddingRight: styles.baseline
  }

  const contactInfo = h('div', {
    style: _.assign({}, maxWidth, styles.fonts.info, {
      marginTop: styles.baseline,
      marginBottom: (styles.baseline / 2 * 3) - styles.fonts.info.paddingTop
    })
  }, [
    h('p', 'Abierto Ahora.'),
    h('p', 'Telefono: (616) 117-5551'),
    h('a', {href: 'facebook.com'}, 'facebook.com/guerrerofitness'), // hide this
    h('p', 'Lun-Vie 05:00 - 11:00 & 15:00 - 22:00'),
    h('p', 'Sab 06:00 - 17:00'),
    h('p', 'Dom 07:00 - 14:00'),
    h('p', 'Plaza Magnolia local 2-A, Colonia Vicente Guerrero, Baja California, Mexico')
  ])

  const header = h('nav', {style: maxWidth}, [
    h('a', {href: 'index.html', style: {marginBottom: styles.baseline}}, h('img', {src: 'img/logo.svg', style: {margin: '0 auto', height: styles.baseline * 4}})),
    h('ul', {
      style: _.assign({}, styles.fonts.paragraph, {
        display: 'flex',
        justifyContent: 'space-around',
        marginBottom: styles.baseline * 4 - styles.fonts.paragraph.paddingTop
      })
    }, [
      h('li', h('a', {href: '/'}, 'Inicio')),
      h('li', h('a', {href: '/info'}, 'Informacion')),
      h('li', h('a', {href: '/contact'}, 'Contacto'))
    ])
  ])

  const footer = h('footer', [
    h('p', 'Diseno de marca, Pagina Web y Administracion de Redes Sociales:'),
    h('a', {href: 'facebook.com/alexisdelatorre'}, 'Alexis De La Torre')
  ])

  return h('div#wrapper', [
    contactInfo,
    h('div.line-separator', {style: {height: 1, background: styles.colors.dark, marginTop: -1, marginBottom: styles.baseline / 2 * 5}}),
    header,
    page(browserWidth),
    // h('div.line-separator', {style: {height: 1, background: styles.colors.dark}}),
    footer
  ])
}

module.exports = (page, browserWidth) => {
  return render(page, browserWidth)
}
