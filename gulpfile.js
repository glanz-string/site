var gulp = require('gulp');
var react = require('gulp-react');
var webserver = require('gulp-webserver');
var plumber = require('gulp-plumber');

gulp.task('react', function () {
  return gulp.src('./jsx-src/**/*.*')
    .pipe(plumber())
    .pipe(react())
    .pipe(gulp.dest('./js'))

})

gulp.task('server', function () {
  return gulp.src('./')
    .pipe(webserver({
    }));
});

gulp.task('watch', function () {
  gulp.watch('./jsx-src/**/*.*', ['react']);
});

gulp.task('default', ['watch','server']);
