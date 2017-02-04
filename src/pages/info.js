const h = require('virtual-dom/h')

const aboutTrainer = h('div', [
  h('img', {src: 'img/trainer-photo.jpg'}),
  h('h2', 'Angel Fermin Cortez.'),
  h('p', 'Entrenador Personal  ||  Director General'),
  h('ul', [
    h('li', 'Entrenamiento Femenino'),
    h('li', 'Biomecanica del ejercicio'),
    h('li', 'Sistemas actualizados de entrenamiento'),
    h('li', 'Entrenamiento correctivo'),
    h('li', 'Entrenamiento en edad adulta'),
    h('li', 'Biomecanica aplicada al entrenamiento')
  ])
])

const mission = h('div', [
  h('p', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel posuere ligula. Phasellus vulputate, purus vel viverra cursus, lectus urna condimentum lectus, et venenatis tortor justo nec turpis. Integer quis pellentesque tortor.'),
  h('p', 'Ut lorem libero, congue at eros ac, eleifend scelerisque libero. Nam eget suscipit urna. Donec sit amet ligula et purus porttitor fringilla at non mi. Cras ornare congue est in tempor. Aliquam id tristique urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.'),
  h('h2', 'Y POR ESO #SOYGUERRERO')
])

const video = h('div', [
  h('iframe', {src: 'https://www.youtube.com/embed/xhUfiOSOk3g', frameborder: '0'}),
  h('p', 'Video: Angel Paul Espinoza')
])

module.exports = (window) => {
  h('div.wrapper', [
    aboutTrainer,
    mission,
    video
  ])
}
