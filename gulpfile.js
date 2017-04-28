var gulp = require('gulp');
var gulpsync = require('gulp-sync')(gulp);
var requireDir = require('require-dir');
requireDir('./gulp');


gulp.task('default', [
	'compile',
	'watch'
]);


gulp.task('compile', gulpsync.sync([
		'less',
		'inject',
		'bower'
]));

gulp.task('dist', gulpsync.sync([
	'clean',
	'useref',
	'minify'
]));