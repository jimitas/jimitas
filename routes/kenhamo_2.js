var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("kenhamo_2", { title: "けんばんハーモニカ２" });
});

module.exports = router;