const express = require('express');
const connection = require('../db/connection');

const route = express.Router();

route.get('/', (req, res) => {
    const result = connection.execute('SELECT * FROM teams');
    console.log(result);
});

module.exports = route;