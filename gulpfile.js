var basePaths = {
  src: 'dev/',
  dest: 'prod/',
};
var paths = {
  images: {
    src: basePaths.src + 'assets/img/',
    dest: basePaths.dest + 'assets/img/'
  },
  sprite: {
    src: basePaths.src + 'assets/sprite/*',
    svg: basePaths.dest + 'assets/sprite.svg',
    css: '../../' + basePaths.src + 'scss/modules/_sprite.scss'
  },
  templates: {
    src: basePaths.src + 'tpl/'
  },
  haml: {
    src: basePaths.src,
    dest: basePaths.dest
  },
  scripts: {
    src: basePaths.src + 'scripts/',
    dest: basePaths.dest + 'scripts/'
  },
  css: {
    src: basePaths.src + 'scss/',
    dest: basePaths.dest + 'css/'
  }
};
var globs = {
  "scripts": ['dev/**/*.js'],
  "styles": ['dev/scss/**/*.scss'],
  "pages": ['dev/**/*.haml'],
  "images": ['dev/assets/**/*'],
  "vendor": ['dev/vendor/**/*'],
}

// BroswerSync
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

// Load Gulp
var gulp = require('gulp');



var watchify = require('watchify');
var uglify = require('gulp-uglify');
var postcss = require('gulp-postcss');
var sass = require('gulp-sass');
var haml = require('gulp-haml');
var gutil = require('gulp-util');
var svgSprite = require('gulp-svg-sprite');
var svg2png = require('gulp-svg2png');
var size = require('gulp-size');
var stylelint = require('gulp-stylelint');
var sourcemaps = require('gulp-sourcemaps');
var svgstore = require('gulp-svgstore');
var svgmin = require('gulp-svgmin');
var path = require('path');
var inject = require('gulp-inject');



gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "./prod"
    }
  });
});
gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: 'app'
    }
  });
});


// Get and render all .haml files recursively
gulp.task('haml', function() {
  gulp.src('./dev/haml/**/*.haml')
    .pipe(haml())
    .pipe(gulp.dest('./prod'));
});


//PostCSS process and SASS compilation
gulp.task('css', function() {
  var postcss = require('gulp-postcss');
  var autoprefixer = require('autoprefixer');

  return gulp.src(['dev/scss/**/*.scss'])
    .pipe(sass({
      errLogToConsole: true
    }))
    // PostCSS tasks after Sass compilation
    .pipe(sourcemaps.init())
    .pipe(postcss([
      autoprefixer({
        browsers: ['> 5%', 'last 2 versions', 'ie > 9']
      }) // Autoprefixes CSS properties for various browsers
      // any other PostCSS plugins to be run can be added in here
    ]))
    .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest(paths.css.dest));
});


//Copy scripts to appropriate folder
gulp.task('scripts', function() {
  gulp.src('./dev/scripts/*.js')
    .pipe(gulp.dest('./prod/scripts/'));
});


//Copy vendor packages to appropriate folder
gulp.task('vendor', function() {
  gulp.src('./dev/vendor/**/*.*')
    .pipe(gulp.dest('./prod/vendor/'));
});


// SVG sprite build with PNG fallback
gulp.task('svgSprite', function() {
  return gulp.src(paths.sprite.src)
    .pipe(svgSprite({
      shape: {
        spacing: {
          padding: 5
        }
      },
      mode: {
        css: {
          dest: "./",
          layout: "diagonal",
          sprite: "assets/img/sprite.svg",
          bust: false,
          render: {
            scss: {
              dest: "../dev/scss/modules/_sprite.scss",
              template: "dev/tpl/sprite-template.scss"
            }
          }
        }
      },
      variables: {
        mapname: "icons"
      }
    }))
    .pipe(gulp.dest(basePaths.dest));
});

gulp.task('pngSprite', ['svgSprite'], function() {
  return gulp.src(basePaths.dest + "assets/img/sprite.svg")
    .pipe(svg2png())
    .pipe(size({
      showFiles: true
    }))
    .pipe(gulp.dest(paths.images.dest));
});

gulp.task('sprite', ['pngSprite']);



// Watch task

gulp.task('watch', ['browser-sync'], function() {
  gulp.watch(globs.scripts, ['scripts']);
  gulp.watch(globs.styles, ['css']);
  gulp.watch(globs.pages, ['haml']);
  gulp.watch(globs.vendor, ['vendor']);
  gulp.watch(paths.sprite.src, ['sprite']);

  gulp.watch('./prod/**/*.*').on('change', browserSync.reload);
});



gulp.task('default', ['build', 'watch']);
gulp.task('build', ['haml', 'css', 'vendor', 'sprite', 'scripts']);
