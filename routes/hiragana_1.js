var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("hiragana_1", { title: "ひらがな　１" });
});

module.exports = router;
