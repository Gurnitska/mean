var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('connect', function(){
	connect.server({
    	root: 'src',
    	port: 5555,
    	livereload: true// стоит ли?
  	});
});

gulp.task('connect:dist', function(){
	connect.server({
    	root: 'dist',
    	port: 5555,
    	livereload: true// стоит ли?
  	});
});