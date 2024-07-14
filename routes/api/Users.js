const express = require("express");
const router = express.Router();

//ITEM MODEL
const User = require("../../models/User");

//POST NEW USER
router.post("/", (req, res) => {
  res.send("register");
});

module.exports = router;
