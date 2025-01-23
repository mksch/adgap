var gulp = require('gulp');
//var $    = require('gulp-load-plugins')();
var uglify = require('gulp-uglify');
var autoprefixer = require("gulp-autoprefixer");
const sass = require("gulp-sass")(require("sass"));
var sassPaths = [
  'bower_components/foundation-sites/scss',
  'bower_components/motion-ui/src'
];


gulp.task('sass', function() {
  return gulp
    .src("scss/app.scss")
    .pipe(
      sass({
        includePaths: sassPaths,
        //outputStyle: 'compressed' // if css compressed **file size**
        outputStyle: "expanded", // if css compressed **file size**
        silenceDeprecations: [
          "abs-percent",
          "bogus-combinators",
          "call-string",
          "color-4-api",
          "color-functions",
          "color-module-compat",
          "css-function-mixin",
          "duplicate-var-flags",
          "elseif",
          "feature-exists",
          "fs-importer-cwd",
          "function-units",
          "global-builtin",
          "import",
          "legacy-js-api",
          "mixed-decls",
          "moz-document",
          "new-global",
          "null-alpha",
          "relative-canonical",
          "slash-div",
          "strict-unary",
        ]
      }).on("error", sass.logError)
    )
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions", "ie >= 9"],
      })
    )
    .pipe(gulp.dest("css"));
});
gulp.task("editorsass", function () {
  return gulp
    .src("scss/ck-app.scss")
    .pipe(
      sass({
        includePaths: sassPaths,
        outputStyle: "compressed", // if css compressed **file size**
        //outputStyle: 'expanded' // if css compressed **file size**
        silenceDeprecations: [
          "abs-percent",
          "bogus-combinators",
          "call-string",
          "color-4-api",
          "color-functions",
          "color-module-compat",
          "css-function-mixin",
          "duplicate-var-flags",
          "elseif",
          "feature-exists",
          "fs-importer-cwd",
          "function-units",
          "global-builtin",
          "import",
          "legacy-js-api",
          "mixed-decls",
          "moz-document",
          "new-global",
          "null-alpha",
          "relative-canonical",
          "slash-div",
          "strict-unary",
        ],
      }).on("error", sass.logError)
    )
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions", "ie >= 9"],
      })
    )
    .pipe(gulp.dest("css"));
});

gulp.task('headersass', function() {
  return gulp
    .src("scss/headeronly.scss")
    .pipe(
      $.sass({
        includePaths: sassPaths,
        //outputStyle: 'compressed' // if css compressed **file size**
        outputStyle: "expanded", // if css compressed **file size**
        silenceDeprecations: [
          "abs-percent",
          "bogus-combinators",
          "call-string",
          "color-4-api",
          "color-functions",
          "color-module-compat",
          "css-function-mixin",
          "duplicate-var-flags",
          "elseif",
          "feature-exists",
          "fs-importer-cwd",
          "function-units",
          "global-builtin",
          "import",
          "legacy-js-api",
          "mixed-decls",
          "moz-document",
          "new-global",
          "null-alpha",
          "relative-canonical",
          "slash-div",
          "strict-unary",
        ],
      }).on("error", $.sass.logError)
    )
    .pipe(
      $.autoprefixer({
        browsers: ["last 2 versions", "ie >= 9"],
      })
    )
    .pipe(gulp.dest("css"));
});

gulp.task('skeletonsass', function() {
  return gulp
    .src("scss/hiaskeleton.scss")
    .pipe(
      sass({
        includePaths: sassPaths,
        //outputStyle: 'compressed' // if css compressed **file size**
        outputStyle: "expanded", // if css compressed **file size**
        silenceDeprecations: [
          "abs-percent",
          "bogus-combinators",
          "call-string",
          "color-4-api",
          "color-functions",
          "color-module-compat",
          "css-function-mixin",
          "duplicate-var-flags",
          "elseif",
          "feature-exists",
          "fs-importer-cwd",
          "function-units",
          "global-builtin",
          "import",
          "legacy-js-api",
          "mixed-decls",
          "moz-document",
          "new-global",
          "null-alpha",
          "relative-canonical",
          "slash-div",
          "strict-unary",
        ],
      }).on("error", sass.logError)
    )
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions", "ie >= 9"],
      })
    )
    .pipe(gulp.dest("css"));
});

// Gulp task to minify JavaScript files
gulp.task('scripts', function() {
  return gulp.src('lib/main.js')
    // Minify the file
    .pipe(uglify())
    // Output
    .pipe(gulp.dest('js/min'))
});

gulp.task('default', ['sass'], function() {
  gulp.watch(['scss/**/*.scss'], ['sass']);
  gulp.watch(['scss/**/*.scss'], ['editorsass']);
 //gulp.watch(['scss/**/*.scss'], ['skeletonsass']);
});
