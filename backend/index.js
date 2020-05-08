const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv/config");
const app = express();
const port = process.env.PORT || 5000;
const path = require("path");

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
  process.env.MONGODB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected to DB")
  // console.log(`dirname: ${__dirname} file name: ${__filename}`),
  // console.log(`other dirname: ${path.resolve("../public/index.html")}`)
);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve("../public/index.html")));
  // app.use(express.static(path.resolve(__dirname, "public", "index.html")));
}

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
