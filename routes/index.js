var express = require("express");
var router = express.Router();
const db = require("../db/models/index");/* GET users listing. */
router.get("/", async function (req, res, next) {
  const users = await db.User.findAll();
  res.render("index", { users });
});
/*POST user*/
router.post("/", async function (req, res, next) {
  const newUser = await db.User.create({ ...req.body });
  res.json(newUser);
});module.exports = router;
