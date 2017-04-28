var gulp = require('gulp'),
    useref = require('gulp-useref');
 
gulp.task('useref', function () {
    return gulp.src('src/*.html')
        .pipe(useref())
        .pipe(gulp.dest('dist'));
});