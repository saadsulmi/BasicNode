//port setter
const port=7000;

const express = require("express");
const app = express();

const mongoose = require("mongoose");
mongoose.set('strictQuery',true);
mongoose.connect('mongodb://127.0.0.1:27017/10rupeesUser');


const userRoute = require("./routes/userRoute");
app.use("/", userRoute);

const adminRoute = require("./routes/admin");
app.use("/admin", adminRoute);
    


app.listen(port,()=>{
  console.log("server is running at "+port);
});
  