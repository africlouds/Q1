const express = require('express')
const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./data.db');

const app = express()
const port = 3000

let data = JSON.parse(fs.readFileSync('data.json'))[0]

console.log(data)


app.get('/', (req, res) => {
  console.log(req.query)

  var mcc = req.query.mcc
  var mnc = req.query.mnc
  var country = req.query.country

  if(country){
  var item = data.filter(function(item){ return item.Country === country});
  }
  else if (mcc && mnc){
  var item = data.filter(function(item){ return item.MCC === mcc && item.MNC === mnc})[0];
  }
  else if (mcc){
  var item = data.filter(function(item){ return item.MCC === mcc});
  }
  res.send(item)
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})