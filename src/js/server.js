const path = require('path')

const express = require('express')
const app = express()

const h = require('virtual-dom/h')
const hToString = require('vdom-to-html')

const indexPage = require('./pages/index.js')

app.get('/', (req, res) => {
  const head = h('head', [
    h('link', {rel: 'stylesheet', href: 'reset.css'}),
    h('link', {rel: 'stylesheet', href: 'cooper-hewitt.css'}),
    h('link', {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto+Mono'})
  ])

  const html = h('html', [
    head,
    indexPage
  ])

  res.send(hToString(html))
})

app.get('/img/:fileName', (req, res) => {
  res.sendFile('./inject/img/' + req.params.fileName, {root: path.join(__dirname, '/..')})
})

app.get('/cooper-hewitt.css', (req, res) => {
  res.sendFile('./inject/cooper-hewitt.css', {root: path.join(__dirname, '/..')})
})

app.get('/reset.css', (req, res) => {
  res.sendFile('./inject/reset.css', {root: path.join(__dirname, '/..')})
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})
