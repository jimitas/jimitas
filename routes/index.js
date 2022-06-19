var express = require("express");
var router = express.Router();
const app = express();


/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Top" });
});

module.exports = router;
