var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("waon2", { title: "和音を鳴らそう２" });
});

module.exports = router;