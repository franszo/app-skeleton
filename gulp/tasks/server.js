var gulp      = require('gulp'),
    webserver = require('gulp-webserver'),
    opn       = require('opn');

var server = {
  host: 'localhost',
  port: '8001'
}

gulp.task('webserver', function() {
  gulp.src( './dist/' )
    .pipe(webserver({
      host:             server.host,
      port:             server.port,
      livereload:       true,
      directoryListing: false
    }));
});

gulp.task('openbrowser', function() {
  opn( 'http://' + server.host + ':' + server.port );
});