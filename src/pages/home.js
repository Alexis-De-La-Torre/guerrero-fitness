const h = require('virtual-dom/h')
const _ = require('lodash')

const styles = require('../styles.js')

const render = browserWidth => {
  const calculatedMaxWidth = _.findLast(styles.breakpoints, value => browserWidth > value) // returns undefined if browserWidth is less than the first breakpoint

  const hero = h('div', !browserWidth ? {} : {
    style: {
      display: browserWidth > styles.breakpoints[2] ? 'flex' : 'block',
      maxWidth: browserWidth > styles.breakpoints[0] ? calculatedMaxWidth : styles.breakpoints[0],
      marginRight: 'auto',
      marginLeft: 'auto',
      marginTop: styles.baseline,
      marginBottom: browserWidth > styles.breakpoints[4] ? styles.baseline * 4 : styles.baseline * 4 + 3,
      paddingRight: browserWidth > styles.breakpoints[1] ? styles.grid.padding.desktop : styles.grid.padding.mobile,
      paddingLeft: browserWidth > styles.breakpoints[1] ? styles.grid.padding.desktop : styles.grid.padding.mobile
    }
  }, [
    h('div', h('img', {
      src: 'img/hero-photo.jpg',
      style: !browserWidth ? {} : {
        height: browserWidth < styles.breakpoints[4] ? styles.baseline * 10 : styles.baseline * 14,
        maxHeight: styles.baseline * 14
      }})),
    h('h1', !browserWidth ? {} : {style: _.assign({}, browserWidth > styles.breakpoints[4] ? styles.fonts.desktop.hero : styles.fonts.mobile.hero, browserWidth > styles.breakpoints[2] ? {
      marginLeft: -styles.baseline,
      paddingRight: styles.baseline
    } : {
      marginTop: -(styles.baseline / 2) * 3
    })}, 'NOSOTROS TE AYUDAMOS A ALCANZAR TU POTENCIAL.')
  ])

  const testimonials = h('h2', {style: _.assign({}, browserWidth > styles.breakpoints[4] ? styles.fonts.desktop.title : styles.fonts.mobile.title, {
    maxWidth: browserWidth > styles.breakpoints[0] ? calculatedMaxWidth : styles.breakpoints[0],
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: browserWidth > styles.breakpoints[4] ? (styles.baseline * 2) - styles.fonts.desktop.title.paddingTop : (styles.baseline * 2) - styles.fonts.mobile.title.paddingTop - 4,
    paddingRight: browserWidth > styles.breakpoints[1] ? styles.grid.padding.desktop : styles.grid.padding.mobile,
    paddingLeft: browserWidth > styles.breakpoints[1] ? styles.grid.padding.desktop : styles.grid.padding.mobile
  })},
  'TESTIMONIOS')

  // const cta = h('div', [
  //   h('p', 'LA MEJOR ATENCION EN EL VALLE DE SAN QUINTIN, RUTINAS PERSONALIZADAS Y UN AMBIENTE AMIGABLE.'),
  //   h('a', {href: '#'}, 'DESCUBRE MAS')
  // ])

  return h('div', [
    hero,
    testimonials,
    require('../components/testimonials-slider.js')(browserWidth)
    // cta
  ])
}

module.exports = (browserWidth) => {
  return render(browserWidth)
}
