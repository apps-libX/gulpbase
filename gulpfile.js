/**
 * Created by anonymoussc on 4/28/15 4:35 AM.
 */

/**
 * npm install gulp gulp-concat gulp-myth --save-dev
 * npm install gulp-sass --save-dev
 */

'use strict';

var gulp   = require('gulp'),
    concat = require('gulp-concat'),
    myth   = require('gulp-myth'),
    sass   = require('gulp-sass');

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