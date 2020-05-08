const express = require("express");
const router = express.Router();
const Admin = require("../models/Admin");
const jwt = require("jsonwebtoken");

router.get("/", async (req, res) => {
  try {
    const admins = await Admin.find();
    res.status(200).json(admins);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", (req, res, next) => {
  Admin.find({ name: req.body.name, password: req.body.password })
    .exec()
    .then((admin) => {
      if (admin.length < 1) {
        return res.status(401).json({
          message: "Auth failed",
        });
      }
      if (admin) {
        const token = jwt.sign(
          {
            name: admin.name,
            adminId: admin._id,
          },
          process.env.JWT_KEY,
          {
            expiresIn: "1h",
          }
        );
        return res.status(200).json({
          message: "Auth successful",
          token: token,
        });
      }
      res.status(401).json({
        message: "Auth failed",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

module.exports = router;
