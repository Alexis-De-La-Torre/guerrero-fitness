const createElement = require('virtual-dom/create-element')

const indexPage = require('./pages/index.js')

document.body.appendChild(createElement(indexPage))
