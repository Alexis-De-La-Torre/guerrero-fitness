const h = require('virtual-dom/h')
const _ = require('lodash')

const render = browserWidth => {
  const direction = h('div', [
    h('h2', 'VEN A VISITARNOS'),
    h('p', 'Plaza Magnolia local 2-A, Colonia Vicente Guerrero, Baja California, Mexico'),
    h('p', '// map placeholder')
  ])

  return [
    direction
  ]
}

module.exports = (browserWidth) => {
  return h('div.wrapper', _.union([
    h('a', {href: 'tel:+526161175551'}, '(616) 117-5551'),
    h('a', {href: 'tel:+526161175551'}, 'CONTACTO@GUERREROFITNESS.MX')
  ], render(browserWidth)))
}
