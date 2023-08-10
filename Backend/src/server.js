const express = require('express');
const morgan = require('morgan');
const route = require('./routes');
const db = require('./config/db');
const app = express();
const port = 5000;

//routes
route(app);

db.connect();

app.use(morgan('dev'));

app.listen(port, () => {
    console.log(`App get started at http://localhost:${port}`);
});
