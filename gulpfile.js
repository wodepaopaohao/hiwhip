var gulp = require("gulp");

var webserver = require("gulp-webserver");

var webpack = require("gulp-webpack")

var sass = require("gulp-sass")

var autoprefixer = require("gulp-autoprefixer")

var uglify = require("gulp-uglify");

var rename = require("gulp-rename")

gulp.task("webserver", function () {

    gulp.src("./")
        .pipe(webserver({
            livereload: true,
            host: 'localhost',
            port: 1234,
            directoryListing: true
        }))

})
gulp.task("sass", function () {
    gulp.src("./src/styles/app.scss")
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./build/styles'))
})
gulp.task("watch", function () {
    gulp.watch("./src/styles/*.scss", ["sass"])
})

gulp.task("default", ["sass", "watch", "webserver"], function () {
    console.log("server is running...")
})