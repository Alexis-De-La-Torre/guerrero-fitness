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

  console.log(require('./styles.js').breakpoints)
})
