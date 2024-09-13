const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

app.use(express.json())

mongoose
  .connect(process.env.DBURI)
  .then(() => {
    console.log(`DB Connected Successfully`);
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/api", require("./routes/route"));

app.listen(process.env.PORT, (error) => {
  if (error) {
    return console.error(`Something went wrong ${error}`);
  }
  console.log(`Server is running on port ${process.env.PORT}`);
});
