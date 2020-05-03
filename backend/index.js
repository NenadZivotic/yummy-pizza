const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv/config");
const app = express();
const port = 5000;

const pizzaRoute = require("./routes/pizza");
const userRoute = require("./routes/user");

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
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.use("/pizzas", pizzaRoute);
app.use("/users", userRoute);

app.get("/", (req, res) => res.send("Hello Pizza!"));

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected to DB")
);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
