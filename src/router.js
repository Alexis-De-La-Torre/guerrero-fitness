const home = require('./pages/home.js')
const info = require('./pages/info.js')
const contact = require('./pages/contact.js')

module.exports = function (browserWidth) {
  return [
    {
      route: '/',
      rendered: home(browserWidth)
    },
    {
      route: '/info',
      rendered: info(browserWidth)
    },
    {
      route: '/contact',
      rendered: contact(browserWidth)
    }
  ]
}
