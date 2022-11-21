require('dotenv').config();
const app = require('./src/app');
const createError = require('http-errors');
const scheduledFunctions = require('./scheduledFunctions')

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
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
