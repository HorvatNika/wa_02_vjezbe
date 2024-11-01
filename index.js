const express = require("express");
const path = require("path");
const app = express();
const PORT = 3003; 

app.get('/', function(req, res) {
    res.send('Hello, world!');
});