//import thư viện express
// const express = require('express');
import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoute from "./route/web";
import initAPIRoute from "./route/api";
// import connection from "./configs/connectDB";

require("dotenv").config();
var morgan = require("morgan");

const app = express();
const port = process.env.PORT || 8080;

// app.use((req, res) => {
//   console.log(">> run into my middleware");
//   console.log(req.method);
//   next();
// });

app.use(morgan("combined"));
//hỗ trợ gửi data từ phía client lên phía server, và có thể lấy data một cách đơn giản
//giản lược hóa những tham số từ request gửi lên server
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// setup view engine
configViewEngine(app);

//init web route
initWebRoute(app);

//init api route
initAPIRoute(app);

//handle 404 not found
app.use((req, res) => {
  return res.render("404.ejs");
});

//lắng nghe cổng thực thi
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
