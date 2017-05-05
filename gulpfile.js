var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var csso = require('gulp-csso');
var imagemin = require('gulp-imagemin');

gulp.task('less', function(){
	return gulp.src('less/main.less')
	.pipe(less())
	.pipe(autoprefixer())
	.pipe(cleanCSS({compatibility: 'ie8'}))
	.pipe(gulp.dest('css/'));
});
gulp.task('watch', function(){
	gulp.watch(['less/*.less'],['less']);
});
gulp.task('image', function(){
	gulp.src('./img/')
	.pipe(imagemin())
	.pipe(gulp.dest('./dest'));
});