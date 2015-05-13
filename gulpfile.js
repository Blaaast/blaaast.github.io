/* Load plugins */
var path = require('path'),
  gulp = require('gulp'),
  sass = require('gulp-sass'),
  watch = require('gulp-watch'),
  jshint = require('gulp-jshint'),
  notify = require('gulp-notify'),
  concat = require('gulp-concat'),
  // concat = require('gulp-concat-sourcemap'),
  plumber = require('gulp-plumber'),
  uncss = require('gulp-uncss'),
  zopfli = require('gulp-zopfli'),
  connect = require('gulp-connect'),
  minifyhtml = require('gulp-minify-html'),
  inlinesource = require('gulp-inline-source'),
  imagemin = require('gulp-imagemin'),
  uglify = require('gulp-uglify'),
  minifyCSS = require('gulp-minify-css'),
  pngquant = require('imagemin-pngquant'),
  imageResize = require('gulp-image-resize'),
  rename = require('gulp-rename'),
  changed = require('gulp-changed'),
  addsrc = require('gulp-add-src'),
  sourcemaps = require('gulp-sourcemaps'),
  transpile  = require('gulp-es6-module-transpiler'),
  babelify = require('babelify'),
  browserify = require('browserify'),
  source = require('vinyl-source-stream'),
  buffer = require('vinyl-buffer'),

  handlebars = require('gulp-compile-handlebars'),
  data = require('gulp-data');

gulp.task('connect', function() {
  return connect.server({
    port: 3000,
    livereload: true
  });
});

// JS tasks
gulp.task('js', function() {
  browserify({
    entries: './js/main.js',
    debug: true
  })
  .transform( babelify )
  .transform( babelify.configure({
    sourceMapRelative: path.join(process.pwd + '/js')
  }))
  .bundle()
  .pipe( source('all.js') )
  .pipe( buffer() )
  .pipe( addsrc.prepend('./js/vendor/*.js') )
  .pipe( concat('all.js') )
  .pipe( gulp.dest('./build/js/') )
  .pipe( connect.reload() ).on('error', function() {
    notify('JS task error!')
  })
});

gulp.task('uglify', function() {
  browserify({
    entries: './js/main.js'
  })
  .transform( babelify )
  .transform( babelify.configure({
    sourceMapRelative: path.join(process.pwd + '/js')
  }))
  .bundle()
  .pipe( source('all.js') )
  .pipe( buffer() )
  .pipe( uglify() )
  .pipe( addsrc.prepend('./js/vendor/*.js') )
  .pipe( concat('all.js') )
  .pipe( gulp.dest('./build/js/') )
  .pipe( connect.reload() ).on('error', function() {
    notify('JS task error!')
  })
});

// SCSS tasks
gulp.task('css', function() {
  return gulp.src('./scss/main.scss')
    .pipe( sass() )
    .pipe( gulp.dest('./build/css') )
    .pipe( connect.reload() )
});

gulp.task('uncss', function() {
  return gulp.src('./build/css/*.css')
    .pipe( uncss({
      html: ['index.html'],
      // To make Bootstrap work
      ignore: [
        /(#|\.)fancybox(\-[a-zA-Z]+)?/,
        // Bootstrap selectors added via JS
        /\w\.in/,
        '.modal-open',
        '.modal-backdrop.fade.in',
        '.modal-open .modal',
        '.fade',
        '.fade.in',
        '.collapse',
        '.collapse.in',
        '.collapsing',
        /(#|\.)navbar(\-[a-zA-Z]+)?/,
        /(#|\.)dropdown(\-[a-zA-Z]+)?/,
        /(#|\.)btn(\-[a-zA-Z]+)?/,
        /(#|\.)(open)/,
        // currently only in a IE conditional, so uncss doesn't see it
        '.close',
        '.alert-dismissible'
      ]
    }) )
    .pipe( plumber() )
    .pipe( gulp.dest('./build/css') )
});

gulp.task('minify-css', function() {
  return gulp.src('./build/css/*.css')
    .pipe( minifyCSS() )
    .pipe( plumber() )
    .pipe( gulp.dest('./build/css') )
});

// HTML reload on changes
// gulp.task('html', function() {
//   return gulp.src('./*.html')
//     .pipe( plumber() )
//     .pipe( connect.reload() )
// });

// Images tasks
gulp.task('img', ['img-default']);

// Responsive images
gulp.task('img-default', function() {
  return gulp.src('img/**')
    .pipe( plumber() )
    .pipe( gulp.dest('build/img') );
});

gulp.task('img-clients-95', function() {
  return gulp.src('img/clients/**')
    .pipe( plumber() )
    .pipe( changed('build/img/clients') )
    .pipe( imageResize({ width : 95 }) )
    .pipe( rename(function (path) { path.basename += '-95'; }) )
    .pipe( gulp.dest('build/img/clients') );
});

gulp.task('img-clients', function() {
  return gulp.src('img/clients/**')
    .pipe( plumber() )
    .pipe( changed('build/img/clients') )
    .pipe( imageResize({ width : 224 }) )
    .pipe( gulp.dest('build/img/clients') );
});


// HTML reload on changes
gulp.task('html', function() {
  // var manifest = gulp.src('./build/rev-manifest.json');
  var webpages = [
    'pages/index.hbs',
    'pages/case-studies/*.hbs'
  ];

  var partials = [
    './pages/partials',
    './pages/homepage',
    './pages/case-studies/components',
  ];

  return gulp.src(webpages)
    .pipe(data(function(file) {
      return require('./pages/data.json');
    }))
    .pipe(handlebars({}, {
      batch : partials
    }))
    // .pipe( rename('index.html'))
    .pipe(rename(function (path) {
      var s;
      if (path.basename !== 'index' && path.basename.indexOf('-index') > -1) {
        s = path.basename.substring(0, path.basename.indexOf('-index'))
        path.dirname += '/' + s;
        path.basename = 'index';
      }
      path.extname = '.html';
    }))
    .pipe( gulp.dest('./'))
    .pipe( plumber() )
    .pipe( connect.reload() );
});


/* Default task */
gulp.task('default', ['connect', 'watch'], function() {
  gulp.start('html', 'css', 'js');
});

/* Build static resources */
gulp.task('build-resources', ['css']);

/* Compress static resources */
gulp.task('compress-resources', ['uncss', 'uglify'], function() {
  gulp.start('minify-css');
});

/* Deploy task */
gulp.task('deploy', ['build-resources'], function() {
  gulp.start('compress-resources');
});

/* Watch task */
gulp.task('watch', function() {
  gulp.watch('./scss/**/*.scss', ['css']);
  gulp.watch('./js/**/*.js', ['js']);
  gulp.watch('./**/*.hbs', ['html']);
});
