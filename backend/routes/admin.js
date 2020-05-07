const express = require("express");
const router = express.Router();
const Admin = require("../models/Admin");

router.get("/", async (req, res) => {
  try {
    const admins = await Admin.find();
    res.status(200).json(admins);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
