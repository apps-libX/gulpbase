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
 */

'use strict';

var gulp     = require('gulp'),
    // Styles
    concat   = require('gulp-concat'),
    myth     = require('gulp-myth'),
    sass     = require('gulp-sass'),
    // Scripts
    uglify   = require('gulp-uglify'),
    jshint   = require('gulp-jshint'),
    // Images
    imagemin = require('gulp-imagemin');

// Styles /myth
gulp.task('myth', function () {
    return gulp.src('app/css/*.css')
        .pipe(concat('all.css'))
        .pipe(myth())
        .pipe(gulp.dest('dist'));
});

// Styles /sass
gulp.task('sass', function () {
    return gulp.src('app/css/*.scss')
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
gulp.task('images', function() {
    return gulp.src('app/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});

