const     browserify = require('browserify');
const     vueify = require('vueify');
const     gulp = require('gulp');
const     babelify = require('babelify');
const     source = require('vinyl-source-stream');
const     rename = require('gulp-rename');
const     less = require('gulp-less');
const     cssmin = require('gulp-cssmin');



gulp.task('scripts', function () {
    return browserify('./app/scripts/App.js')
        .transform(babelify, { presets: ['es2015'], plugins: ["transform-runtime"] })
        .transform(vueify)
        .bundle()
        .pipe(source('app.js'))
        .pipe(rename('app.js'))
        .pipe(gulp.dest('./dist/js'));

});


gulp.task('less', function(){
    gulp.src('./app/less/app.less') // path to your file
        .pipe(less().on('error', function(err) {
            console.log(err);
        }))
        .pipe(cssmin())
        .pipe(rename('app.css'))
        .pipe(gulp.dest('./dist/css'));
});