require("dotenv").config();
const app = require("./src/app");
const scheduledFunctions = require("./scheduledFunctions");
var bodyParser = require('body-parser');
const dbo = require('./src/config/db_config');
app.use(require('./src/routes/app/areas'));

dbo.connectToServer(function (err) {
  if (err) {
    console.error(err);
    process.exit();
  }
  app.listen(process.env.PORT || 8085, function () {
    console.log(
      "Express server listening on port %d in %s mode",
      this.address().port,
      app.settings.env
    );
  });
});




// Call to execute scheduled function(s)
scheduledFunctions.initScheduledJobs();
