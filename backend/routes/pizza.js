const express = require("express");
const { v4: uuidv4 } = require("uuid");
const router = express.Router();
const Pizza = require("../models/Pizza");

router.get("/", async (req, res, next) => {
  try {
    const pizzas = await Pizza.find();
    res.status(200).json(pizzas);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
