var gulp = require('gulp');
var react = require('gulp-react');
var webserver = require('gulp-webserver');
var plumber = require('gulp-plumber');

var source = require('vinyl-source-stream')
var browserify = require('browserify')
var babelify = require('babelify')


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



gulp.task('build-es6', function () {
  browserify('./src/app.js')
    .transform(babelify,{presets: ['es2015']})
    .bundle()
    .pipe(source('bundle-es6.js'))
    .pipe(gulp.dest('dist'));

});

gulp.task('default', ['build-es6']);
