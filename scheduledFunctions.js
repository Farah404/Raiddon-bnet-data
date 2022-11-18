const CronJob = require("node-cron");
const fetch = require("node-fetch");
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";
var access_token = "EU4RHONfOjOv9gBy4J4E1BPlPz0mlplYU7";

// Starting scheduled functions
exports.initScheduledJobs = () => {
  const scheduledJobFunction = CronJob.schedule("* * * * *", () => {
    // Connecting to mongodb
    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      // Creating database
      var dbo = db.db("raiddon-bnet-api");
      console.log("Connected to Raiddon MongoDB");

      // Data to be inserted: Playable races
      fetch(
        "https://us.api.blizzard.com/data/wow/playable-race/index?namespace=static-classic-us&locale=en_US&access_token=" +
          access_token
      )
        .then((response) => response.json())
        .then((data) => {
          myobj = data.races;
          // Collection in which the data will be inserted
          dbo
            .collection("playable-races")
            .insertMany(myobj, function (err, res) {
              if (err) throw err;
              console.log("Playable races collection inserted into Raiddon db");
            });
        });

      // Data to be inserted: Playable classes
      fetch(
        "https://us.api.blizzard.com/data/wow/playable-class/index?namespace=static-classic-us&locale=en_US&access_token=" +
          access_token
      )
        .then((response) => response.json())
        .then((data) => {
          myobj = data.classes;
          // Collection in which the data will be inserted
          dbo
            .collection("playable-classes")
            .insertMany(myobj, function (err, res) {
              if (err) throw err;
              console.log(
                "Playable classes collection inserted into Raiddon db"
              );
            });
        });

      // Data to be inserted: Auction house index
      fetch(
        "https://us.api.blizzard.com/data/wow/connected-realm/4372/auctions/index?namespace=dynamic-classic-us&locale=en_US&access_token=" +
          access_token
      )
        .then((response) => response.json())
        .then((data) => {
          myobj = data.auctions;
          // Collection in which the data will be inserted
          dbo
            .collection("auction-house-index")
            .insertMany(myobj, function (err, res) {
              if (err) throw err;
              console.log(
                "Auction house index collection inserted into Raiddon db"
              );
            });
        });

      // Data to be inserted: Auction house alliance
      fetch(
        "https://us.api.blizzard.com/data/wow/connected-realm/4372/auctions/2?namespace=dynamic-classic-us&locale=en_US&access_token=" +
          access_token
      )
        .then((response) => response.json())
        .then((data) => {
          myobj = data.auctions;
          // Collection in which the data will be inserted
          dbo
            .collection("auction-house-alliance")
            .insertMany(myobj, function (err, res) {
              if (err) throw err;
              console.log(
                "Auction house alliance collection inserted into Raiddon db"
              );
            });
        });

      // Data to be inserted: Auction house horde
      fetch(
        "https://us.api.blizzard.com/data/wow/connected-realm/4372/auctions/6?namespace=dynamic-classic-us&locale=en_US&access_token=" +
          access_token
      )
        .then((response) => response.json())
        .then((data) => {
          myobj = data.auctions;
          // Collection in which the data will be inserted
          dbo
            .collection("auction-house-horde")
            .insertMany(myobj, function (err, res) {
              if (err) throw err;
              console.log(
                "Auction house horde collection inserted into Raiddon db"
              );
            });
        });

      // Data to be inserted: Item classes
      fetch(
        "https://us.api.blizzard.com/data/wow/item-class/index?namespace=static-classic-us&locale=en_US&access_token=" +
          access_token
      )
        .then((response) => response.json())
        .then((data) => {
          myobj = data.item_classes;
          // Collection in which the data will be inserted
          dbo
            .collection("item-classes")
            .insertMany(myobj, function (err, res) {
              if (err) throw err;
              console.log(
                "Item classes collection inserted into Raiddon db"
              );
            });
        });

      // Data to be inserted: Consumables
      fetch(
        "https://us.api.blizzard.com/data/wow/item-class/0?namespace=static-classic-us&locale=en_US&access_token=" +
          access_token
      )
        .then((response) => response.json())
        .then((data) => {
          myobj = data.item_subclasses;
          // Collection in which the data will be inserted
          dbo.collection("consumables").insertMany(myobj, function (err, res) {
            if (err) throw err;
            console.log("Consumables collection inserted into Raiddon db");
          });
        });

      // Data to be inserted: Containers
      fetch(
        "https://us.api.blizzard.com/data/wow/item-class/1?namespace=static-classic-us&locale=en_US&access_token=" +
          access_token
      )
        .then((response) => response.json())
        .then((data) => {
          myobj = data.item_subclasses;
          // Collection in which the data will be inserted
          dbo.collection("containers").insertMany(myobj, function (err, res) {
            if (err) throw err;
            console.log("Containers collection inserted into Raiddon db");
          });
        });

      // Data to be inserted: Weapons
      fetch(
        "https://us.api.blizzard.com/data/wow/item-class/2?namespace=static-classic-us&locale=en_US&access_token=" +
          access_token
      )
        .then((response) => response.json())
        .then((data) => {
          myobj = data.item_subclasses;
          // Collection in which the data will be inserted
          dbo.collection("weapons").insertMany(myobj, function (err, res) {
            if (err) throw err;
            console.log("Weapons collection inserted into Raiddon db");
          });
        });

      // Data to be inserted: Gems
      fetch(
        "https://us.api.blizzard.com/data/wow/item-class/3?namespace=static-classic-us&locale=en_US&access_token=" +
          access_token
      )
        .then((response) => response.json())
        .then((data) => {
          myobj = data.item_subclasses;
          // Collection in which the data will be inserted
          dbo.collection("gems").insertMany(myobj, function (err, res) {
            if (err) throw err;
            console.log("Gems collection inserted into Raiddon db");
          });
        });

      // Data to be inserted: Armor
      fetch(
        "https://us.api.blizzard.com/data/wow/item-class/4?namespace=static-classic-us&locale=en_US&access_token=" +
          access_token
      )
        .then((response) => response.json())
        .then((data) => {
          myobj = data.item_subclasses;
          // Collection in which the data will be inserted
          dbo.collection("armor").insertMany(myobj, function (err, res) {
            if (err) throw err;
            console.log("Armor collection inserted into Raiddon db");
          });
        });

      // Data to be inserted: Professions
      fetch(
        "https://us.api.blizzard.com/data/wow/profession/index?namespace=static-us&locale=en_US&access_token=" +
          access_token
      )
        .then((response) => response.json())
        .then((data) => {
          myobj = data.professions;
          // Collection in which the data will be inserted
          dbo.collection("professions").insertMany(myobj, function (err, res) {
            if (err) throw err;
            console.log("Professions collection inserted into Raiddon db");
          });
        });

      // Data to be inserted: Power types 
      fetch(
        "https://us.api.blizzard.com/data/wow/power-type/index?namespace=static-classic-us&locale=en_US&access_token=" +
          access_token
      )
        .then((response) => response.json())
        .then((data) => {
          myobj = data.power_types;
          // Collection in which the data will be inserted
          dbo
            .collection("power-types")
            .insertMany(myobj, function (err, res) {
              if (err) throw err;
              console.log(
                "Power types collection inserted into Raiddon db"
              );
            });
        });

      // Data to be inserted: Realms
      fetch(
        "https://us.api.blizzard.com/data/wow/realm/index?namespace=dynamic-classic-us&locale=en_US&access_token=" +
          access_token
      )
        .then((response) => response.json())
        .then((data) => {
          myobj = data.realms;
          // Collection in which the data will be inserted
          dbo.collection("realms").insertMany(myobj, function (err, res) {
            if (err) throw err;
            console.log("Realms collection inserted into Raiddon db");
          });
        });

      // Data to be inserted: Creature families
      fetch(
        "https://us.api.blizzard.com/data/wow/creature-family/index?namespace=static-classic-us&locale=en_US&access_token=" +
          access_token
      )
        .then((response) => response.json())
        .then((data) => {
          myobj = data.creature_families;
          // Collection in which the data will be inserted
          dbo
            .collection("creature-families")
            .insertMany(myobj, function (err, res) {
              if (err) throw err;
              console.log(
                "Creature families collection inserted into Raiddon db"
              );
            });
        });

      // Data to be inserted: Creature types 
      fetch(
        "https://us.api.blizzard.com/data/wow/creature-type/index?namespace=static-classic-us&locale=en_US&access_token=" +
          access_token
      )
        .then((response) => response.json())
        .then((data) => {
          myobj = data.creature_types;
          // Collection in which the data will be inserted
          dbo
            .collection("creature-types")
            .insertMany(myobj, function (err, res) {
              if (err) throw err;
              console.log(
                "Creature types collection inserted into Raiddon db"
              );
            });
        });

      // Data to be inserted: Achievement categories
      fetch(
        "https://us.api.blizzard.com/data/wow/achievement-category/index?namespace=static-us&locale=en_US&access_token=" +
          access_token
      )
        .then((response) => response.json())
        .then((data) => {
          myobj = data.categories;
          // Collection in which the data will be inserted
          dbo
            .collection("achievement-categories")
            .insertMany(myobj, function (err, res) {
              if (err) throw err;
              console.log(
                "Achievement categories collection inserted into Raiddon db"
              );
            });
        });

              // Data to be inserted: Achievements
      fetch(
        "https://us.api.blizzard.com/data/wow/achievement/index?namespace=static-us&locale=en_US&access_token=" +
          access_token
      )
        .then((response) => response.json())
        .then((data) => {
          myobj = data.achievements;
          // Collection in which the data will be inserted
          dbo
            .collection("achievements")
            .insertMany(myobj, function (err, res) {
              if (err) throw err;
              console.log(
                "Achievements collection inserted into Raiddon db"
              );
            });
        });

                      // Data to be inserted: Mounts
      fetch(
        "https://us.api.blizzard.com/data/wow/mount/index?namespace=static-us&locale=en_US&access_token=" +
          access_token
      )
        .then((response) => response.json())
        .then((data) => {
          myobj = data.mounts;
          // Collection in which the data will be inserted
          dbo
            .collection("mounts")
            .insertMany(myobj, function (err, res) {
              if (err) throw err;
              console.log(
                "Mounts collection inserted into Raiddon db"
              );
            });
        });

        
                      // Data to be inserted: Character specializations
      fetch(
        "https://us.api.blizzard.com/data/wow/playable-specialization/index?namespace=static-us&locale=en_US&access_token=" +
          access_token
      )
        .then((response) => response.json())
        .then((data) => {
          myobj = data.character_specializations;
          // Collection in which the data will be inserted
          dbo
            .collection("character-specializations")
            .insertMany(myobj, function (err, res) {
              if (err) throw err;
              console.log(
                "Character specializations collection inserted into Raiddon db"
              );
            });
        });

                              // Data to be inserted: Quest categories
      fetch(
        "https://us.api.blizzard.com/data/wow/quest/category/index?namespace=static-us&locale=en_US&access_token=" +
          access_token
      )
        .then((response) => response.json())
        .then((data) => {
          myobj = data.categories;
          // Collection in which the data will be inserted
          dbo
            .collection("quest-categories")
            .insertMany(myobj, function (err, res) {
              if (err) throw err;
              console.log(
                "Quest categories collection inserted into Raiddon db"
              );
            });
        });

                                      // Data to be inserted: Areas
      fetch(
        "https://us.api.blizzard.com/data/wow/quest/area/index?namespace=static-us&locale=en_US&access_token=" +
          access_token
      )
        .then((response) => response.json())
        .then((data) => {
          myobj = data.areas;
          // Collection in which the data will be inserted
          dbo
            .collection("areas")
            .insertMany(myobj, function (err, res) {
              if (err) throw err;
              console.log(
                "Areas collection inserted into Raiddon db"
              );
            });
        });

                                              // Data to be inserted: Quest types
      fetch(
        "https://us.api.blizzard.com/data/wow/quest/type/index?namespace=static-us&locale=en_US&access_token=" +
          access_token
      )
        .then((response) => response.json())
        .then((data) => {
          myobj = data.types;
          // Collection in which the data will be inserted
          dbo
            .collection("quest-types")
            .insertMany(myobj, function (err, res) {
              if (err) throw err;
              console.log(
                "Quest types collection inserted into Raiddon db"
              );
            });
        });

                                                      // Data to be inserted: Reputation factions
      fetch(
        "https://us.api.blizzard.com/data/wow/reputation-faction/index?namespace=static-us&locale=en_US&access_token=" +
          access_token
      )
        .then((response) => response.json())
        .then((data) => {
          myobj = data.factions;
          // Collection in which the data will be inserted
          dbo
            .collection("reputation-factions")
            .insertMany(myobj, function (err, res) {
              if (err) throw err;
              console.log(
                "Reputation factions collection inserted into Raiddon db"
              );
            });
        });

         // Data to be inserted: Class talents
        fetch(
          "https://us.api.blizzard.com/data/wow/talent-tree/index?namespace=static-us&locale=en_US&access_token=" +
            access_token
        )
          .then((response) => response.json())
          .then((data) => {
            myobj = data.talent_trees;
            // Collection in which the data will be inserted
            dbo
              .collection("class-talents")
              .insertMany(myobj, function (err, res) {
                if (err) throw err;
                console.log(
                  "Class talents factions collection inserted into Raiddon db"
                );
              });
          });

          
         // Data to be inserted: Titles
        fetch(
          "https://us.api.blizzard.com/data/wow/title/index?namespace=static-us&locale=en_US&access_token=" +
            access_token
        )
          .then((response) => response.json())
          .then((data) => {
            myobj = data.titles;
            // Collection in which the data will be inserted
            dbo
              .collection("titles")
              .insertMany(myobj, function (err, res) {
                if (err) throw err;
                console.log(
                  "Titles collection inserted into Raiddon db"
                );
              });
          });


    });
  });
  scheduledJobFunction.start();
};
