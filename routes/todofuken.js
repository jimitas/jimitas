var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("todofuken", { title: "都道府県" });
});

module.exports = router;