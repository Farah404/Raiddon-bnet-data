require("dotenv").config();
const app = require("./src/app");
const scheduledFunctions = require("./scheduledFunctions");
const dbo = require('./src/config/db_config');

app.use(require('./src/routes/app/areas'));
app.use(require('./src/routes/app/achievements'));
app.use(require('./src/routes/app/achievementsCategories'))
app.use(require('./src/routes/app/armor'))
app.use(require('./src/routes/app/auctionHouseIndex'))
app.use(require('./src/routes/app/allianceAuctionHouse'))
app.use(require('./src/routes/app/hordeAuctionHouse'))
app.use(require('./src/routes/app/characterSpecialisation'))
app.use(require('./src/routes/app/classTalents'))
app.use(require('./src/routes/app/consumables'))
app.use(require('./src/routes/app/containers'))
app.use(require('./src/routes/app/creatureFamilies'))
app.use(require('./src/routes/app/creatureTypes'))
app.use(require('./src/routes/app/professions'))
app.use(require('./src/routes/app/questCategories'))
app.use(require('./src/routes/app/realms'))
app.use(require('./src/routes/app/reputationFactions'))
app.use(require('./src/routes/app/titles'))
app.use(require('./src/routes/app/weapons'))
app.use(require('./src/routes/app/itemClasses'))
app.use(require('./src/routes/app/mounts'))
app.use(require('./src/routes/app/playableClasses'))
app.use(require('./src/routes/app/playableRaces'))
app.use(require('./src/routes/app/powerTypes'))


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
