const domready = require('domready')
const _ = require('lodash')
const vdom = require('virtual-dom')
const vdomVirtualize = require('vdom-virtualize')

const router = require('./router.js')

const render = browserWidth => {
  return _.find(router(browserWidth), ['route', window.location.pathname]).rendered
}

domready(() => {
  let domBody = document.getElementById('wrapper')

  const rootNode = vdomVirtualize(domBody) // this comes from the server (unstyled html)
  let tree = render(document.body.clientWidth)
  vdom.patch(domBody, vdom.diff(rootNode, tree))

  window.addEventListener('resize', event => {
    const newTree = render(document.body.clientWidth)
    vdom.patch(domBody, vdom.diff(tree, newTree))
    tree = newTree
  })

  const GoogleMapsLoader = require('google-maps')

  const uluru = {lat: 30.723390, lng: -115.989136}

  GoogleMapsLoader.KEY = 'AIzaSyCg2JFt1bLv5N-BQeoTyHGxpmJxgYhtdeE'

  GoogleMapsLoader.load(google => {
    const map = new google.maps.Map(document.getElementById('map'), {
      center: uluru,
      zoom: 18
    })

    new google.maps.Marker({
      position: uluru,
      map: map
    })
  })

  GoogleMapsLoader.onLoad((google) => {
    console.log('I just loaded google maps api')
  })

  console.log(require('./styles.js').breakpoints)
})
