const h = require('virtual-hyperscript-hook')(require('virtual-dom/h'))
const mount = require('virtual-hyperscript-mount')()
const _ = require('lodash')

// Components
const header = require('../components/header.js')
const footer = require('../components/footer.js')

const styles = require('../styles.js')

const responsive = [
  (styles.grid.column * 3) + (styles.grid.gutter * 2) + (styles.baseline * 4),
  (styles.grid.column * 4) + (styles.grid.gutter * 3) + (styles.baseline * 4),
  (styles.grid.column * 5) + (styles.grid.gutter * 4) + (styles.baseline * 4),
  (styles.grid.column * 6) + (styles.grid.gutter * 5) + (styles.baseline * 4),
  (styles.grid.column * 8) + (styles.grid.gutter * 7) + (styles.baseline * 4),
  (styles.grid.column * 9) + (styles.grid.gutter * 8) + (styles.baseline * 4)
]

const render = browserWidth => {
  const currentBreakpoint = _.findLast(responsive, value => browserWidth > value)

  const hero = h('div', !browserWidth ? {} : {
    style: {
      display: browserWidth > responsive[3] ? 'flex' : 'block',
      width: currentBreakpoint !== undefined ? currentBreakpoint : responsive[0].containerWidth,
      marginRight: 'auto',
      marginLeft: 'auto',
      marginTop: styles.baseline,
      marginBottom: styles.baseline * 4
    }
  }, [
    h('div', h('img', {
      src: 'img/hero-photo.jpg',
      style: !browserWidth ? {} : {
        height: browserWidth < responsive[4] ? styles.baseline * 10 : styles.baseline * 14,
        maxHeight: styles.baseline * 14
      }})),
      h('div', !browserWidth ? {} : {style: browserWidth > responsive[4] ? styles.fonts.desktop.hero : styles.fonts.mobile.hero}, [
        h('h1', {style: {display: 'inline'}}, 'En Guerrero Fitness te aconsejamos y ayudamos a descubrir tu rutina perfecta. Solo '),
        h('a', {href: '/contact', style: _.assign({}, styles.fonts.link, {display: 'inline'})}, 'llámanos o visitanos.')
      ])
  ])

  const testimonials = h('h2', {style: _.assign({}, browserWidth > responsive[3] ? styles.fonts.desktop.title : styles.fonts.mobile.title, {
    width: currentBreakpoint !== undefined ? currentBreakpoint : responsive[0].containerWidth,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: (styles.baseline * 4) + 1 // i have no idea why this doesnt align
  })},
  'TESTIMONIOS')

  const cta = h('div', !browserWidth ? {} : {
    style: {
      width: currentBreakpoint !== undefined ? currentBreakpoint : responsive[0].containerWidth,
      marginRight: 'auto',
      marginLeft: 'auto',
      marginBottom: styles.baseline * 4
    }
  }, [
    h('p', {style: browserWidth > responsive[3] ? styles.fonts.desktop.title : styles.fonts.mobile.title}, 'LA MEJOR ATENCION EN EL VALLE DE SAN QUINTIN, RUTINAS PERSONALIZADAS Y UN AMBIENTE AMIGABLE.'),
    h('a', {href: '/info', style: _.assign({}, styles.fonts.link, browserWidth > responsive[3] ? styles.fonts.desktop.title : styles.fonts.mobile.title)}, 'DESCUBRE MAS')
  ])

  return h('div#wrapper', [
    header(browserWidth),
    hero,
    testimonials,
    require('../components/testimonials-slider.js')(browserWidth),
    cta,
    footer(browserWidth) // Component
  ])
}

module.exports = (browserWidth) => {
  return render(browserWidth)
}
