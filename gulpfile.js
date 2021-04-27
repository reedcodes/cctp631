'use strict';

// Define libraries.
const gulp   = require( 'gulp' ),
      babel  = require( 'gulp-babel' ),
      concat = require( 'gulp-concat' ),
      html   = require( 'gulp-html-partial' ),
      sass   = require( 'gulp-dart-sass' );

// Define HTML source and distribution directories.
const htmlSrc  = './src/html/**/*.html';
const htmlDist = './';

// Define CSS source and distribution directories.
const cssSrc  = './src/sass/screen.scss';
const cssDist = './dist/css';

// Define JS source and distribution directories.
const jsSrc = [
  './node_modules/jquery/dist/jquery.min.js',
  './src/js/**/*.js'
];
const jsDist = './dist/js';



// reveal.js slideshow functionality.
// Define CSS and JS source and distribution directories.
const revealCssSrc  = [
  './node_modules/reveal.js/css/reveal.scss',
  './src/sass/reveal.scss'
];
const revealCssDist = './dist/css';

const revealJsSrc = './node_modules/reveal.js/dist/reveal.js';
const revealJsDist = './dist/js';



// Task to compile HTML files.
gulp.task( 'html', function () {
  return gulp.src( htmlSrc )
    .pipe( html( {
      basePath: './src/partials/',
      tagName: 'partial',
      variablePrefix: '@@'
    } ) )
    .pipe( gulp.dest( htmlDist ) );
});

// Task to compile CSS files.
gulp.task( 'sass', function() {
  return gulp.src( cssSrc )
    .pipe( sass( { outputStyle: 'compressed' } ) )
    .pipe( gulp.dest( cssDist ) );
});

// Task to compile JS files.
gulp.task( 'js', function() {
  return gulp.src( jsSrc )
  .pipe( babel( { presets: [
    [
      'minify', { builtIns: false }
    ]
  ] } ) )
  .pipe( concat( 'scripts.min.js' ) )
  .pipe( gulp.dest( jsDist ) );
});



// Task to compile reveal.js files.
gulp.task( 'reveal', function() {
  const revealCss = gulp.src( revealCssSrc )
    .pipe( sass( { outputStyle: 'compressed' } ) )
    .pipe( concat( 'reveal.min.css' ) )
    .pipe( gulp.dest( revealCssDist ) );

  const revealJs = gulp.src( revealJsSrc )
    .pipe( babel( { presets: [
      [
        'minify', { builtIns: false }
      ]
    ] } ) )
    .pipe( concat( 'reveal.min.js' ) )
    .pipe( gulp.dest( revealJsDist ) );

  return revealCss, revealJs;
});



// Gulp tasks.
gulp.task( 'default', gulp.series( 'html', 'sass', 'js', 'reveal' ) );
