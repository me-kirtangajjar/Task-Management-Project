const express = require("express");
const mongoose = require("mongoose");
const { default: globalErrorHandler } = require("./middleware/globalErrorHandler");

require("dotenv").config();
const app = express();

app.use(express.json());

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log(`DB Connected Successfully`);
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/api", require("./router/apiRouter"));
app.use(globalErrorHandler)

app.listen(process.env.PORT, (error) => {
  if (error) {
    return console.error(`Something went wrong ${error}`);
  }
  console.log(`Server is running on port ${process.env.PORT}`);
});
