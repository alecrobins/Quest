var gulp = require('gulp');
var compass = require('gulp-compass');
var minifyCSS = require('gulp-minify-css');

// compass
gulp.task('compass', function() {
    gulp.src('./public/sass/**/*.sass')
        .pipe(compass({
            config_file: './public/config.rb',
            sass: './public/sass',
            css: './public/stylesheets',
        }))
        .on('error', function(err) {
            console.log(err)
        })
        // .pipe(minifyCSS())
        .pipe(gulp.dest('./public/stylesheets/'));
});

// watch
gulp.task('watch', function () {
    gulp.watch(['./public/sass/**/*.sass'], ['compass']);
});

gulp.task('default', ['compass', 'watch']);
