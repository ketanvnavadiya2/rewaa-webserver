const express = require('express');
const inventoryRoute = require('./routes/inventory');
const authRoute = require('./routes/auth');

const bodyParser = require('body-parser');

const app = express();
const db = require('./util/database');

app.use(bodyParser.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/inventory', inventoryRoute);
app.use('/auth', authRoute);


app.listen(8080, () => {
    console.log('App is running on 8080');
})