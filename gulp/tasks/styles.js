var gulp = require('gulp'),
	postcss = require("gulp-postcss"),
	autoPrefixer = require("autoprefixer"),
	cssvars = require("postcss-simple-vars"),
	nested = require("postcss-nested"),
	mixins = require("postcss-mixins"),
	cssImport = require("postcss-import");

gulp.task("styles", function() {
	return gulp.src("./app/assets/styles/styles.css")
	// postcss is expecting an array. order of this stuff is important. 
	.pipe(postcss([cssImport, mixins, cssvars, nested, autoPrefixer]))
	.on("error", function(errorInfo) {
		console.log(errorInfo.toString());
		this.emit("end");
	})
	.pipe(gulp.dest("./app/temp/styles"));
});