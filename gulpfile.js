var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
var watch = require('gulp-watch');

gulp.task('default', ['test', 'lint', 'watch'], function() {});

gulp.task('test', function() {
	return gulp.src(['test/*.js', '*.js'])
								.pipe(mocha({reporter: 'spec'}));
});

gulp.task('lint', function() {
	return gulp.src(['test/*.js', '*.js'])
								.pipe(jshint())
								.pipe(jshint.reporter('default'));
});

gulp.task('watch', function() {
	console.log('watching this son!');
	//gulp.watch(['*.js', 'test/*.js'], ['test', 'lint']);
	gulp.watch(['*.js', 'test/*.js'], function() {
		gulp.run('test', 'lint');
	});
});
