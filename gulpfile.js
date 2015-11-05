'use strict'

let gulp = require('gulp')
let eslint = require('gulp-eslint')

gulp.task('lint', () => {
  return gulp.src(['**/*.js', '!node_modules/**', '!public/dist/**', '!webpack.config.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
})
