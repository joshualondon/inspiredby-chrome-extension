var gulp = require('gulp'),
    browserSync = require("browser-sync").create(),
    reload = browserSync.reload,
    sass = require("gulp-sass"),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    notify = require('gulp-notify');

gulp.task('css', function() {
    return gulp.src(['scss/inspiredby-chrome-ext.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([
		autoprefixer({
			browsers: ['last 5 versions', 'iOS 8']
		})
	]))
    .pipe(gulp.dest('css/'))
    .pipe(notify({ message: '✓ CSS complete' }));
});

gulp.task('watch', function() {

    gulp.watch('scss/**/*', ['css'])

});

gulp.task('default', function() {
    gulp.start('css', 'watch')
});
