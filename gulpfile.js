var gulp = require('gulp');
var sass = require('gulp-sass') ;
var notify = require("gulp-notify") ;
var bower = require('gulp-bower');

var paths = {
     sassSrcPath: './resources/sass',
     bowerDir: './bower_components' ,
    assetsPath: './public/assets'
};

gulp.task('bower', function() { 
    return bower()
         .pipe(gulp.dest(paths.bowerDir)) ;
});

 gulp.task('watch', function() {
     gulp.watch(paths.sassPath + '/**/*.scss', ['css']); 
});

gulp.task('css', function () {
    gulp.src(paths.sassSrcPath + '/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(paths.assetsPath + '/css'));
});

gulp.task('js', function() {
    gulp.src(paths.bowerDir + '/**/*.js')
        .pipe(gulp.dest(paths.assetsPath + '/js/vendor'));
    gulp.src(paths.assetsPath + '/js/**/*.js')
        .pipe(gulp.dest(paths.assetsPath + '/js'));
});

gulp.task('fonts', function() {
    gulp.src(paths.bowerDir + '/**/*.{ttf,woff,eof,svg}')
        .pipe(gulp.dest(paths.assetsPath + '/fonts'));
});

gulp.task('assets', ['css', 'js', 'fonts']);
  gulp.task('default', ['bower', 'assets']);
