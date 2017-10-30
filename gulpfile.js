var gulp = require('gulp');
var postcss = require('gulp-postcss');
var csswring = require('csswring');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    var processors = [
        csswring
    ];

    return gulp.src('./scss/style.scss')
               .pipe(sass())
               .pipe(postcss(processors))
               .pipe(gulp.dest('./css'));
});

gulp.task('watch:styles', function() {
    gulp.watch('**/*.scss',['styles']);
});