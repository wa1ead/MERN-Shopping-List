const express = require("express");
const router = express.Router();

//ITEM MODEL
const Item = require("../../models/Item");

//GET ALL ITEMS
router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then((items) => res.json(items));
});

//CREATE ITEM
router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name,
  });

  newItem.save().then((item) => res.json(item));
});

//DELETE ITEM
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Item.findById(id)
    .then((item) => item.remove().then(() => res.json({ success: true })))
    .catch((err) => console.log(err.response.data.message));
});

module.exports = router;
