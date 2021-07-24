require('./models/db');

const express = require('express');
const bodyParser = require('body-parser');

var categoryController=require('./controllers/categoryController.js');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3001, () => console.log('Server started at port : 3001'));
app.use('/categories',categoryController);