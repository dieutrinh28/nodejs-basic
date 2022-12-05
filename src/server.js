//import thư viện express
// const express = require('express');
import express from "express";
import configViewEngine from "./configs/viewEngine";
require('dotenv').config();


const app = express()
const port = process.env.PORT;

configViewEngine(app);

//khai báo route (điều hướng website)
app.get('/', (req, res) => {
  res.render('test/index.ejs')
})

app.get('/about', (req, res) => {
    res.send('I am Naibee!')
  })

//lắng nghe cổng thực thi
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})