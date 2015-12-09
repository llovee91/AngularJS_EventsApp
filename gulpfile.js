// npm install -g gulp
// npm install --save-dev gulp gulp-concat gulp-nodemon gulp-uglify gulp-uglifycss
// npm install --save-dev browser-sync
var     gulp = require('gulp'),
      concat = require('gulp-concat'),
      uglify = require('gulp-uglify'),
   uglifycss = require('gulp-uglifycss'),
     nodemon = require('gulp-nodemon'),
 browserSync = require('browser-sync')

gulp.task('minify-css', function() {
  gulp.src('public-dev/css/*.css')
    .pipe(concat('application.min.css'))
    .pipe(uglifycss())
    .pipe(gulp.dest('public/css'))
    .pipe(browserSync.stream())
})

gulp.task('minify-js', function(){
  gulp.src('public-dev/js/*.js')
    .pipe(concat('application.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public/js'))
    // .pipe(browserSync.stream())
})

// run nodemon before we execute this task
gulp.task('browser-sync', ['nodemon'], function(){
  browserSync.init(null, {
    // create a proxy out of this
    proxy: 'http://localhost:3000',
    // ** any directory
    // *.* any file with any extension
    files: ['public-dev/**/*.*'],
    browser: 'google chrome',
    // make it available to us at port 7000 (this version of app is going to be using browser sync)
    port: 7000
  })
})

gulp.task('nodemon', function(){
  nodemon({
    ext: 'js html css',
    env: {'NODE_ENV': 'development'}
  })
})

gulp.watch('public-dev/css/*.css', ['minify-css'])
gulp.watch('public-dev/js/*.js', ['minify-js'])

// what do you wanna run by default
gulp.task('default', ['browser-sync'], function(){
  console.log('Default task running!')
})
