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
  "scripts" : ['dev/scripts/*.js'],
  "styles"  : ['dev/scss/**/*.scss'],
  "pages"  : ['dev/**/*.haml'],
  "images"  : ['dev/assets/**/*'],
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
// var gutil = require('gulp-util');
var svgSprite = require('gulp-svg-sprite');
var svg2png = require('gulp-svg2png');
var size = require('gulp-size');
var stylelint = require('gulp-stylelint');
var sourcemaps   = require('gulp-sourcemaps');


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

  gulp.watch(['*.html', 'styles/**/*.css', 'scripts/**/*.js'], {cwd: 'prod'}, reload);
});




// Get and render all .haml files recursively
gulp.task('haml', function () {
  gulp.src('./dev/haml/**/*.haml')
    .pipe(haml())
    .pipe(gulp.dest('./prod'));
});

//PostCSS process and SASS compilation
gulp.task('css', function () {
    var postcss      = require('gulp-postcss');
    var autoprefixer = require('autoprefixer');

  return gulp.src( ['dev/scss/**/*.scss'] )
    .pipe( sass({
        errLogToConsole: true
    }) )
    // PostCSS tasks after Sass compilation
    .pipe(sourcemaps.init())
    .pipe( postcss([
        autoprefixer({ browsers: ['> 5%', 'last 2 versions', 'ie > 9'] }) // Autoprefixes CSS properties for various browsers
        // any other PostCSS plugins to be run can be added in here
    ]) )
    .pipe(sourcemaps.write('.'))
    .pipe( gulp.dest(paths.css.dest) );
});



//SVG Sprite and PNG fallback creation
gulp.task('svgSprite', function () {
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
          // sprite: paths.sprite.svg,
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
  // return gulp.src(basePaths.dest + paths.sprite.svg)
		.pipe(svg2png())
		.pipe(size({
			showFiles: true
		}))
		.pipe(gulp.dest(paths.images.dest));
});

gulp.task('sprite', ['pngSprite']);


gulp.task('watch', ['browser-sync'] ,function() {
  gulp.watch(globs.scripts,['scripts']);
  gulp.watch(globs.styles,['css']);
  gulp.watch(globs.pages,['haml']);
	gulp.watch(paths.sprite.src, ['sprite']).on('change', function(evt) {
		changeEvent(evt);
	});
	gulp.watch('./prod/**/*.*').on('change', browserSync.reload);
});



gulp.task('default', ['haml', 'sprite', 'css']);


// , 'sprite', 'css'
