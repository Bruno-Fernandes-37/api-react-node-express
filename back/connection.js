const mongoose = require("mongoose");
require('dotenv').config();
const BDD = process.env.BDD;

//Database
mongoose
  .connect(`${BDD}`, {
      autoIndex: true,
  })
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log(err));

  module.exports = mongoose;