var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("tashizan_1", { title: "たしざんのれんしゅう" });
});

module.exports = router;