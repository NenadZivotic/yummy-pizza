const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

router.get("/", async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const order = new Order({
    name: req.body.name,
    address: req.body.address,
    phone: req.body.phone,
    orders: req.body.orders,
    price: req.body.price,
  });

  try {
    const savedOrder = await order.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    return res.json({ message: err });
  }
});

module.exports = router;
