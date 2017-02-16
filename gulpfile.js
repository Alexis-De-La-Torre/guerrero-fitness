const gulp = require('gulp')

const browserify = require('browserify')
const watchify = require('watchify')
const babelify = require('babelify')
const source = require('vinyl-source-stream')
const buffer = require('vinyl-buffer')
// const uglify = require('gulp-uglify')
// const sourcemaps = require('gulp-sourcemaps')
const livereload = require('gulp-livereload')
const _ = require('lodash')

const spawn = require('child_process').spawn
let node

const opts = _.assign({}, watchify.args, {entries: './src/client.js'})
const b = watchify(browserify(opts))

gulp.task('build', function () {
  // client.js is your main JS file with all your module inclusions
  return b
      .transform('babelify', { presets: ['es2015'] })
      .bundle()
      .pipe(source('app.js'))
      .pipe(buffer())
      // .pipe(sourcemaps.init({loadMaps: true}))
      // .pipe(uglify())
      // .pipe(sourcemaps.write('./maps'))
      .pipe(gulp.dest('./src/static/js'))
      .pipe(livereload())
})

gulp.task('server', () => {
  if (node) node.kill()
  node = spawn('node', ['./src/server.js'], {stdio: 'inherit'})
  node.on('close', (code) => {
    if (code === 8) {
      gulp.log('error detected, waiting for changes...')
    }
  })
})

gulp.task('default', ['server', 'watch'])

gulp.task('watch', ['build'], function () {
  livereload.listen()
  gulp.watch(['./src/**/*.js', '!./src/static/js/*.js'], ['server', 'build'])
})

process.on('exit', () => {
  if (node) node.kill()
})
