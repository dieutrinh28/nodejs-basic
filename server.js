//import thư viện express
const express = require('express');

const app = express()
const port = 8080

//khai báo route (điều hướng website)
app.get('/', (req, res) => {
  res.send('Hello World with dieutrinh!')
})

app.get('/about', (req, res) => {
    res.send('I am Naibee!')
  })

//lắng nghe cổng thực thi
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})