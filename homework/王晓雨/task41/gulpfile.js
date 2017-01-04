var gulp= require('gulp');

var concat= require('gulp-concat');
var uglify=require('gulp-uglify');
var imagemin=require('gulp-imagemin');
var htmlmin=require('gulp-htmlmin');
var cssmin=require('gulp-minify-css');
// var browserSync=require('browser-sync').creat();

gulp.task('minify-css',function(){
	gulp.src('src/css/*.css')
		.pipe(cssmin())
		.pipe(concat('merge.css'))
		.pipe(gulp.dest('dist/css'))
})
gulp.task('min-image',function(){
	gulp.src('src/img/*.jpg')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/img'))
})
gulp.task('mini-js',function(){
	gulp.src('src/js/*.js')
		.pipe(uglify())
		.pipe(concat('merge.js'))
		.pipe(gulp.dest('dist/js'))
})
gulp.task('mini-html',function(){
	gulp.src('src/*.html')
		.pipe(htmlmin({collapseWhitespace:true}))
		.pipe(gulp.dest('dist'))
})
gulp.task('default',['mini-html','mini-js','min-image','minify-css'])
// gulp.task('reload',function(){
// 	browserSync:init({
// 		server:{baseDir:'./'}
// 	});
// 	gulp.watch(['*.html'],['reload']);
// })
