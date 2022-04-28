const express = require('express');
const path = require('path');
require('dotenv').config();
require('./config/db');


const pethRoute = require('./routes/pets.route'); 

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!!!');
});

app.use('/pets',pethRoute);

app.use((err, req, res, next) => {
  console.log('Error', err);
  if (err.details) return res.status(400).send(err.details[0].message);
  if (err instanceof NotFoundError) {
    return res.status(404).send(err.message);
  }
  res.status(503).send('Oooops something went wrong, try again');
});

module.exports = app;
