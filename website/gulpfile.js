"use strict";
const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const uglify = require("gulp-uglify");
const imagemin = require("gulp-imagemin");
const concat = require("gulp-concat");
const cleanCSS = require("gulp-clean-css");
const htmlmin = require("gulp-htmlmin");
const babel = require("gulp-babel");
const babelPolyfill = require("babel-polyfill");

// File Paths
const htmlFiles = "src/**/*.html";
const cssFiles = "src/sass/**/*.scss";
const imagesFiles = "src/images/**/*";
const jsFiles = "src/js/**/*.js";

// HTML tasks (Minify)
gulp.task("html", function(){
  return gulp.src(htmlFiles)
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest("build"));
});

// CSS tasks (Sass, minify)
gulp.task("css", function(){
  return gulp.src(cssFiles)
  .pipe(sass().on('error', sass.logError))
  .pipe(cleanCSS())
  .pipe(gulp.dest("build/css"));
});

// Images tasks (Optimize)
gulp.task("imgs", function(){
  return gulp.src(imagesFiles)
  .pipe(imagemin())
  .pipe(gulp.dest("build/images"));
});

// JS tasks (Babel, concat, minify)
gulp.task("js", function(){
  return gulp.src(jsFiles)
  .pipe(babel({presets: ["env"]}))
  .pipe(concat("all.js"))
  .pipe(uglify())
  .pipe(gulp.dest("build/js"));
});

// Babel polyfill to run ES6 features
gulp.task('libs', function(){
  return gulp.src("node_modules/babel-polyfill/dist/polyfill.min.js")
  .pipe(gulp.dest('build/libs'));
});

// Watch tasks (Html, css, images, js)
gulp.task("watch", function(){
  gulp.watch(htmlFiles, ["html"]);
  gulp.watch(cssFiles, ["css"]);
  gulp.watch(imagesFiles, ["imgs"]);
  gulp.watch(jsFiles, ["js"]);
});

// Default Task
gulp.task('default', ["html", "css", "imgs", "js", "libs", "watch"]);