var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var plumber = require("gulp-plumber");
var uglify = require("gulp-uglify");
var browser = require("browser-sync");
var reload = browser.reload;
var cssmin = require("gulp-cssmin");

gulp.task("server",function(){
	browser({
		server: {
			baseDir: "./"
		}
	});
});

gulp.task("sass", function(){
  gulp.src("sass/**/*scss")
  .pipe(plumber())
  .pipe(sass())
  .pipe(autoprefixer())
  .pipe(cssmin())
  .pipe(gulp.dest("./css"))
});

gulp.task("js", function(){
	gulp.src(["js/**/*.js","!js/min/**/*.js"])
	.pipe(plumber())
	.pipe(uglify())
	.pipe(gulp.dest("./js/min"))
});


gulp.task("default", ['server'], function(){
  gulp.watch("sass/**/*.scss",["sass"]);
  gulp.watch(["js/**/*.js","!js/min/**/*.js"],["js"]);
  gulp.watch('*.html', reload);
  gulp.watch('css/**/*.css', reload);
  gulp.watch('js/**/*.js', reload);
})