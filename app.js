var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var blocksRouter = require("./routes/blocks");
var ikutukanaRouter = require("./routes/ikutukana");
var ikutu_to_ikutuRouter = require("./routes/ikutu_to_ikutu");
var ironuriRouter = require("./routes/ironuri");
var katakanaRouter = require("./routes/katakana");
var kazoebouRouter = require("./routes/kazoebou");
var kenhamo_1Router = require("./routes/kenhamo_1");
var kenhamo_2Router = require("./routes/kenhamo_2");
var kyotoshiRouter = require("./routes/kyotoshi");
var mokkinRouter = require("./routes/mokkin");
var tashizan_1Router = require("./routes/tashizan_1");
var tekkinRouter = require("./routes/tekkin");
var todofukenRouter = require("./routes/todofuken");
var tokeiRouter = require("./routes/tokei");
var recorder_1Router = require("./routes/recorder_1");
var recorder_2Router = require("./routes/recorder_2");
var hiragana_1Router = require("./routes/hiragana_1");
var hiragana_2Router = require("./routes/hiragana_2");
var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/blocks", blocksRouter);
app.use("/ironuri", ironuriRouter);
app.use("/ikutukana", ikutukanaRouter);
app.use("/ikutu_to_ikutu", ikutu_to_ikutuRouter);
app.use("/katakana", katakanaRouter);
app.use("/kazoebou", kazoebouRouter);
app.use("/kenhamo_1", kenhamo_1Router);
app.use("/kenhamo_2", kenhamo_2Router);
app.use("/kyotoshi",kyotoshiRouter)
app.use("/mokkin", mokkinRouter);
app.use("/tashizan_1", tashizan_1Router);
app.use("/tekkin", tekkinRouter);
app.use("/todofuken", todofukenRouter);
app.use("/tokei", tokeiRouter);
app.use("/recorder_1", recorder_1Router);
app.use("/recorder_2", recorder_2Router);
app.use("/hiragana_1", hiragana_1Router);
app.use("/hiragana_2", hiragana_2Router);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
