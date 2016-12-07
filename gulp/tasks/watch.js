/* Notes:
   - gulp/tasks/browserify.js handles js recompiling with watchify
   - gulp/tasks/browserSync.js automatically reloads any files
     that change within the directory it's serving from
*/

var gulp = require('gulp'),
	watch = require('gulp-watch');

gulp.task('watch', function() {
	gulp.watch('./src/**/*.html', ['markup']);
    gulp.watch('./src/css/scss/**/*.scss', ['sass']);
    gulp.watch('./src/js/*.js', ['browserify']);
    gulp.watch('./src/images/**/*',{cwd:'./src'},['images']);
});