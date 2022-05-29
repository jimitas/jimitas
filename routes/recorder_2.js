var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("recorder_2", { title: "リコーダー２" });
});

module.exports = router;