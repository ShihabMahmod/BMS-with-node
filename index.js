
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/bms");

const express = require('express');
const app = express();

const adminRoute = require("./routes/adminRoute");
app.use('/',adminRoute);

app.listen('3000',function(){
    console.log('server is running');
});