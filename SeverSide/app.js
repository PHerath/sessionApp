// import inbuild packages
const express = require('express');
const bodyParser = require('body-parser');

// import database file
const { mongoose } = require('./db');

// set port number to port variable
const port = 3000;

// import routes from route folder
const api = require('./routes/api');

// set middleware as app using express
const app = express();

app.use(bodyParser.json());

app.use('/api', api);

// set connection to server using port:3000
app.listen(port, (err) => {
   if(!err) {
      console.log('server is started at: ' + port);
   }
   else {
      console.log('connection to server error');
   }
});