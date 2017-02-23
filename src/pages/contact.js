const vdom = require('virtual-dom')
const h = require('virtual-hyperscript-hook')(vdom.h)
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
    fontFamily: 'Cooper Hewitt',
    fontSize: 32,
    fontWeight: 700,
    lineHeight: styles.baseline * 2 + 'px'
  }
}

const render = browserWidth => {
  const currentBreakpoint = _.findLast(responsive, value => browserWidth > value)

  const numberAndEmail = h('div', {
    style: {
      width: currentBreakpoint !== undefined ? currentBreakpoint : responsive[0].containerWidth,
      marginRight: 'auto',
      marginLeft: 'auto',
      marginBottom: styles.baseline * 4
    }
  }, [
    h('a', _.assign({}, {href: 'tel:+526161175551'}, !browserWidth ? {} : {
      style: browserWidth > responsive[3] ? _.assign({}, fonts.title, {marginBottom: styles.baseline}) : _.assign({}, {width: 120, marginRight: 'auto', marginLeft: 'auto', marginBottom: styles.baseline * 2}, styles.button)
    }), '(616) 117-5551'),
    h('a', _.assign({}, {href: 'mailto:contacto@guerrerofitness.mx'}, !browserWidth ? {} : {
      style: browserWidth > responsive[3] ? fonts.title : _.assign({}, {width: 270, marginRight: 'auto', marginLeft: 'auto'}, styles.button)
    }), 'CONTACTO@GUERREROFITNESS.MX')
  ])

  const direction = h('div', {
    style: {
      width: currentBreakpoint !== undefined ? currentBreakpoint : responsive[0].containerWidth,
      marginRight: 'auto',
      marginLeft: 'auto',
      marginBottom: browserWidth > responsive[4] ? styles.baseline * 2 : styles.baseline * 2 + 3
    }
  }, [
    h('h2', !browserWidth ? {} : {
      style: browserWidth > responsive[1] ? _.assign({}, styles.fonts.desktop.title, {marginTop: -styles.baseline}) : styles.fonts.mobile.title
    }, 'O VEN A VISITARNOS'),
    h('p', {style: fonts.info}, 'Plaza Magnolia local 2-A, Colonia Vicente Guerrero, Baja California, Mexico')
  ])

  const map = h('div#map', {
    style: {
      height: styles.baseline * 14,
      marginBottom: styles.baseline * 4,
      backgroundColor: styles.colors.complement
    },
    hook: elem => {
      const GoogleMapsLoader = require('google-maps')

      GoogleMapsLoader.KEY = 'AIzaSyCg2JFt1bLv5N-BQeoTyHGxpmJxgYhtdeE'

      GoogleMapsLoader.load()

      GoogleMapsLoader.onLoad(google => {
        console.log(google)
        const cords = {lat: 30.723390, lng: -115.989136}
        const map = new google.maps.Map(elem, {center: cords, zoom: 16})
        new google.maps.Marker({map: map, position: cords})
      })
    }
  })

  return h('div#wrapper', [
    header(browserWidth),
    numberAndEmail,
    direction,
    map,
    footer(browserWidth)
  ])
}

module.exports = (browserWidth) => {
  return render(browserWidth)
}
