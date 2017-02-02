const h = require('virtual-dom/h')

const direction = h('div', [
  h('h2', 'VEN A VISITARNOS'),
  h('p', 'Plaza Magnolia local 2-A, Colonia Vicente Guerrero, Baja California, Mexico'),
  h('p', '// map placeholder')
])

module.exports = h('div.wrapper', [
  h('a', {href: 'tel:+526161175551'}, '(616) 117-5551'),
  h('a', {href: 'tel:+526161175551'}, 'CONTACTO@GUERREROFITNESS.MX'),
  direction
])
