var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Jack",
    me: "Jack",
    father: "John",
    mother: "Marry",
    sister: "Anna",
  });
});

module.exports = router;
