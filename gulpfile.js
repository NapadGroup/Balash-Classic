const { watch } = require('gulp');
const gulp = require('gulp');
const ignore = require('gulp-ignore');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const rename = require("gulp-rename");

function exportcss() {
  return gulp.src('./src/sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css'));
};

exports.exportcss = exportcss;
exports.watch = function () {
  gulp.watch('./src/sass/**/*.sass', exportcss);
};

buildfilter = ['form/radiobtn.css', 'form/input-box.css', 'form/text.css', 'form/textarea.css',
               'form/toggle.css', 'form/checkbox.css', 'core/base.css', 'core/typography.css', 
               'utilities/basic.css', 'utilities/display.css', 'utilities/div.css', 
               'utilities/position.css', 'utilities/size.css', 'utilities/text.css'];

function build() {

  return gulp.src('./src/css/**/*.css')
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(ignore.exclude(buildfilter))
    .pipe(cssnano())
    .pipe(rename(function (path) {
      path.extname = ".min.css";
    }))
    .pipe(gulp.dest('./build'))
};

function buildjs() {
  return gulp.src('./src/js/*.js')
    .pipe(uglify())
    .pipe(rename(function (path) {
      path.extname = ".min.js";
    }))
    .pipe(gulp.dest('./build/js'))
};

exports.buildjs = buildjs;
exports.build = build;
exports.default = build;