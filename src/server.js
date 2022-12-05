//import thư viện express
// const express = require('express');
import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoute from "./route/web";
require('dotenv').config();


const app = express()
const port = process.env.PORT;

// setup view engine
configViewEngine(app);

//init web route
initWebRoute(app);

//lắng nghe cổng thực thi
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})