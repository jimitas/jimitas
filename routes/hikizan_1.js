var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("hikizan_1", { title: "ひきざんのれんしゅう" });
});

module.exports = router;