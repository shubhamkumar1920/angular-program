require('./models/db');

const express = require('express');
const bodyParser = require('body-parser');

var categoryController=require('./controllers/categoryController.js');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, () => console.log('Server started at port : 3000'));
app.use('/categories',categoryController);