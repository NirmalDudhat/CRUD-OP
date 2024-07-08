const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRouter = require("./routes/userRoute");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");

app.use(cors());

app.use(express.json());

mongoose
  .connect(process.env.URL)
  .then(() => {
    console.log("Connect", process.env.PORT, "PORT");
    app.listen(process.env.PORT || 8000, (err) => {
      if (err) console.log(err);
      console.log("Server Running");
    });
  })
  .catch((error) => {
    console.log("Error", error);
  });

app.use(userRouter);
