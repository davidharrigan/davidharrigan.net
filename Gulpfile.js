var gulp = require('gulp'),
    literalify = require('literalify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    gulpFilter = require('gulp-filter'),
    mainBowerFiles = require('main-bower-files'),
    $ = require('gulp-load-plugins')();

var src = {
  less: ['src/client/styles/**/*.less'],
  js: ['src/client/js/main.js', 
       'src/client/js/config/*.js',
       'src/client/js/timeline/*.js',
       'src/client/js/pages/*.js',
       'src/client/js/layout/*.js'],
  bower: ['bower.json', '.bowerrc'],
  partials: ['src/client/js/**/*.html']
}

var distDir = 'dist/'
var dist = {
  css: 'dh.css',
  js: 'dh.js',
  vendor: {
    js: 'vendor.js',
    css: 'vendor.css'
  }
}

/**
 * Bower build
 *  - concat *.js to vendor.js
 *  - concat *.css to vendor.css
 *  - rename fonts to fonts/*.*
 */
var vendor = function() {
  var jsFilter = gulpFilter('*.js');
  var cssFilter = gulpFilter('*.css');
  var fontFilter = gulpFilter(['*.eot', '*.woff', '*.svg', '*.ttf']);
  var files = mainBowerFiles();

  return gulp.src(files)
    // grab vendor js files from bower_components, minify and push
    .pipe(jsFilter)
    .pipe(gulp.dest(distDir + 'vendor/js/'))
    .pipe($.uglify())
    .pipe($.rename({
        suffix: ".min"
    }))
    .pipe($.concat(dist.vendor.js))
    .pipe(gulp.dest(distDir + 'vendor/'))
    .pipe(jsFilter.restore())

    // grab vendor css files from bower_components, minify and push
    .pipe(cssFilter)
    .pipe(gulp.dest(distDir + 'vendor/css/'))
    .pipe($.minifyCss())
    .pipe($.rename({
        suffix: ".min"
    }))
    .pipe($.concat(dist.vendor.css))
    .pipe(gulp.dest(distDir + 'vendor/'))
    .pipe(cssFilter.restore())

    // grab vendor font files from bower_components and push
    .pipe(fontFilter)
    .pipe(gulp.dest(distDir + 'fonts/'));
};
gulp.task('vendor', vendor);

/**
 * Scripts build
 */
var scripts = function() {
  return gulp.src(src.js)
    .pipe($.concat(dist.js))
    .pipe($.traceur())
    .pipe(gulp.dest(distDir));
};
gulp.task('scripts', scripts);

/**
 * HTML partials
 */
var partials = function() {
  return gulp.src(src.partials)
    .pipe(gulp.dest(distDir + 'partials'));
};
gulp.task('partials', partials);

/**
 * Styles build
 */
var styles = function() {
  return gulp.src(src.less)
    .pipe($.less())
    .pipe($.concat(dist.css))
    .pipe(gulp.dest(distDir));
};
gulp.task('styles', styles);

/**
 * Development Helpers
 **/
gulp.task('watch', function() {

  // Rebuild our scripts automatically.
  gulp.watch([
    './src/client/**/*.js',
  ], [
    'scripts'
  ]).on('change', scripts);

  gulp.watch([
    './src/client/**/*.html',
  ], [
    'partials'
  ]).on('change', partials);

  // Rebuild 3rd Party scripts automatically.
  gulp.watch([
    './src/client/vendor.js',
    './package.json',
    './bower.json'
  ], ['vendor']).on('change', vendor);

  // Rebuild styles automatically.
  gulp.watch([
    './src/client/styles/*.css',
    './src/client/styles/**/*.css',
    './src/client/styles/*.less',
    './src/client/styles/**/*.less',
  ], ['styles']).on('change', styles);
});

/**
 * Task Aliases
 **/
gulp.task('dev', ['scripts', 'partials', 'styles', 'vendor', 'watch']);
gulp.task('build', ['scripts', 'partials', 'vendor', 'styles']);
gulp.task('default', ['build']);
