const path = require('path')

const express = require('express')
const app = express()

const h = require('virtual-dom/h')
const hToString = require('vdom-to-html')

const _ = require('lodash')

const indexPage = require('./pages/index.js')
const router = [
  {
    route: '/',
    rendered: indexPage(require('./pages/home.js'))
  },
  {
    route: '/info',
    rendered: indexPage(require('./pages/info.js'))
  },
  {
    route: '/contact',
    rendered: indexPage(require('./pages/contact.js'))
  }
]

// setup router on server
_.each(router, (value) => {
  const head = h('head', [
    h('link', {rel: 'stylesheet', href: 'reset.css'}),
    h('link', {rel: 'stylesheet', href: 'cooper-hewitt.css'}),
    h('link', {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto+Mono'})
  ])

  const scripts = h('script', {src: 'js/app.js'})

  const html = h('html', [
    head,
    value.rendered,
    scripts
  ])

  app.get(value.route, (req, res) => {
    res.send(hToString(html))
  })
})

// static assets
app.get('/img/:fileName', (req, res) => {
  res.sendFile('./inject/img/' + req.params.fileName, {root: path.join(__dirname, '/..')})
})

app.get('/cooper-hewitt.css', (req, res) => {
  res.sendFile('./inject/cooper-hewitt.css', {root: path.join(__dirname, '/..')})
})

app.get('/reset.css', (req, res) => {
  res.sendFile('./inject/reset.css', {root: path.join(__dirname, '/..')})
})

app.get('/js/app.js', (req, res) => {
  res.sendFile('./inject/js/app.js', {root: path.join(__dirname, '/..')})
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})
