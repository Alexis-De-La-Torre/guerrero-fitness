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

const responsive = [
  {containerWidth: (styles.grid.column * 3) + (styles.grid.gutter * 2) + (styles.baseline * 4), testimonialWidth: (styles.grid.column * 3) + (styles.grid.gutter * 2), columns: 1},
  {containerWidth: (styles.grid.column * 4) + (styles.grid.gutter * 3) + (styles.baseline * 4), testimonialWidth: (styles.grid.column * 4) + (styles.grid.gutter * 3), columns: 1},
  {containerWidth: (styles.grid.column * 5) + (styles.grid.gutter * 4) + (styles.baseline * 4), testimonialWidth: (styles.grid.column * 5) + (styles.grid.gutter * 4), columns: 1},
  {containerWidth: (styles.grid.column * 6) + (styles.grid.gutter * 5) + (styles.baseline * 4), testimonialWidth: (styles.grid.column * 3) + (styles.grid.gutter * 2), columns: 2},
  {containerWidth: (styles.grid.column * 8) + (styles.grid.gutter * 7) + (styles.baseline * 4), testimonialWidth: (styles.grid.column * 4) + (styles.grid.gutter * 3), columns: 2},
  {containerWidth: (styles.grid.column * 9) + (styles.grid.gutter * 8) + (styles.baseline * 4), testimonialWidth: (styles.grid.column * 3) + (styles.grid.gutter * 2), columns: 3}
]

// animation stuff
let testimonialNodes = [] // array containing the dom nodes of every testimonial (used for animating them)
let testimonialNodesCount = 0 // lets me know when all the nodes are inside of the array
let state = 0 // a counter that lets me know how many steps has the slider done
let isTransitioning = false // helper for disabling click when the animation is running
let hookedCount = 0 // counter to help me only add event to every button one time
let currentBreakpoint

const render = browserWidth => {
  // reset animation stuff (for responsive, this renders every time the browser width changes)
  state = 0
  isTransitioning = false
  _.each(testimonialNodes, testimonialNode => TweenLite.to(testimonialNode, 0, {x: 0}))

  currentBreakpoint = _.findLast(responsive, value => browserWidth > value.containerWidth)

  const renderTestimonial = (portrait, text, name) => {
    return h('div', !browserWidth ? {} : {
      style: {
        width: !currentBreakpoint ? responsive[0].testimonialWidth : currentBreakpoint.testimonialWidth,
        marginRight: styles.baseline / 2,
        marginLeft: styles.baseline / 2,
        flexGrow: 0,
        flexShrink: 0
      },
      hook: elem => {
        if (testimonialNodes.length < testimonialsData.length) testimonialNodes.push(elem)
      }
    }, [
      h('img', {src: portrait, style: {borderRadius: '50%', marginRight: 'auto', marginLeft: 'auto'}}),
      h('img', {src: 'img/stars.svg', style: {height: styles.baseline, marginRight: 'auto', marginLeft: 'auto', marginTop: -styles.baseline}}),
      h('p', {style: styles.fonts.paragraph}, text),
      h('p', {style: styles.fonts.info}, name)
    ])
  }

  const moveRigth = () => {

    if (state > 0 && !isTransitioning) {
      _.each(testimonialNodes, testimonialNode => {
        TweenLite.to(testimonialNode, 0.5, {
          x: '+=' + (currentBreakpoint.testimonialWidth + styles.baseline),
          ease: Bounce.easeOut,
          onStart: () => { isTransitioning = true },
          onComplete: () => { isTransitioning = false }
        })
      })
      state = state - 1
    }
  }

  const moveLeft = () => {
    if (state < testimonialNodes.length - currentBreakpoint.columns && !isTransitioning) {

      _.each(testimonialNodes, testimonialNode => {
        TweenLite.to(testimonialNode, 0.5, {
          x: '-=' + (currentBreakpoint.testimonialWidth + styles.baseline),
          ease: Bounce.easeOut,
          onStart: () => { isTransitioning = true },
          onComplete: () => { isTransitioning = false }
        })
      })
      state = state + 1
    }
  }

  return h('div', !browserWidth ? {} : {
    style: {
      display: 'flex',
      width: currentBreakpoint !== undefined ? currentBreakpoint.containerWidth : responsive[0].containerWidth,
      marginRight: 'auto',
      marginLeft: 'auto',
      marginTop: styles.baseline * 4,
      marginBottom: (styles.baseline * 4) - 2
    }
  }, [
    h('button', {
      style: {width: styles.baseline, flexGrow: 0, flexShrink: 0, marginRight: 12, color: 'white', backgroundColor: 'blue'},
      hook: elem => {
        if (hookedCount < 2) {
          elem.addEventListener('click', moveRigth)
          hookedCount += 1
        }
      }
    }, '◀'),
    h('div', !browserWidth ? {} : {
      style: {
        display: 'flex',
        width: currentBreakpoint !== undefined ? currentBreakpoint.containerWidth - styles.baseline * 3 : responsive[0].containerWidth,
        flexGrow: 0,
        flexShrink: currentBreakpoint !== undefined ? 0 : 1,
        overflow: 'hidden'
      }
    }, _.map(testimonialsData, testimonial => renderTestimonial(testimonial.portrait, testimonial.text, testimonial.name))),
    h('button', {
      style: {width: styles.baseline, flexGrow: 0, flexShrink: 0, marginLeft: 12, color: 'white', backgroundColor: 'blue'},
      hook: elem => {
        if (hookedCount < 2) {
          elem.addEventListener('click', moveLeft)
          hookedCount += 1
        }
      }
    }, '▶')
  ])
}

module.exports = browserWidth => render(browserWidth)
