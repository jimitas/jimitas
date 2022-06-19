var express = require("express");
var router = express.Router();
const db = require("../models/index");

/* GET home page. */
router.get("/", function (req, res, next) {
  var data = {
    title: "Top",
    datas: null,
  };
  res.render("index", data);
});

module.exports = router;
