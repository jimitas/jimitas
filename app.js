const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const app = express();


const { auth } = require('express-openid-connect');

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const blocksRouter = require("./routes/blocks");
const hikizan_1Router = require("./routes/hikizan_1");
const hiragana_1Router = require("./routes/hiragana_1");
const hiragana_2Router = require("./routes/hiragana_2");
const ikutu_to_ikutuRouter = require("./routes/ikutu_to_ikutu");
const ikutukanaRouter = require("./routes/ikutukana");
const ironuriRouter = require("./routes/ironuri");
const katakanaRouter = require("./routes/katakana");
const kazoebouRouter = require("./routes/kazoebou");
const kenhamo_1Router = require("./routes/kenhamo_1");
const kenhamo_2Router = require("./routes/kenhamo_2");
const kyotoshiRouter = require("./routes/kyotoshi");
const mokkinRouter = require("./routes/mokkin");
const tashizan_1Router = require("./routes/tashizan_1");
const tekkinRouter = require("./routes/tekkin");
const todofukenRouter = require("./routes/todofuken");
const tokeiRouter = require("./routes/tokei");
const recorder_1Router = require("./routes/recorder_1");
const recorder_2Router = require("./routes/recorder_2");
const romajiRouter = require("./routes/romaji");

const port = proccss.env.PORT || 3000;
app.listenerCount(port,()=>{
  
})
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.disable("x-powered-by");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//Dynamic resource rooting
app.use("/", indexRouter);
app.use("/blocks", blocksRouter);
app.use("/hikizan_1", hikizan_1Router);
app.use("/hiragana_1", hiragana_1Router);
app.use("/hiragana_2", hiragana_2Router);
app.use("/ironuri", ironuriRouter);
app.use("/ikutukana", ikutukanaRouter);
app.use("/ikutu_to_ikutu", ikutu_to_ikutuRouter);
app.use("/katakana", katakanaRouter);
app.use("/kazoebou", kazoebouRouter);
app.use("/kenhamo_1", kenhamo_1Router);
app.use("/kenhamo_2", kenhamo_2Router);
app.use("/kyotoshi", kyotoshiRouter);
app.use("/mokkin", mokkinRouter);
app.use("/tashizan_1", tashizan_1Router);
app.use("/tekkin", tekkinRouter);
app.use("/todofuken", todofukenRouter);
app.use("/tokei", tokeiRouter);
app.use("/recorder_1", recorder_1Router);
app.use("/recorder_2", recorder_2Router);
app.use("/romaji", romajiRouter);
app.use("/users", usersRouter);

app.use(
  auth({
    issuerBaseURL: process.env.ISSUER_BASE_URL,
    baseURL: process.env.BASE_URL,
    clientID: process.env.CLIENT_ID,
    secret:process.env.SERCRET ,
    idpLogout: true,
  })
);



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
