var gulp = require('gulp');
var postcss = require('gulp-postcss');
var simpleVars = require('postcss-simple-vars');
var cssNext = require('cssnext');

gulp.task('css', function() {
  return gulp.src('./style.css')
        .pipe( postcss([ simpleVars(), cssNext() ]) )
        .pipe( gulp.dest('build') );
});