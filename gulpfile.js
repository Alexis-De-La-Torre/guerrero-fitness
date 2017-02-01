var gulp        = require('gulp');

var browserify  = require('browserify');
var babelify    = require('babelify');
var source      = require('vinyl-source-stream');
var buffer      = require('vinyl-buffer');
var uglify      = require('gulp-uglify');
var sourcemaps  = require('gulp-sourcemaps');
var livereload  = require('gulp-livereload');

let express = require('express');
let app = express();

gulp.task('build', function () {
    // app.js is your main JS file with all your module inclusions
    return browserify({entries: './src/js/app.js', debug: true})
        .transform("babelify", { presets: ["es2015"] })
        .bundle()
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./dist/js'))
        .pipe(livereload());
});

gulp.task('watch', ['build'], function () {
    livereload.listen();
    gulp.watch('./src/js/*.js', ['build']);
});

gulp.task('server', () => {
  app.use(express.static('dist'));
  app.listen(3000, () => console.log('app listening on port 3000'));
});

gulp.task('inject', () => {
  gulp.src('./src/inject/**/*')
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['server','inject', 'watch']);
