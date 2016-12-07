var changed  = require('gulp-changed'),
	gulp = require('gulp'),
	tinypng = require('gulp-tinypng-compress');

gulp.task('images', function () {
	var dest = './dist/images/';

    gulp.src('./dist/images/**/*.{png,jpg,jpeg}')
    	.pipe(changed('./dist/images/'))
        .pipe(tinypng({
            key: 'KtQpQekBSuPe164oHFgL4g8gtMmxRdjt',
            sigFile: './src/images/.tinypng-sigs',
            log: true
        }))
        .pipe(gulp.dest('./dist/images/'));
});