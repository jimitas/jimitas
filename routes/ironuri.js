var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("ironuri", { title: "いろぬり" });
});

module.exports = router;
