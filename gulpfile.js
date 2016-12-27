var gulp = require('gulp');
var sass = require('gulp-sass');
const livereload = require('gulp-livereload');
const cleanCSS = require('gulp-clean-css');
const flatten = require('gulp-flatten');
const plumber = require('gulp-plumber');
const babel = require('gulp-babel');
const minify = require('gulp-minify');

const src  = 'src';
const dist = 'public';

gulp.task('es6', () => {
  return gulp.src('src/**/*.js')
  .pipe(plumber())
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(minify({
    ext: {
      src: '-debug.js',
      min: '.js'
    }
  }))
  .pipe(gulp.dest('public'));
});

gulp.task('sass', () => {
  return gulp.src(`${src}/**/*.scss`)
      .pipe(sass().on('error', sass.logError))
      .pipe(cleanCSS({ compatibility: 'ie8' }))
      .pipe(plumber())
      .pipe(flatten())
      .pipe(gulp.dest(`${dist}/css/`))
      .pipe(livereload());
});

gulp.task('watch', () => {
  livereload.listen();
  gulp.watch(`${src}/**/*.scss`, ['sass']);
});

gulp.task('default', [
  'es6',
  'watch'
]);
