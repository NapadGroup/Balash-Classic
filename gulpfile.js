const { watch } = require('gulp');
const gulp = require('gulp');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const rtlcss = require('gulp-rtlcss');
const cssnano = require('gulp-cssnano');
const rename = require("gulp-rename");

function exportcss() {
  return gulp.src('./src/sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(gulp.dest('./src/css'));
};

exports.exportcss = exportcss;
exports.watch = function () {
  gulp.watch('./src/sass/**/*.sass', exportcss);
};

function build() {
  return gulp.src('./src/css/GodUi.css')
    .pipe(cssnano())
    .pipe(rename(function (path) {
      path.extname = ".min.css";
    }))
    .pipe(gulp.dest('./build'))
};

function buildrtl() {
  return gulp.src('./src/css/GodUi.css')
    .pipe(rtlcss())
    .pipe(cssnano())
    .pipe(rename(function (path) {
      path.extname = ".rtl.min.css";
    }))
    .pipe(gulp.dest('./build'))
};

function buildjs() {
  return gulp.src('./src/js/*.js')
    .pipe(uglify())
    .pipe(rename(function (path) {
      path.extname = ".min.js";
    }))
    .pipe(gulp.dest('./build'))
};

exports.buildjs = buildjs;
exports.build = build;
exports.buildrtl = buildrtl;
exports.default = build;