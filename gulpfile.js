const { src, dest, series, parallel, watch } = require("gulp");
const ejs = require("gulp-ejs");
const rename = require("gulp-rename");
const plumber = require("gulp-plumber");//エラーでビルドを中止させない

function ejs(done) {
  src(["src/ejs/**/*.ejs"])
    .pipe(plumber())
    .pipe(ejs())
    .pipe(rename({ extname: ".html" }))
    .pipe(dest("dist/"));
  done();
}

exports.default = series(ejs);