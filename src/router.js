const indexPage = require('./pages/index.js')

module.exports = function (browserWidth) {
  return [
    {
      route: '/',
      rendered: indexPage(require('./pages/home.js'), browserWidth)
    },
    {
      route: '/info',
      rendered: indexPage(require('./pages/info.js'), browserWidth)
    },
    {
      route: '/contact',
      rendered: indexPage(require('./pages/contact.js'), browserWidth)
    }
  ]
}
