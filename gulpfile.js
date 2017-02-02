var gulp = require('gulp')

var browserify = require('browserify')
var babelify = require('babelify')
var source = require('vinyl-source-stream')
var buffer = require('vinyl-buffer')
var uglify = require('gulp-uglify')
var sourcemaps = require('gulp-sourcemaps')
var livereload = require('gulp-livereload')

const spawn = require('child_process').spawn
let node

gulp.task('build', function () {
  // client.js is your main JS file with all your module inclusions
  return browserify({entries: './src/js/client.js', debug: true})
      .transform('babelify', { presets: ['es2015'] })
      .bundle()
      .pipe(source('app.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init())
      .pipe(uglify())
      .pipe(sourcemaps.write('./maps'))
      .pipe(gulp.dest('./src/inject/js'))
      .pipe(livereload())
})

gulp.task('server', () => {
  if (node) node.kill()
  node = spawn('node', ['./src/js/server.js'], {stdio: 'inherit'})
  node.on('close', (code) => {
    if (code === 8) {
      gulp.log('error detected, waiting for changes...')
    }
  })
})

gulp.task('inject', () => {
  gulp.src('./src/inject/**/*')
    .pipe(gulp.dest('./dist'))
})

gulp.task('default', ['server', 'inject', 'watch'])

gulp.task('watch', ['build'], function () {
  livereload.listen()
  gulp.watch('./src/js/*.js', ['server', 'build'])
})

process.on('exit', () => {
  if (node) node.kill()
})
