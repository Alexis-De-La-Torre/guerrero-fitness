const express = require('express')
const app = express()

const h = require('virtual-dom/h')
const hToString = require('vdom-to-html')

const _ = require('lodash')

const router = require('./router.js')()

// setup router on server
_.each(router, (value) => {
  const head = h('head', [
    h('link', {rel: 'stylesheet', href: 'css/reset.css'}),
    // h('link', {rel: 'stylesheet', href: 'css/dom-tree-view.css'}), // for development
    // h('link', {rel: 'stylesheet', href: 'http://basehold.it/12'}), // for development
    // h('link', {rel: 'stylesheet', href: 'css/baseline.css'}), // for development
    h('link', {rel: 'stylesheet', href: 'css/cooper-hewitt.css'}),
    h('link', {rel: 'stylesheet', href: 'css/roboto-mono.css'})
    // h('link', {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto+Mono'})
  ])

  const scripts = h('div#scripts', [
    h('script', {src: 'js/app.js'}),
    h('script', {src: 'http://' + ('localhost').split(':')[0] + ':35729/livereload.js?snipver=1'})
  ])

  const html = h('html', [
    head,
    h('body', [
      value.rendered,
      scripts
    ])
  ])

  app.get(value.route, (req, res) => {
    // res.send(hToString(html))
    res.send(hToString(html))
  })
})

// static assets
app.get('/css/:fileName', (req, res) => {
  res.sendFile('./static/css/' + req.params.fileName, {root: __dirname})
})

app.get('/js/app.js', (req, res) => {
  res.sendFile('./static/js/app.js', {root: __dirname})
})

app.get('/img/:fileName', (req, res) => {
  res.sendFile('./static/img/' + req.params.fileName, {root: __dirname})
})

app.get('/font/:fileName', (req, res) => {
  res.sendFile('./static/font/' + req.params.fileName, {root: __dirname})
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})
