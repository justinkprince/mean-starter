var gulp = require('gulp'),;
var sass = require('gulp-ruby-sass') ;
var notify = require("gulp-notify") ;
var bower = require('gulp-bower');

var config = {
     sassPath: './resources/sass',
     bowerDir: './bower_components' 
};

gulp.task('bower', function() { 
    return bower()
         .pipe(gulp.dest(config.bowerDir)) ;
});
