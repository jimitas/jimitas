var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("hiragana_2", { title: "ひらがなの　れんしゅう　２" });
});

module.exports = router;
