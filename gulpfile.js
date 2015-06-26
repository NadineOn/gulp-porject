"use strict";

var gulp = require('gulp'),
    concatCss = require('gulp-concat-css'),
    prefixer = require('gulp-autoprefixer'),
    minifyCss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify');

gulp.task('default', function(){
    gulp.src('dev/css/*.css') // откуда берем исходные css-файлы для конкатанации
        .pipe(concatCss('style.css')) // как будет называться новый файл
        .pipe(prefixer('last 2 versions', '> 1%', 'ie 9'))
        .pipe(minifyCss()) // минифицируем файлы
        .pipe(rename('style.min.css')) // переименовываем файл после минификации
        .pipe(gulp.dest('assets/css/')) // куда сохранить новый файл
        .pipe(notify('Done!'))
});

gulp.task('watch', function(){
    gulp.watch('dev/css/*.css', ['default'])
})