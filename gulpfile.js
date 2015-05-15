/* Load plugins */
var path = require('path'),
  gulp = require('gulp'),
  sass = require('gulp-sass'),
  watch = require('gulp-watch'),
  jshint = require('gulp-jshint'),
  notify = require('gulp-notify'),
  concat = require('gulp-concat'),
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
  clean = require('gulp-clean'),

  awspublish = require('gulp-awspublish'),
  parallelize = require('concurrent-transform'),

  handlebars = require('gulp-compile-handlebars'),
  data = require('gulp-data'),
  rev = require('gulp-rev'),
  revReplace = require('gulp-rev-replace'),

  git = require('gulp-git'),
  bump = require('gulp-bump'),
  filter = require('gulp-filter'),
  tag_version = require('gulp-tag-version');

function inc(importance) {
  // get all the files to bump version in
  return gulp.src(['./package.json', './bower.json'])
    // bump the version number in those files
    .pipe(bump({ type: importance }))
    // save it back to filesystem
    .pipe(gulp.dest('./'))
    // commit the changed version number
    .pipe(git.commit('bumps package version'))

    // read only one file to get the version number
    .pipe(filter('package.json'))
    // **tag it in the repository**
    .pipe(tag_version());
}

// All the html pages
var htmlPages = [
  './index.html',
  './case-studies/**/*',
  './case-studies-1/**/*',
  './case-studies-2/**/*'
];

var cloudfrontOrigin = 'd2u6q8s5aws5dl.cloudfront.net';

gulp.task('connect', function() {
  return connect.server({
    port: 3000,
    livereload: true
  });
});

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
  .pipe( gulp.dest('./build/js') )
  .pipe( connect.reload() );
});

gulp.task('uglify', function() {
  var manifest = gulp.src('./build/rev-manifest.json');

  return browserify({
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
  .pipe( rev() )
  .pipe( gulp.dest('./build/js') )
  .pipe( revReplace({ manifest: manifest }) )
  .pipe( gulp.dest('./build/js') )
  .pipe( rev.manifest({
    path: 'build/rev-manifest.json',
    merge: true,
    base: process.cwd() + '/build'
  }))
  .pipe( gulp.dest('./build') );
});


gulp.task('css', function() {
  return gulp.src('./scss/main.scss')
    .pipe( sourcemaps.init())
    .pipe( sass({
      errLogToConsole: true
    }) )
    .pipe( sourcemaps.write() )
    .pipe( gulp.dest('./build/css') )
    .pipe( connect.reload() )
});

gulp.task('minify-css', function() {
  var manifest = gulp.src('./build/rev-manifest.json');

  return gulp.src('./scss/main.scss')
    .pipe( sass() )
    .pipe( uncss({
      html: htmlPages,
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
        '.alert-dismissible',

        '.landing-title.show-input .landing-title__edit',
        '.landing-title.show-input .landing-title__input'
      ]
    }))
    .pipe( minifyCSS() )
    .pipe( rev() )
    .pipe( gulp.dest('./build/css') )
    .pipe( revReplace({ manifest: manifest }) )
    .pipe( gulp.dest('./build/css') )
    .pipe( rev.manifest({
      path: 'build/rev-manifest.json',
      merge: true,
      base: process.cwd() + '/build'
    }))
    .pipe( gulp.dest('./build') )
    .pipe( plumber() )
});

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

gulp.task('img-deploy', function() {
  return gulp.src('img/**')
    .pipe( plumber() )
    .pipe( rev() )
    .pipe( gulp.dest('./build/img') )
    .pipe( rev.manifest({
      path: 'build/rev-manifest.json',
      merge: true,
      base: process.cwd() + '/build'
    }) )
    .pipe( gulp.dest('./build') );
});


// HTML reload on changes
gulp.task('html', function() {
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

gulp.task('html-deploy', ['compress-resources'], function() {
  var manifest = gulp.src('./build/rev-manifest.json');

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
    .pipe( revReplace({ manifest: manifest }) )
    .pipe( gulp.dest('./'));
});

// Deploy to S3
gulp.task('publish', ['patch', 'clean'], function() {

  // create a new publisher using S3 options
  var publisher = awspublish.create({
    params: {
      Bucket: 'www.blaaast.co'
    },
    accessKeyId: process.env.AWS_STATIC_HOST_KEY,
    secretAccessKey: process.env.AWS_STATIC_HOST_SECRET,
    region: 'eu-central-1'
  });

  // define custom header s
  var headers = {
    'Content-Type': 'text/html'
  }; // No cache for index.html
  var headersStatics = {
    'Cache-Control': 'max-age=315360000, no-transform, public'
  };

  htmlPages.forEach(function (page) {
    return gulp.src(page)
      .pipe(rename(function (path) {
        if (page.split('/')[1] !== 'index.html') {
          path.dirname = page.split('/')[1];
        }
      }))
      .pipe(awspublish.gzip({ ext: '.gz' }))
      .pipe(publisher.publish(headers, {
        // Always update index.html
        force: true
      }))
      .pipe(awspublish.reporter());
  });

  gulp.src('./fonts/**')
    .pipe(rename(function (path) {
      path.dirname = 'fonts/' + path.dirname;
    }))
    .pipe(awspublish.gzip())
    .pipe(parallelize(publisher.publish(headersStatics), 50))
    .pipe(publisher.cache())
    .pipe(awspublish.reporter());

  // Favicon upload
  gulp.src(['./*.png', './manifest.json', './*.ico'])
    .pipe(awspublish.gzip())
    .pipe(parallelize(publisher.publish(headersStatics), 50))
    .pipe(publisher.cache())
    .pipe(awspublish.reporter());

  return gulp.src('./build/**')
    .pipe(rename(function (path) {
      path.dirname = 'build/' + path.dirname;
    }))
    .pipe(awspublish.gzip())
    .pipe(parallelize(publisher.publish(headersStatics), 50))
    .pipe(publisher.cache())
    .pipe(awspublish.reporter());
});

// Deploy to beta
gulp.task('publish-beta', ['clean'], function() {

  // create a new publisher using S3 options
  var publisher = awspublish.create({
    params: {
      Bucket: 'blaaast-beta'
    },
    accessKeyId: process.env.AWS_STATIC_HOST_KEY,
    secretAccessKey: process.env.AWS_STATIC_HOST_SECRET,
    region: 'eu-central-1'
  });

  // define custom headers
  var headers = {};
  var headersStatics = {
    'Cache-Control': 'max-age=315360000, no-transform, public'
  };

  gulp.src(htmlPages)
    .pipe(awspublish.gzip({ ext: '.gz' }))
    .pipe(publisher.publish(headers, {
      // Always update index.html
      force: true
    }))
    .pipe(awspublish.reporter());

  gulp.src('./fonts/**')
    .pipe(rename(function (path) {
      path.dirname = 'fonts/' + path.dirname;
    }))
    .pipe(awspublish.gzip())
    .pipe(parallelize(publisher.publish(headersStatics), 50))
    .pipe(publisher.cache())
    .pipe(awspublish.reporter());

  return gulp.src('./build/**')
    .pipe(rename(function (path) {
      path.dirname = 'build/' + path.dirname;
    }))
    .pipe(awspublish.gzip())
    .pipe(parallelize(publisher.publish(headersStatics), 50))
    .pipe(publisher.cache())
    .pipe(awspublish.reporter());
});

/* Default task */
gulp.task('default', ['connect', 'watch'], function() {
  gulp.start('html', 'css', 'js', 'img');
});

/* Compress static resources */
gulp.task('compress-images', ['img-deploy']);
gulp.task('compress-resources', ['uglify', 'minify-css']);

/* Deploy task */
gulp.task('deploy', ['compress-images'], function() {
  gulp.start('html-deploy');
});

/* Clean before publish */
gulp.task('clean', function () {
  return gulp.src('./build', {read: false})
    .pipe(clean());
});

/* Watch task */
gulp.task('watch', function() {
  gulp.watch('./scss/**/*.scss', ['css']);
  gulp.watch('./js/**/*.js', ['js']);
  gulp.watch('./**/*.hbs', ['html']);
});

gulp.task('patch', function() { return inc('patch'); })
gulp.task('feature', function() { return inc('minor'); })
gulp.task('release', function() { return inc('major'); })
