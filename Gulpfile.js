var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var htmlmin = require('gulp-htmlmin');

gulp.task('min-css', function () {
    gulp.src('./source/css/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('min-html', function () {
    return gulp.src('./source/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('watcher',function(){
 gulp.watch('./source/css/style.scss',['min-css']);
 gulp.watch('./source/index.html',['min-html'])
});
