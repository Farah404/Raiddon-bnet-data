require('dotenv').config();
const app = require('./src/app');
const port = process.env.PORT || 8080;
<<<<<<< Updated upstream
=======
const createError = require('http-errors');
const scheduledFunctions = require('./scheduledFunctions')
>>>>>>> Stashed changes

app.listen(port, () => {
  console.log(`RAIDDON listening on ${port}!`);
});

// Call to execute scheduled function(s)
scheduledFunctions.initScheduledJobs();

//Generating error page
app.use(async (res, req, next) => {
  next(createError.NotFound())
})
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.send({
      error: {
          status: err.status ||500,
          message: err.message
      }
  })
})
