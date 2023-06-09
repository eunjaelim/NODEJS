const express = require('express')
const app = express()
var finalhandler = require('finalhandler')
var http         = require('http')
var Router       = require('router')

app.get('/', function (req, res) {
  res.send('')
    })

app.listen(3000)