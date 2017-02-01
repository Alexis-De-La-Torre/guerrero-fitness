const h = require('virtual-dom/h')

const styles = require('../styles.js')

const contactInfo = h('div', [
  h('p', 'Abierto Ahora.'),
  h('p', 'Telefono: (616) 117-5551'),
  h('p', h('a', {href: 'facebook.com'}, 'facebook.com/guerrerofitness')), // hide this
  h('p', 'Lun-Vie 05:00 - 11:00 & 15:00 - 22:00'),
  h('p', 'Sab 06:00 - 17:00'),
  h('p', 'Dom 07:00 - 14:00'),
  h('p', 'Plaza Magnolia local 2-A, Colonia Vicente Guerrero, Baja California, Mexico')
])

const header = h('header', [
  h('a', {href: 'index.html'}, h('img', {src: 'img/logo.svg'})),
  h('ul', [
    h('li', h('a', {href: '#'}, 'Inicio')),
    h('li', h('a', {href: '#'}, 'Informacion')),
    h('li', h('a', {href: '#'}, 'Contacto'))
  ])
])

const footer = h('footer', [
  h('p', 'Diseno de marca, Pagina Web y Administracion de Redes Sociales:'),
  h('a', {href: 'facebook.com/alexisdelatorre'}, 'Alexis De La Torre')
])

const indexPage = require('../index-page.js')

module.exports = h('div#wrapper', [
  contactInfo,
  h('div.line-separator', {style: {height: 1, background: styles.colors.dark}}),
  header,
  indexPage,
  h('div.line-separator', {style: {height: 1, background: styles.colors.dark}}),
  footer
])
