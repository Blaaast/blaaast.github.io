var path = require('path');
var gulp = require('gulp');
var buildPipeline = require('blaaast-build-pipeline');

/**
  Options for the build pipeline

*/
var options = {

  httpRoot: __dirname,

  htmlPages: [
    './index.html',
    './case-studies/**/*',
    './case-studies-1/**/*',
    './case-studies-2/**/*',
    './case-studies-3/**/*'
  ],

  cloudfrontOrigin: 'd2u6q8s5aws5dl.cloudfront.net',

  dataPath: path.join(__dirname, 'pages/data.json'),

  /**
    HBS only
  */
  webpages: [
    'pages/index.hbs',
    'pages/case-studies/*.hbs'
  ],
  partials: [
    './pages/partials',
    './pages/homepage',
    './pages/case-studies/components',
  ],

  uncssOpts: [
    '.landing-title.show-input .landing-title__edit',
    '.landing-title.show-input .landing-title__input'
  ],

  /**
    S3 options
  */
  bucketProd: 'www.blaaast.co',
  bucketBeta: 'blaaast-beta'

}


/**
  Start the pipeline

*/
buildPipeline(gulp, options);
