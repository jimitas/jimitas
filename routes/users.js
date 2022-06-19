const express = require("express");
const router = express.Router();
const db = require("../models/index");

/* GET users listing. */
router.get("/", function (req, res, next) {
  db.user_data.findAll().then((usrs) => {
    var data = {
      title: "Users",
      content: usrs,
    };
    res.render("users/index", data);
  });
});

router.get("/login", (req, res, next) => {
  var data = {
    title: "ログイン　がめん",
    content: "ユーザーID(アイディ)と　パスワードを いれてね。",
  };
  res.render("users/login", data);
});

router.post("/login", (req, res, next) => {
  db.user_data
    .findOne({
      where: {
        name: req.body.name,
        pass: req.body.pass,
      },
    })
    .then((usr) => {
      if (usr != null) {
        req.session.login = usr;
        let back = req.session.back;
        if (back == null) {
          back = "/";
        }
        res.redirect(back);
      } else {
        var data = {
          title: "ログイン　がめん",
          content: "ユーザーID(アイディ)か　パスワードが　まちがっているよ。",
        };
        res.render("users/login", data);
      }
    });
});

router.get("/add", (req, res, next) => {
  var data = {
    title: "あたらしい　ユーザーを　つくる",
    content: "ユーザーID(アイディ)と　パスワードを　きめてください。（アルファベットか　すうじが　つかえます。）",
    form: new db.user_data(),
    err: null,
  };
  res.render("users/add", data);
});

router.post("/add", (req, res, next) => {
  const form = {
    name: req.body.name,
    pass: req.body.pass,
    level: 0,
    point: 0,
  };
  db.sequelize.sync().then(() =>
    db.user_data
      .create(form)
      .then((usr) => {
        res.render("users/add");
        res.redirect("/");
      })
      .catch((err) => {
        var data = {
          title: "あたらしい　ユーザーを　つくる",
          content: "ユーザーID(アイディ)と　パスワードを　きめてください。（アルファベットか　すうじが　つかえます。）",
          form: form,
          err: err,
          datas: null,
        };
        res.render("users/add", data);
      })
  );
});

module.exports = router;
