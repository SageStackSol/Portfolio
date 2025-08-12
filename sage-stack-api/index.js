require("dotenv").config();
const cors = require("cors");


const mongoose = require("mongoose");
const express = require("express");
const port = 8080;
const app = express();
app.use(
  cors({
    origin: `${import.meta.env.REACT_URL}`,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
const clientInfoRouter = require("./views/clientInfo");


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log("error occured", err);
  });

app.use(express.json());
app.use(clientInfoRouter);


app.get("/", (req, res) => {
  z;
  res.send("running");
});
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
