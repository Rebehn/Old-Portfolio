var gulp = require('gulp');
var sass = require('gulp-sass');
const livereload = require('gulp-livereload');

const src  = 'src';
const dist = 'public';

gulp.task('sass', () => {
  return gulp.src(`${src}/**/*.scss`)
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest(`${dist}`))
      .pipe(livereload());
});

gulp.task('watch', () => {
  livereload.listen();
  gulp.watch(`${src}/**/*.scss`, ['sass']);
});

gulp.task('default', [
  // 'es6',
  'watch'
]);
