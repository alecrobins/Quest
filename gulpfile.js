var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');


gulp.task('sass', function() {
  gulp.src('public/stylesheets/styles.sass')
    .pipe(plumber())
    .pipe(sass({indentedSyntax: true}))
    .pipe(gulp.dest('public/stylesheets'));
});

gulp.task('watch', function() {
  gulp.watch('public/stylesheets/*.sass', ['sass']);
});

gulp.task('default', ['sass', 'watch']);
