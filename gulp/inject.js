var gulp = require('gulp'),
	inject = require('gulp-inject');
	angularFilesort = require('gulp-angular-filesort');

gulp.task('inject', function(){
	var target = gulp.src('./src/**/*.html');
	var js = gulp.src(['./src/frontend/**/*.js', '!./src/backend/**/*.js', '!./src/app_old/**/*.js']).pipe(angularFilesort());
	var css = gulp.src(['./src/frontend/**/*.css'], {read: false});
	return target.pipe(inject(js, {relative: true}))
				.pipe(inject(css, {relative: true}))
    			.pipe(gulp.dest('src'));
});