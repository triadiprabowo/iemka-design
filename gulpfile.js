/*
** Gulpfile.js - IEMKA Design 1.0
** Developed by Triadi Prabowo
** triadiprabowo@gmail.com
*/

var gulp = require('gulp'),
	cssmin = require('gulp-cssmin'),	
	imagemin = require('gulp-imagemin'),	
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	del = require('del'),
	runSequence = require('run-sequence');

/// GULP ENVIRONMENT ///
var GULP_ENV = 'development',
	SRC_PATH = './app-src';

if(GULP_ENV == 'development') {
	var nop = require('gulp-nop'),
		nodemon = require('gulp-nodemon'),
		livereload = require('gulp-livereload');

	var buildTasks = ['js', 'css', 'img', 'vendor', 'view', 'watch'];
}
else {
	var buildTasks = ['js', 'css', 'img', 'vendor', 'view'];
}

gulp.task('cleanBuild', function() {
	return del('./dist');
});

gulp.task('js', function() {
	gulp.src(SRC_PATH+'/js-scripts/*')
	.pipe(GULP_ENV == 'production'? uglify({mangle: false}) : nop())
	.pipe(gulp.dest('./dist/js/'));
});

gulp.task('css', function() {
	gulp.src(SRC_PATH+'/res/css/*')
	.pipe(cssmin())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('./dist/css/'));
});

gulp.task('img', function() {
	gulp.src(SRC_PATH+'/res/img/*')
	.pipe(GULP_ENV == 'production'? imagemin() : nop())
	.pipe(gulp.dest('./dist/img/'));
});

gulp.task('vendor', function() {
	gulp.src(SRC_PATH+'/vendor/*')
	.pipe(GULP_ENV == 'production'? uglify({mangle: false}) : nop())
	.pipe(gulp.dest('./dist/vendor/'));
});

gulp.task('view', function() {
	gulp.src(SRC_PATH+'/view/**/*')
	.pipe(gulp.dest('./dist/view/'));
});

gulp.task('watch', function() {	
	gulp.watch(SRC_PATH+'/js-scripts/*', ['js'])
	gulp.watch(SRC_PATH+'/res/css/*', ['css'])
	gulp.watch(SRC_PATH+'/res/img/*', ['img'])
	gulp.watch(SRC_PATH+'/vendor/*', ['vendor', 'js'])
	gulp.watch(SRC_PATH+'/view/**/**', ['view']);
});

gulp.task('initServer', function() {
	// Listen livereload
	livereload.listen();

	// Init Express Server
	nodemon({
		script: './engine.js',
		ext: 'jade'
	});
});


// Default Task
if(GULP_ENV == 'development') {
	gulp.task('default', function() {
		runSequence('cleanBuild', buildTasks, 'initServer', function() {
			console.log('++ files has been successfully streamed, initiating gulp watch...')
		});
	});
}
else {
	gulp.task('default', function() {
		runSequence('cleanBuild', buildTasks, function() {
			console.log('++ files has been successfully streamed, initiating gulp watch...')
		});
	});	
}