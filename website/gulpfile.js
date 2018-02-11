"use strict";
const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const uglify = require("gulp-uglify");

// Styles
gulp.task("styles", function(){
  return gulp.src("src/sass/*.scss")
  .pipe()
  .pipe(gulp.dest("build/css"));
});

// Images
gulp.task("images", function(){
return gulp.src()
.pipe()
.pipe(gulp.dest("build/images"));
});

// Scripts
gulp.task("scripts", function(){
  return gulp.src("src/js")
  .pipe(uglify)
  .pipe(gulp.dest("build/js"));
});

// Watch
gulp.watch("watch", function(){
  return gulp.watch();
});

gulp.task('default', []);