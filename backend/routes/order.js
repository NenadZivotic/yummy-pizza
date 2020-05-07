const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

router.get("/", async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

router.post("/", (req, res) => {
  const order = new Order({
    name: req.body.name,
    address: req.body.address,
    phone: req.body.phone,
    orders: req.body.orders,
    price: req.body.price,
  });

  order
    .save()
    .then((result) => {
      res.status(201).json({ result: result });
    })
    .catch((error) => {
      return res.status(400).json({ message: error.message });
    });
});

module.exports = router;
