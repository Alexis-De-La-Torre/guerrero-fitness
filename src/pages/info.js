const h = require('virtual-dom/h')
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

const fonts = {
  info: {
    fontFamily: 'Roboto Mono',
    fontSize: 12,
    lineHeight: styles.baseline + 'px'
  },
  title: {
    desktop: {
      fontFamily: 'Cooper Hewitt',
      fontSize: 32,
      fontWeight: 700,
      lineHeight: styles.baseline + 'px'
    },
    mobile: {
      fontFamily: 'Cooper Hewitt',
      fontSize: 24,
      fontWeight: 700,
      lineHeight: styles.baseline * 2 + 'px'
    }
  }
}

const render = browserWidth => {
  const currentBreakpoint = _.findLast(responsive, value => browserWidth > value)

  const aboutTrainer = h('div', !browserWidth ? {} : {
    style: {
      display: browserWidth > responsive[2] ? 'flex' : 'block',
      width: currentBreakpoint !== undefined ? currentBreakpoint : responsive[0].containerWidth,
      marginRight: 'auto',
      marginLeft: 'auto',
      marginTop: styles.baseline,
      marginBottom: styles.baseline * 2
    }
  }, [
    h('img', {src: 'img/trainer-photo.jpg', style: {width: styles.baseline * 11, marginRight: browserWidth > responsive[2] ? styles.baseline : 0}}),
    h('div', [
      h('h2', !browserWidth ? {} : {style: browserWidth > responsive[3] ? fonts.title.desktop : fonts.title.mobile}, 'ANGEL FERMIN CORTEZ.'),
      h('p', {style: _.assign({}, fonts.info, {color: styles.colors.accent, marginBottom: styles.baseline})}, 'Entrenador Personal  ||  Director General'),
      h('ul', {style: styles.fonts.paragraph}, [
        h('li', '— Entrenamiento Femenino'),
        h('li', '— Biomecanica del ejercicio'),
        h('li', '— Sistemas actualizados de entrenamiento'),
        h('li', '— Entrenamiento correctivo'),
        h('li', '— Entrenamiento en edad adulta'),
        h('li', '— Biomecanica aplicada al entrenamiento')
      ])
    ])
  ])

  const mission = h('div', !browserWidth ? {} : {
    style: {
      width: currentBreakpoint !== undefined ? currentBreakpoint : responsive[0].containerWidth,
      marginRight: 'auto',
      marginLeft: 'auto',
      marginTop: styles.baseline,
      marginBottom: styles.baseline * 4
    }
  }, [
    h('p', {style: _.assign({}, styles.fonts.paragraph, {marginBottom: styles.baseline / 2 + 5})}, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel posuere ligula. Phasellus vulputate, purus vel viverra cursus, lectus urna condimentum lectus, et venenatis tortor justo nec turpis. Integer quis pellentesque tortor.'),
    h('p', {style: _.assign({}, styles.fonts.paragraph, {marginBottom: styles.baseline / 2 + 5})}, 'Ut lorem libero, congue at eros ac, eleifend scelerisque libero. Nam eget suscipit urna. Donec sit amet ligula et purus porttitor fringilla at non mi. Cras ornare congue est in tempor. Aliquam id tristique urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.'),
    h('h2', {style: browserWidth > responsive[2] ? styles.fonts.desktop.title : styles.fonts.mobile.title}, 'Y POR ESO #SOYGUERRERO')
  ])

  const video = h('div', {
    style: {
      marginRight: 'auto',
      marginLeft: 'auto',
      marginBottom: styles.baseline * 4
    }
  }, [
    h('iframe', {src: 'https://www.youtube.com/embed/xhUfiOSOk3g', frameborder: '0', style: {width: '100%', height: (browserWidth / 16) * 9}}),
    h('p', {style: _.assign(styles.fonts.info, {marginLeft: styles.baseline})}, 'Video: Angel Paul Espinoza')
  ])

  return h('div#wrapper', [
    header(browserWidth),
    aboutTrainer,
    mission,
    video,
    footer(browserWidth)
  ])
}

module.exports = (browserWidth) => {
  return render(browserWidth)
}
