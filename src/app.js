const express = require('express');
const cors = require("cors");
const app = express();


var corsOptions = {
    origin: "http://raiddon.s3-website.eu-west-3.amazonaws.com",
    credentials : true
  };
  app.use(cors(corsOptions));
  // parse requests of content-type - application/json
  app.use(express.json());
  // parse requests of content-type - application/x-www-form-urlencoded
  app.use(express.urlencoded({ extended: true }));

  app.use(function (req, res, next) {
    //res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Origin", "http://raiddon.s3-website.eu-west-3.amazonaws.com");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, PATCH, DELETE"); //default: GET, ...
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, PATCH, DELETE'); //to give access to all the methods provided
      return res.status(200).json({});
    }
    next();
  });

  
/** Applying JSON indentation */
app.set('json spaces', 2);


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

/** Routes */
require('./routes/index')(app);


/** Starting server */
module.exports = app;