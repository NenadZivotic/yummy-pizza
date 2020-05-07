const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv/config");
const app = express();
const port = process.env.PORT || 5000;

const pizzaRoute = require("./routes/pizza");
const orderRoute = require("./routes/order");
const adminsRoute = require("./routes/admin");

app.use(cors());

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS, PUT"
  );
  next();
});

app.use("/pizzas", pizzaRoute);
app.use("/orders", orderRoute);
app.use("/admins", adminsRoute);

app.get("/", (req, res) => res.send("Pizza app..."));

app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected to DB")
);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
