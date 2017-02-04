const h = require('virtual-dom/h')
const _ = require('lodash')

const styles = require('./styles.js')

const render = browserWidth => {
  const hero = h('div', [
    h('img', {src: 'img/hero-photo.jpg'}),
    h('h1', 'NOSOTROS TE AYUDAMOS A ALCANZAR TU POTENCIAL.')
  ])

  const testimonialsData = [
    {
      portrait: 'img/portrait1.jpg',
      text: 'Exelente atencion, sin duda el mejor gimnasio de Vicente Guerrero, muy agradable ambiente y atencion por parte de los instructores.',
      name: 'Angel Paul Espinoza.'
    },
    {
      portrait: 'img/portrait2.jpg',
      text: 'Excelente ambiente, el entrenador muy atento con los usuarios, super recomendado',
      name: 'Delia Lizbeth Castro'
    },
    {
      portrait: 'img/portrait3.jpg',
      text: 'Excelente atención personalizada instructor preparado para asignar rutinas y plan de nutrición',
      name: 'Carlos Fernando Fragozo'
    }
  ]

  const testimonials = h('div', [
    h('h2', 'TESTIMONIOS'),
    h('div', _.map(testimonialsData, (value) => {
      return h('div', [
        h('img', {src: value.portrait}),
        h('img', {src: 'img/stars.svg', style: {height: styles.baseline}}),
        h('p', value.text),
        h('p', value.name)
      ])
    }))
  ])

  const cta = h('div', [
    h('p', 'LA MEJOR ATENCION EN EL VALLE DE SAN QUINTIN, RUTINAS PERSONALIZADAS Y UN AMBIENTE AMIGABLE.'),
    h('a', {href: '#'}, 'DESCUBRE MAS')
  ])

  return h('div', [
    hero,
    testimonials,
    cta
  ])
}

module.exports = (browserWidth) => {
  return render(browserWidth)
}
