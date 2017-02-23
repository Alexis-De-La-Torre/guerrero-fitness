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
    h('p', {style: _.assign({}, styles.fonts.paragraph, {marginBottom: styles.baseline / 2 + 5})}, 'Ser Guerrero es luchar y prepararse cada día, darlo todo y superar los retos que la vida nos pone. La salud es una de las herramientas mas importantes que alguien puede tener para superar estos retos, el problema es que se requiere de un esfuerzo tremendo para obtener y uno aun mas grande para conservar ese punto en el que una persona se ve y se siente en su máximo.'),
    h('p', {style: _.assign({}, styles.fonts.paragraph, {marginBottom: styles.baseline / 2 + 5})}, 'Funde Guerrero Fitness porque creo que la gente puede lograr mucho mas de lo que imagina si tiene el apoyo correcto. Que es posible superarse todos los días y lograr lo que uno se propone. Pero todos de ves en cuando necesitamos ese pequeño empujón para seguir adelante. En Guerrero Fitness creamos un ambiente amigable y alentador con rutinas personalizadas, planes a la medida y un seguimiento especializado que te ayudara a descubrir de lo que en realidad eres capaz.'),
    h('p', {style: _.assign({}, styles.fonts.paragraph, {marginBottom: styles.baseline / 2 + 5})}, 'vamos a lograr que te veas y sientas como siempre has deseado.'),
    h('h2', {style: browserWidth > responsive[2] ? styles.fonts.desktop.title : styles.fonts.mobile.title}, 'Y por eso, yo como tu #SOYGUERRERO')
  ])

  const video = h('div', {
    style: {
      marginRight: 'auto',
      marginLeft: 'auto',
      marginBottom: styles.baseline * 4
    }
  }, [
    h('iframe', {src: 'https://www.youtube.com/embed/zD4n-KGX0Vc', frameborder: '0', style: {width: '100%', height: (browserWidth / 16) * 9}}),
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
