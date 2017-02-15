const h = require('virtual-dom/h')
const _ = require('lodash')

const styles = require('../styles.js')

const render = browserWidth => {
  const calculatedMaxWidth = _.findLast(_.take(styles.breakpoints, 4), value => browserWidth > value) // returns undefined if browserWidth is less than the first breakpoint

  const aboutTrainer = h('div', !browserWidth ? {} : {
    style: {
      display: browserWidth > styles.breakpoints[2] ? 'flex' : 'block',
      maxWidth: browserWidth > styles.breakpoints[0] ? calculatedMaxWidth : styles.breakpoints[0],
      marginRight: 'auto',
      marginLeft: 'auto',
      marginTop: styles.baseline,
      marginBottom: browserWidth > styles.breakpoints[4] ? styles.baseline * 2 : styles.baseline * 2 + 3,
      paddingRight: browserWidth > styles.breakpoints[1] ? styles.grid.padding.desktop : styles.grid.padding.mobile,
      paddingLeft: browserWidth > styles.breakpoints[1] ? styles.grid.padding.desktop : styles.grid.padding.mobile
    }
  }, [
    h('img', {src: 'img/trainer-photo.jpg', style: {width: styles.baseline * 11, marginRight: browserWidth > styles.breakpoints[2] ? styles.baseline : 0}}),
    h('div', [
      h('h2', !browserWidth ? {} : {style: browserWidth > styles.breakpoints[3] ? styles.fonts.desktop.title : styles.fonts.mobile.title}, 'ANGEL FERMIN CORTEZ.'),
      h('p', {style: _.assign({}, styles.fonts.info, {color: styles.colors.accent, marginTop: -styles.baseline / 2, marginBottom: styles.baseline - styles.fonts.info.paddingTop})}, 'Entrenador Personal  ||  Director General'),
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
      maxWidth: browserWidth > styles.breakpoints[0] ? calculatedMaxWidth : styles.breakpoints[0],
      marginRight: 'auto',
      marginLeft: 'auto',
      marginTop: styles.baseline,
      marginBottom: browserWidth > styles.breakpoints[4] ? styles.baseline * 4 : styles.baseline * 4 + 3,
      paddingRight: browserWidth > styles.breakpoints[1] ? styles.grid.padding.desktop : styles.grid.padding.mobile,
      paddingLeft: browserWidth > styles.breakpoints[1] ? styles.grid.padding.desktop : styles.grid.padding.mobile
    }
  }, [
    h('p', {style: _.assign({}, styles.fonts.paragraph, {marginBottom: styles.baseline / 2 + 5})}, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel posuere ligula. Phasellus vulputate, purus vel viverra cursus, lectus urna condimentum lectus, et venenatis tortor justo nec turpis. Integer quis pellentesque tortor.'),
    h('p', {style: _.assign({}, styles.fonts.paragraph, {marginBottom: styles.baseline / 2 + 5})}, 'Ut lorem libero, congue at eros ac, eleifend scelerisque libero. Nam eget suscipit urna. Donec sit amet ligula et purus porttitor fringilla at non mi. Cras ornare congue est in tempor. Aliquam id tristique urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.'),
    h('h2', {style: browserWidth > styles.breakpoints[2] ? styles.fonts.desktop.title : styles.fonts.mobile.title}, 'Y POR ESO #SOYGUERRERO')
  ])

  const video = h('div', {
    style: {
      maxWidth: browserWidth > styles.breakpoints[0] ? calculatedMaxWidth : styles.breakpoints[0],
      marginRight: 'auto',
      marginLeft: 'auto',
      marginBottom: browserWidth > styles.breakpoints[4] ? styles.baseline * 4 : styles.baseline * 4 + 3
    }
  }, [
    h('iframe', {src: 'https://www.youtube.com/embed/xhUfiOSOk3g', frameborder: '0', style: {width: '100%', height: 'auto'}}),
    h('p', 'Video: Angel Paul Espinoza')
  ])

  return h('div.wrapper', [
    aboutTrainer,
    mission,
    video
  ])
}

module.exports = (browserWidth) => {
  return render(browserWidth)
}
