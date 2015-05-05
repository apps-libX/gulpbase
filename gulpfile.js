/**
 * Created by anonymoussc on 4/28/15 4:35 AM.
 */

/**
 * npm install gulp gulp-concat gulp-myth --save-dev
 * npm install gulp-sass --save-dev
 *
 * npm install gulp-uglify gulp-jshint --save-dev
 *
 * npm install gulp-imagemin --save-dev
 *
 * npm install connect serve-static --save-dev
 *
 * npm install browser-sync --save-dev
 *
 * npm install browserify vinyl-source-stream --save-dev
 *
 * npm install gulp-plumber --save-dev
 */

'use strict';

var gulp        = require('gulp'),
    // Styles
    concat      = require('gulp-concat'),
    myth        = require('gulp-myth'),
    sass        = require('gulp-sass'),
    // Scripts
    uglify      = require('gulp-uglify'),
    jshint      = require('gulp-jshint'),
    // Images
    imagemin    = require('gulp-imagemin'),
    // Server
    connect     = require('connect'),
    serve       = require('serve-static'),
    // Browser sync
    browsersync = require('browser-sync'),
    // Browserify
    browserify  = require('browserify'),
    source      = require('vinyl-source-stream'),
    // Error handling /Gulp-plumber
    plumber = require('gulp-plumber'); // Added;

// Styles /myth
gulp.task('myth', function () {
    return gulp.src('app/css/*.css')
        .pipe(plumber())
        .pipe(concat('all.css'))
        .pipe(myth())
        .pipe(gulp.dest('dist'));
});

// Styles /sass
gulp.task('sass', function () {
    return gulp.src('app/css/*.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest('dist'));
});

// Scripts
gulp.task('scripts', function () {
    return gulp.src('app/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

// Images
gulp.task('images', function () {
    return gulp.src('app/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});

// Server
gulp.task('server', function () {
    return connect().use(serve(__dirname))
        .listen(8080)
        .on('listening', function () {
            console.log('Server Running: View at http://localhost:8080');
        });
});

// BrowserSync task
gulp.task('browsersync', function (cb) {
    return browsersync({
        server : {
            baseDir : './'
        }
    }, cb);
});

// Browserify Task
gulp.task('browserify', function () {
    return browserify('./app/js/app.js')
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('dist'));
});

// Watch Task
gulp.task('watch', function () {
    gulp.watch('app/css/*.css', gulp.series('styles', browsersync.reload));
    gulp.watch('app/js/*.js', gulp.series('scripts', browsersync.reload));
    gulp.watch('app/img/*', gulp.series('images', browsersync.reload));
});

// Watch /Parallel
gulp.watch('app/css/*.css', gulp.parallel('firstTask', 'secondTask'));

// Watch /Series
gulp.watch('app/js/*.js', gulp.series('thirdTask', 'fourthTask'));

// Default Task
gulp.task('default', gulp.parallel('styles', 'scripts', 'images', 'browsersync', 'watch'));
