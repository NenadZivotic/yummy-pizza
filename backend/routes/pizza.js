const express = require("express");
const { v4: uuidv4 } = require("uuid");
const router = express.Router();
const Pizza = require("../models/Pizza");

const dummy_pizzas = [];

router.get("/", async (req, res, next) => {
  try {
    const pizzas = await Pizza.find();
    res.json(pizzas);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", (req, res, next) => {
  const { pizzaName, price } = req.body;

  if (!pizzaName || pizzaName.trim().length === 0 || !price || price <= 0) {
    return res.status(422).json({
      message: "Invalid pizza, please enter a valid pizza and price",
    });
  }

  const createdPizza = {
    id: uuidv4(),
    pizzaName,
    price,
  };

  dummy_pizzas.push(createdPizza);

  res.status(201).json({ message: "Created pizza", pizza: createdPizza });
});

module.exports = router;
