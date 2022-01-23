const mysql = require('mysql'); //package de mysql

const mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user:'root',
  password:'',
  database: 'database'
})

mysqlConnection.connect(function (err) {
    if (err) {
      console.error(err);
      return;
    } else {
      console.log('db is connected');
    }
  });
  
  module.exports = mysqlConnection;