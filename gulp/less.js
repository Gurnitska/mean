var gulp = require('gulp'),
	concat = require('gulp-concat'),
	less = require('gulp-less'),
	util = require('gulp-util');

gulp.task('less', function(){
		gulp.src('./src/frontend/asserts/styles/**/*.less')
		.pipe(less().on('error', util.log))
		.pipe(concat('site.css'))
		.pipe(gulp.dest('./src/frontend/asserts/styles/css'))
});