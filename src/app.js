const express = require('express');
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


  // parse requests of content-type - application/json
  app.use(express.json());
  // parse requests of content-type - application/x-www-form-urlencoded
  app.use(express.urlencoded({ extended: true }));

/** Applying JSON indentation */
app.set('json spaces', 2);


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

/** Routes */
require('./routes/index')(app);


/** Starting server */
module.exports = app;