const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

const paths = {
  scss: {
    src: 'assets/**.scss',
    dest: 'assets/',
  },
};

function compileSCSS() {
  return gulp.src(paths.scss.src).pipe(sass().on('error', sass.logError)).pipe(gulp.dest(paths.scss.dest));
}

function watchFiles() {
  gulp.watch(paths.scss.src, compileSCSS);
}

exports.default = gulp.series(compileSCSS, watchFiles);
