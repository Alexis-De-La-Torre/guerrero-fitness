const vdom = require('virtual-dom')
const h = require('virtual-hyperscript-hook')(vdom.h)
const _ = require('lodash')
const gsap = require('gsap')

const styles = require('../styles.js')

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
  },
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

let state = 0
let transitioning = false
let sliderNodes = []
let hooked = 0
let calc

const render = (browserWidth) => {
  console.log('render')
  state = 0
  transitioning = false

  const responsive = [
    {breakpoint: 0, style: {flexShrink: 0, flexGrow: 0, width: browserWidth - (styles.baseline * 2)}, columns: 1},
    {breakpoint: styles.breakpoints[0], style: {flexShrink: 0, flexGrow: 0, width: browserWidth - (styles.baseline * 4)}, columns: 1},
    {breakpoint: styles.breakpoints[3], style: {marginRight: styles.baseline, flexShrink: 0, flexGrow: 0, width: browserWidth / 2 - (styles.baseline * 3) + (styles.baseline / 2)}, columns: 2},
    {breakpoint: styles.breakpoints[6], style: {marginRight: styles.baseline, flexShrink: 0, flexGrow: 0, width: browserWidth / 3 - (styles.baseline * 2)}, columns: 3}
  ]

  const calculatedWidth = _.findLast(responsive, value => browserWidth > value.breakpoint)
  calc = calculatedWidth

  const moveRigth = () => {
    console.log(sliderNodes.length)
    if (state > 0 && transitioning === false) {
      _.each(sliderNodes, value => {
        TweenLite.to(value, 0.7, {
          x: '+=' + (calc.columns !== 1 ? calc.style.width + styles.baseline : calc.style.width),
          ease: Bounce.easeOut,
          onStart: () => { transitioning = true },
          onComplete: () => { transitioning = false }
        })
      })
      state = state - 1
      console.log(state)
    }
  }

  const moveLeft = () => {
    console.log(sliderNodes.length)
    if (state < sliderNodes.length - calc.columns && transitioning === false) {
      _.each(sliderNodes, value => {
        TweenLite.to(value, 0.7, {
          x: '-=' + (calc.columns !== 1 ? calc.style.width + styles.baseline : calc.style.width),
          ease: Bounce.easeOut,
          onStart: () => { transitioning = true },
          onComplete: () => { transitioning = false }
        })
      })
      state = state + 1
      console.log(state)
    }
  }

  if (sliderNodes) {
    _.each(sliderNodes, value => {
      TweenLite.to(value, 0, {
        x: 0,
        ease: Bounce.easeOut,
        onStart: () => { transitioning = true },
        onComplete: () => { transitioning = false }
      })
    })
  }

  const buttonStyle = {
    width: styles.baseline,
    backgroundColor: styles.colors.accent,
    color: styles.colors.complement,
    flexShrink: 0,
    flexGrow: 0,
    fontWeight: 'bold'
  }

  return h('div', !browserWidth ? {} : {
    style: {
      marginLeft: styles.baseline,
      marginRight: styles.baseline
    }
  },
  h('div', {style: {display: 'flex'}}, [
    h('button', {
      style: buttonStyle,
      hook: elem => {
        if (hooked !== 2) {
          console.log('hook')
          elem.addEventListener('click', moveRigth)
          hooked += 1
        }
      }
    }, '<'),
    h('div', {style: {
      display: 'flex',
      width: browserWidth - (styles.baseline * 2),
      overflow: 'hidden'
    }},
    _.map(testimonialsData, (value) => {
      return h('div', {
        hook: elem => {
          // console.log(sliderNodes.length)
          if (sliderNodes.length < testimonialsData.length) sliderNodes.push(elem)
        },
        style: !browserWidth ? {} : calculatedWidth.style}, [
          h('img', {src: value.portrait, style: {borderRadius: '50%', marginRight: 'auto', marginLeft: 'auto'}}),
          h('img', {src: 'img/stars.svg', style: {height: styles.baseline, marginRight: 'auto', marginLeft: 'auto', marginTop: -styles.baseline}}),
          h('p', {style: styles.fonts.paragraph}, value.text),
          h('p', {style: styles.fonts.info}, value.name)
        ])
    })),
    h('button#h', {
      style: buttonStyle,
      hook: elem => {
        if (hooked !== 2) {
          elem.addEventListener('click', moveLeft)
          hooked += 1
        }
      }
    }, '>')
  ]))
}

module.exports = (browserWidth) => {
  return render(browserWidth)
}
