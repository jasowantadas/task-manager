const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose.connect(url);
};

module.exports = connectDB;
//   .then(() => console.log("Connected to DB..."))
//   .catch((err) => console.log(err));

//to run the server and connect to database at sync we have to use async while connecting
