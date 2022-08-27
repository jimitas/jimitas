var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("waon", { title: "和音を鳴らそう" });
});

module.exports = router;