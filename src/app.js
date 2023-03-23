const express = require('express');
const { routeTeams } = require('./routes');


const app = express();

app.use('/teams', routeTeams);


module.exports = {
    app,
}