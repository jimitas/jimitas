const express = require("express");
const router = express.Router();
const db = require("../models/index");
/* GET users listing. */
router.get("/login", (req, res, next) => {
  var data = {
    title: "ログイン　がめん",
    content: "ユーザーID(アイディ)と　パスワードを いれてね。",
  };
  res.render("users/login", data);
});


// router.get("/", function (req, res, next) {
//   db.user_data.findAll().then((usrs) => {
//     var data = {
//       title: "Top",
//       datas: usrs,
//     };
//     res.render("index", data);
//   });
// });


router.post("/login", (req, res, next) => {
  db.User.findOne({
    where: {
      name: req.body.name,
      pass: req.body.pass,
    },
  }).then((usr) => {
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
    form: new db.User(),
    err: null,
  };
  res.render("users/add", data);
});

router.post("/add", (req, res, next) => {
  const form = {
    name: req.body.name,
    pass: req.body.pass,
    level: 0,
    exp: 0,
  };
  db.sequelize.sync().then(() =>
    db.User.create(form)
      .then((usr) => {
        res.redirect("/");
      })
      .catch((err) => {
        var data = {
          title: "あたらしい　ユーザーを　つくる",
          content: "ユーザーID(アイディ)と　パスワードを　きめてください。（アルファベットか　すうじが　つかえます。）",
          form: form,
          err: err,
        };
        res.render("users/add", data);
      })
  );
});

module.exports = router;
