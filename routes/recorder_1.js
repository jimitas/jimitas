var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("recorder_1", { title: "リコーダー１" });
});

module.exports = router;