const express = require('express');
const app = express();
//const path = require('path');
const router = express.Router();
// import library
//var captcha = require("nodejs-captcha");
const port = 3000


app.get('/', (req, res) => {
    res.send('Hello World! :D')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  