const express = require('express');
const createError = require('http-errors');
const cors = require("cors");

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var corsOptions = {
    origin: "http://localhost:8081"
  };
  app.use(cors(corsOptions));
  // parse requests of content-type - application/json
  app.use(express.json());
  // parse requests of content-type - application/x-www-form-urlencoded
  app.use(express.urlencoded({ extended: true }));

/** Applying JSON indentation */
app.set('json spaces', 2);

//Connecting server to mongo
const db = require("./models/db-schemas");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

/** Routes */
require('./routes/index')(app);

/** Starting server */
module.exports = app;