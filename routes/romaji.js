var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("romaji", { title: "ローマ字の練習" });
});

module.exports = router;
