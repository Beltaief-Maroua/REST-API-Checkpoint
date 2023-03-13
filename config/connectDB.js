const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(
        process.env.MONGODB_URI
    );
    console.log("database is connected");
  } catch (error) {
    console.log("database is not connected");
  }
};
module.exports = connectDB;