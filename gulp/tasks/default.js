var gulp = require('gulp');

gulp.task('default', ['markup', 'sass', 'browserify', 'images', 'watch', 'webserver', 'openbrowser']);
