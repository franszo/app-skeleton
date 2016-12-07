var source = require('vinyl-source-stream'),
	streamify = require('gulp-streamify'),
	browserify = require('browserify'),
	uglify = require('gulp-uglify'),
	gulpify = require('gulpify'),
	gulp = require('gulp');

gulp.task('browserify', function() {
  var bundleStream = browserify('./src/js/app.js').bundle();

  bundleStream
    .pipe(source('app.js'))
    .pipe(streamify(uglify()))
    .pipe(gulp.dest('./dist/js/'));
});
