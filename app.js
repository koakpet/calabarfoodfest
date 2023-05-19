require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const _ = require('lodash');


const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');



// Routes
app.use('/', require('./routes/home'));
app.use('/about', require('./routes/about'));
app.use('/register', require('./routes/register'));
app.use('/contact', require('./routes/contact'));

app.get('/test', function(req, res){
  res.render('test');
});

// Server
app.listen(process.env.PORT || 3000, function(req, res){
  console.log("Server is running on Port 3000");
});