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

// HTML
gulp.task("html", function(){
  return gulp.src("src/*.html")
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest("build"));
});

// CSS
gulp.task("css", function(){
  return gulp.src("src/sass/*.scss")
  .pipe(cleanCSS)
  .pipe(gulp.dest("build/css"));
});

// Images
gulp.task("images", function(){
return gulp.src()
.pipe()
.pipe(gulp.dest("build/images"));
});

// Scripts
gulp.task("js", function(){
  return gulp.src("src/js")
  .pipe(babel({presets: ["env"]}))
  .pipe(concat("all.js"))
  .pipe(uglify)
  .pipe(gulp.dest("build/js"));
});

// Watch
gulp.watch("watch", function(){
  return gulp.watch();
});

gulp.task('default', ["html", "css", "images", "js"]);