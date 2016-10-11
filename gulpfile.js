var gulp = require("gulp"),
	browserify = require("browserify"),
	source = require("vinyl-source-stream"),
	tsify = require("tsify"),
	browserifyOptions = {
		basedir: ".",
		debug: true,
		entries: ["src/app.ts"],
		cache: {},
		packageCache: {}
	};

gulp.task("html:copy", function () {
	return gulp.src("src/*.html")
		.pipe(gulp.dest("dest"))
});

gulp.task("ts:compile", function () {
	return browserify(browserifyOptions)
		.plugin(tsify)
		.bundle()
		.pipe(source("binary-tree.js"))
		.pipe(gulp.dest("dest"))
});

gulp.task("default", ["html:copy", "ts:compile"]);

gulp.task("watch", ["ts:compile"], function () {
	gulp.watch("src/**/*.ts", ["ts:compile"])
});