const {src,dest,watch,series} = require('gulp');
const sass = require('gulp-sass')(require('sass'))

function buildStyle() {
  return src('./src/AppuiLib/**/*.scss')
  .pipe(sass())
  .pipe(dest('src/css'))
};

function watchTask() {
  watch(['./src/AppuiLib/**/*.scss'],buildStyle)
};

exports.default = series(buildStyle,watchTask);