require('dotenv').config();

const express = require('express');
const route = require('./routes');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

//set static path
app.use(express.static(path.join(__dirname, 'public')));

//body parser
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

app.use(route);

app.listen((process.env.PORT), () => {
    console.log('Port: ' + `${process.env.PORT}`);
});