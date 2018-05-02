const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

// Создаем таск для сборки js файлов

gulp.task('js', function () {
  return gulp.src('app/js/*.js')
    .pipe(concat('index.js'))
    .pipe(
      babel({
        presets: ["env"]
      })
    )
    .pipe(uglify('all.js'))
    .pipe(gulp.dest('./dist'))
});
/*
gulp.task('js', function () {
    gulp.src('app/js/*.js')
    .pipe(babel({
          presets: ['env'],
        }))
    .pipe(concat('index.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist'))
});
*/