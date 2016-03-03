/**
 * Created by cui on 2016/3/3.
 */
var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var minifyCSS = require('gulp-minify-css')
var rename = require('gulp-rename');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var clean = require('gulp-clean');
var livereload = require('gulp-livereload');
var webserver = require('gulp-webserver');

gulp.task('html', function(){
    return gulp.src('./*.html')
        .pipe(livereload());
});

gulp.task('css', function(){
    return sass('src/**/*.scss')
        .on('error', sass.logError)
        .pipe(gulp.dest('asset'))
        .pipe(minifyCSS( {keepBreaks:true} ))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('asset'))
        .pipe(livereload());
});

gulp.task('js', function(){
    return gulp.src('./src/js/*.js')
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'))
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('asset/js'))
        .pipe(livereload());
});

gulp.task('clean', function(){
    return gulp.src('./asset/*')
        .pipe(clean());
});

gulp.task('webserver', function(){
    gulp.src('./')
        .pipe(webserver({
            livereload: true,
            directoryListing: true,
            open: true
        }));
});

gulp.task('default', ['clean','css','js'],function(){

});

gulp.task('watch', ['webserver'], function(){
    livereload.listen();
    gulp.watch('./*.html', ['html']);
    gulp.watch('./src/**/*.scss', ['css']);
    gulp.watch('./src/**/*.js', ['js']);
});