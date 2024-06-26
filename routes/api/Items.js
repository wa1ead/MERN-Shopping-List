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
router.post("/add-item", (req, res) => {
  const newItem = new Item({
    name: req.body.name,
  });

  newItem.save().then((item) => res.json(item));
});

//DELETE ITEM
router.delete("/delete-item/:id", (req, res) => {
  Item.findById(req.params.id)
    .then((item) => item.remove().then(() => res.json({ success: true })))
    .catch((error) => res.status(404).json({ success: false }));
});

module.exports = router;
