var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  if (req.session.login == null) {
    var data = {
      title: "top",
      datas: null,
    };
  } else {
    var data = {
      title: "top",
      datas: req.session.login,
    };
  }
  res.render("index", data);
});

module.exports = router;
