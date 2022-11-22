require("dotenv").config();
const app = require("./src/app");
const scheduledFunctions = require("./scheduledFunctions");
var MongoClient = require("mongodb").MongoClient;
const { env } = process;
const uri = env.MONGO_DB_URI;

MongoClient.connect(uri, function (err, db) {
  if (err) throw err;
  var dbo = db.db("raiddon-bnet-api");

  dbo
    .collection("areas")
    .find(
      {},
      {
        projection: {
          _id: false,
          name: true,
          id: true,
        },
      }
    )
    .toArray(function (err, result) {
      if (err) throw err;
      var areas = result;
    });

  dbo
    .collection("achievements")
    .find(
      {},
      {
        projection: {
          _id: false,
          name: true,
          id: true,
        },
      }
    )
    .toArray(function (err, result) {
      if (err) throw err;
      var achievements = result;
    });

  dbo
    .collection("armor")
    .find(
      {},
      {
        projection: {
          _id: false,
          name: true,
          id: true,
        },
      }
    )
    .toArray(function (err, result) {
      if (err) throw err;
      var armor = result;
    });

  dbo
    .collection("auction-house-index")
    .find(
      {},
      {
        projection: {
          _id: false,
          name: true,
          id: true,
        },
      }
    )
    .toArray(function (err, result) {
      if (err) throw err;
      var auctionHouseIndex = result;
    });

  dbo
    .collection("character-specializations")
    .find(
      {},
      {
        projection: {
          _id: false,
          name: true,
          id: true,
        },
      }
    )
    .toArray(function (err, result) {
      if (err) throw err;
      var characSpec = result;
    });

  dbo
    .collection("class-talents")
    .find(
      {},
      {
        projection: {
          _id: false,
          name: true,
          id: true,
        },
      }
    )
    .toArray(function (err, result) {
      if (err) throw err;
      var classTalents = result;
    });

  dbo
    .collection("consumables")
    .find(
      {},
      {
        projection: {
          _id: false,
          name: true,
          id: true,
        },
      }
    )
    .toArray(function (err, result) {
      if (err) throw err;
      var consumables = result;
    });

  dbo
    .collection("containers")
    .find(
      {},
      {
        projection: {
          _id: false,
          name: true,
          id: true,
        },
      }
    )
    .toArray(function (err, result) {
      if (err) throw err;
      var containers = result;
    });

  dbo
    .collection("creature-families")
    .find(
      {},
      {
        projection: {
          _id: false,
          name: true,
          id: true,
        },
      }
    )
    .toArray(function (err, result) {
      if (err) throw err;
      var creatureFamilies = result;
    });

  dbo
    .collection("creature-types")
    .find(
      {},
      {
        projection: {
          _id: false,
          name: true,
          id: true,
        },
      }
    )
    .toArray(function (err, result) {
      if (err) throw err;
      var creatureTypes = result;
    });

  dbo
    .collection("gems")
    .find(
      {},
      {
        projection: {
          _id: false,
          name: true,
          id: true,
        },
      }
    )
    .toArray(function (err, result) {
      if (err) throw err;
      var gems = result;
    });

  dbo
    .collection("item-classes")
    .find(
      {},
      {
        projection: {
          _id: false,
          name: true,
          id: true,
        },
      }
    )
    .toArray(function (err, result) {
      if (err) throw err;
      var itemClasses = result;
    });

  dbo
    .collection("mounts")
    .find(
      {},
      {
        projection: {
          _id: false,
          name: true,
          id: true,
        },
      }
    )
    .toArray(function (err, result) {
      if (err) throw err;
      var mounts = result;
    });

  dbo
    .collection("playable-classes")
    .find(
      {},
      {
        projection: {
          _id: false,
          name: true,
          id: true,
        },
      }
    )
    .toArray(function (err, result) {
      if (err) throw err;
      var playableClasses = result;
    });

  dbo
    .collection("playable-races")
    .find(
      {},
      {
        projection: {
          _id: false,
          name: true,
          id: true,
        },
      }
    )
    .toArray(function (err, result) {
      if (err) throw err;
      var playableRaces = result;
    });

  dbo
    .collection("power-types")
    .find(
      {},
      {
        projection: {
          _id: false,
          name: true,
          id: true,
        },
      }
    )
    .toArray(function (err, result) {
      if (err) throw err;
      var powertypes = result;
    });

  dbo
    .collection("professions")
    .find(
      {},
      {
        projection: {
          _id: false,
          name: true,
          id: true,
        },
      }
    )
    .toArray(function (err, result) {
      if (err) throw err;
      var professions = result;
    });

  dbo
    .collection("quest-categories")
    .find(
      {},
      {
        projection: {
          _id: false,
          name: true,
          id: true,
        },
      }
    )
    .toArray(function (err, result) {
      if (err) throw err;
      var questCategories = result;
    });

  dbo
    .collection("realms")
    .find(
      {},
      {
        projection: {
          _id: false,
          name: true,
          id: true,
        },
      }
    )
    .toArray(function (err, result) {
      if (err) throw err;
      var realms = result;
    });

  dbo
    .collection("reputation-factions")
    .find(
      {},
      {
        projection: {
          _id: false,
          name: true,
          id: true,
        },
      }
    )
    .toArray(function (err, result) {
      if (err) throw err;
      var reputationFactions = result;
    });

  dbo
    .collection("titles")
    .find(
      {},
      {
        projection: {
          _id: false,
          name: true,
          id: true,
        },
      }
    )
    .toArray(function (err, result) {
      if (err) throw err;
      var titles = result;
    });

  dbo
    .collection("weapons")
    .find(
      {},
      {
        projection: {
          _id: false,
          name: true,
          id: true,
        },
      }
    )
    .toArray(function (err, result) {
      if (err) throw err;
      var weapons = result;
    });
});

app.listen(process.env.PORT || 3000, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});

// Call to execute scheduled function(s)
scheduledFunctions.initScheduledJobs();
