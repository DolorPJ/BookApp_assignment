const express = require('express');
const cors = require('cors')
var favicon = require('serve-favicon');
var path = require('path');
const Datastore = require('nedb')
const app = express();
const fetch = require('node-fetch');
require('dotenv').config()
const port = process.env.PORT || 3000;
const timestamp = Date.now();
const database = new Datastore('database.db');
app.use(cors());
// app.use(express.static('public'));
app.use(express.static(path.join(__dirname,"public")));
app.use(favicon(path.join(__dirname, 'public', 'favicon.png')))
app.use(express.json({limit:'1mb'}));
app.listen(port, ()=>{console.log(`api server is runnning on ${port}`)});









