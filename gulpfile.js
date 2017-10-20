var fileinclude = require('gulp-file-include'),
gulp = require('gulp');

gulp.task('fileinclude', function() {
  gulp.src(['src/maintenance.html'])
    .pipe(fileinclude({
      prefix: '\\/\\*@@',
      suffix: '\\*\\/',
      basepath: '@file'
    }))
    .pipe(gulp.dest('build'));
});