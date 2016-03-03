/**
 * Created by cui on 2016/3/3.
 */
var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

gulp.task('sass', function(){
    return sass('src/**/*.scss')
        .on('error', sass.logError)
        .pipe(gulp.dest('asset'));
});

gulp.task('default', ['sass'],function(){
    console.log('gulp finished...');
});