/**
 * Compile .scss source to .css
 */

var gulp = require('gulp');
var sass = require('gulp-sass');
var stripCssComments = require('gulp-strip-css-comments');

gulp.task('default', async function () {
    gulp.src('./scss/*.scss')
        .pipe(sass({outputStyle: 'expanded', follow: true}).on('error', sass.logError))
        .pipe(stripCssComments())
        .pipe(gulp.dest('./css/'));
});

gulp.task('watch', function () {
    gulp.watch('scss/**/*.scss', {}, gulp.series('default'));
});
