require("dotenv").config({ path: "./config/.env" });
const express = require("express");
const app = express();
const connectDB = require('./config/connectDB')
const userRoutes = require('./routes/userRouter')
/* connecting to data base */

connectDB()
app.use(express.json());


/*connecting to server*/
const server = app.listen(process.env.PORT, function () {
  let port = 3020
  console.log("Server listening on port:", port);
});

app.use('/api/user', userRoutes)