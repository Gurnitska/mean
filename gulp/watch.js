var gulp = require('gulp'),
	watch = require('gulp-watch'),
	batch = require('gulp-batch');

gulp.task('watch', function(){
    watch('./src/frontend/**/*.less', batch(function (events, done) {
        gulp.start('less', done);
    }));
    watch('./src/frontend/**/*.css', batch(function (events, done) {
        gulp.start('inject', done);
    }));

    watch('bower.json', batch(function (events, done) {
        gulp.start('bower', done);
    }));

    watch('./src/frontend/**/*.js', batch(function (events, done) {
        gulp.start('inject', done);
    }));
});