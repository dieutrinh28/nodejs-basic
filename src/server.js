//import thư viện express
// const express = require('express');
import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoute from "./route/web";
// import connection from "./configs/connectDB";

require('dotenv').config();


const app = express()
const port = process.env.PORT;

//hỗ trợ gửi data từ phía client lên phía server, và có thể lấy data một cách đơn giản
//giản lược hóa những tham số từ request gửi lên server
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// setup view engine
configViewEngine(app);

//init web route
initWebRoute(app);

//lắng nghe cổng thực thi
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})