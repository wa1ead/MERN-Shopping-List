const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

//ITEM MODEL
const Item = require("../../models/Item");

//GET ALL ITEMS
router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then((items) => res.json(items));
});

//CREATE ITEM
router.post("/", auth, (req, res) => {
  const newItem = new Item({
    name: req.body.name,
  });

  newItem.save().then((item) => res.json(item));
});

//DELETE ITEM
router.delete("/:id", auth, (req, res) => {
  const itemId = req.params.id;
  Item.findById(itemId)
    .then((item) => item.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
