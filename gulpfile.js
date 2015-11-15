'use strict'

let gulp = require('gulp')
let eslint = require('gulp-eslint')

gulp.task('lint', () => {
  return gulp.src(['!public/**', '**/*.js', '!node_modules/**', '!dist/**', '!webpack.config.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
})
