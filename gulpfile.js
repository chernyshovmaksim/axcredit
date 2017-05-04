var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');

gulp.task('less', function(){
	return gulp.src('less/main.less')
	.pipe(less())
	.pipe(autoprefixer())
	.pipe(cleanCSS())
	.pipe(gulp.dest('css/'));
});
gulp.task('watch', function(){
	gulp.watch(['less/*.less'],['less']);
});