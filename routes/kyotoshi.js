var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("kyotoshi", { title: "京都市の１１区" });
});

module.exports = router;