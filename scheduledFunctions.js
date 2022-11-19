const { MongoClient, ServerApiVersion } = require("mongodb");

const { env } = process;
const CronJob = require("node-cron");
const fetch = require("node-fetch");

var access_token = env.ACCESS_TOKEN;
const uri = env.MONGO_DB_URI;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

// # ┌───────────── minute (0 - 59)
// # │ ┌───────────── hour (0 - 23)
// # │ │ ┌───────────── day of the month (1 - 31)
// # │ │ │ ┌───────────── month (1 - 12)
// # │ │ │ │ ┌───────────── day of the week (0 - 6) (Sunday to Saturday;
// # │ │ │ │ │                                   7 is also Sunday on some systems)
// # │ │ │ │ │                                   OR sun, mon, tue, wed, thu, fri, sat
// # │ │ │ │ │
// # * * * * *
exports.initScheduledJobs = () => {
  const scheduledJobFunction = CronJob.schedule("* * * * *", () => {
// Data to be inserted: Playable races
client.connect((err) => {
  const collection1 = client
    .db("raiddon-bnet-api")
    .collection("playable-races")
  fetch(
    "https://us.api.blizzard.com/data/wow/playable-race/index?namespace=static-classic-us&locale=en_US&access_token=" +
      access_token
  )
    .then((response) => response.json())
    .then((data) => {
      myobj = data.races;
      collection1.insertMany(myobj, function (err, res) {
        if (err) throw err;
        console.log("Playable races collection inserted into Raiddon db");
      });
    });

  // Data to be inserted: Playable classes
  const collection2 = client
    .db("raiddon-bnet-api")
    .collection("playable-classes");
  fetch(
    "https://us.api.blizzard.com/data/wow/playable-class/index?namespace=static-classic-us&locale=en_US&access_token=" +
      access_token
  )
    .then((response) => response.json())
    .then((data) => {
      myobj = data.classes;
      collection2.updateMany({ }, [{$set:{myobj}}], {upsert:true});
      console.log("Playable classes collection inserted into Raiddon db");
    });

  // Data to be inserted: Auction house index
  const collection3 = client
    .db("raiddon-bnet-api")
    .collection("auction-house-index");
  fetch(
    "https://us.api.blizzard.com/data/wow/connected-realm/4372/auctions/index?namespace=dynamic-classic-us&locale=en_US&access_token=" +
      access_token
  )
    .then((response) => response.json())
    .then((data) => {
      myobj = data.auctions;
      // Collection in which the data will be inserted
      collection3.insertMany(myobj, function (err, res) {
        if (err) throw err;
        console.log("Auction house index collection inserted into Raiddon db");
      });
    });

  // Data to be inserted: Auction house alliance
  const collection4 = client
    .db("raiddon-bnet-api")
    .collection("auction-house-alliance");
  fetch(
    "https://us.api.blizzard.com/data/wow/connected-realm/4372/auctions/2?namespace=dynamic-classic-us&locale=en_US&access_token=" +
      access_token
  )
    .then((response) => response.json())
    .then((data) => {
      myobj = data.auctions;
      // Collection in which the data will be inserted
      collection4.insertMany(myobj, function (err, res) {
        if (err) throw err;
        console.log(
          "Auction house alliance collection inserted into Raiddon db"
        );
      });
    });

  // Data to be inserted: Auction house horde
  const collection5 = client
    .db("raiddon-bnet-api")
    .collection("auction-house-horde");
  fetch(
    "https://us.api.blizzard.com/data/wow/connected-realm/4372/auctions/6?namespace=dynamic-classic-us&locale=en_US&access_token=" +
      access_token
  )
    .then((response) => response.json())
    .then((data) => {
      myobj = data.auctions;
      // Collection in which the data will be inserted
      collection5.insertMany(myobj, function (err, res) {
        if (err) throw err;
        console.log("Auction house horde collection inserted into Raiddon db");
      });
    });

  // Data to be inserted: Item classes
  const collection6 = client.db("raiddon-bnet-api").collection("item-classes");
  fetch(
    "https://us.api.blizzard.com/data/wow/item-class/index?namespace=static-classic-us&locale=en_US&access_token=" +
      access_token
  )
    .then((response) => response.json())
    .then((data) => {
      myobj = data.item_classes;
      collection6.insertMany(myobj, function (err, res) {
        if (err) throw err;
        console.log("Item classes collection inserted into Raiddon db");
      });
    });

  // Data to be inserted: Consumables
  const collection7 = client.db("raiddon-bnet-api").collection("consumables");
  fetch(
    "https://us.api.blizzard.com/data/wow/item-class/0?namespace=static-classic-us&locale=en_US&access_token=" +
      access_token
  )
    .then((response) => response.json())
    .then((data) => {
      myobj = data.item_subclasses;
      // Collection in which the data will be inserted
      collection7.insertMany(myobj, function (err, res) {
        if (err) throw err;
        console.log("Consumables collection inserted into Raiddon db");
      });
    });

  // Data to be inserted: Containers
  const collection8 = client.db("raiddon-bnet-api").collection("containers");
  fetch(
    "https://us.api.blizzard.com/data/wow/item-class/1?namespace=static-classic-us&locale=en_US&access_token=" +
      access_token
  )
    .then((response) => response.json())
    .then((data) => {
      myobj = data.item_subclasses;
      // Collection in which the data will be inserted
      collection8.insertMany(myobj, function (err, res) {
        if (err) throw err;
        console.log("Containers collection inserted into Raiddon db");
      });
    });

  // Data to be inserted: Weapons
  const collection9 = client.db("raiddon-bnet-api").collection("weapons");
  fetch(
    "https://us.api.blizzard.com/data/wow/item-class/2?namespace=static-classic-us&locale=en_US&access_token=" +
      access_token
  )
    .then((response) => response.json())
    .then((data) => {
      myobj = data.item_subclasses;
      collection9.insertMany(myobj, function (err, res) {
        if (err) throw err;
        console.log("Weapons collection inserted into Raiddon db");
      });
    });

  // Data to be inserted: Gems
  const collection10 = client.db("raiddon-bnet-api").collection("gems");
  fetch(
    "https://us.api.blizzard.com/data/wow/item-class/3?namespace=static-classic-us&locale=en_US&access_token=" +
      access_token
  )
    .then((response) => response.json())
    .then((data) => {
      myobj = data.item_subclasses;
      collection10.insertMany(myobj, function (err, res) {
        if (err) throw err;
        console.log("Gems collection inserted into Raiddon db");
      });
    });

  // Data to be inserted: Armor
  const collection11 = client.db("raiddon-bnet-api").collection("armor");
  fetch(
    "https://us.api.blizzard.com/data/wow/item-class/4?namespace=static-classic-us&locale=en_US&access_token=" +
      access_token
  )
    .then((response) => response.json())
    .then((data) => {
      myobj = data.item_subclasses;
      collection11.insertMany(myobj, function (err, res) {
        if (err) throw err;
        console.log("Armor collection inserted into Raiddon db");
      });
    });

  // Data to be inserted: Professions
  const collection12 = client.db("raiddon-bnet-api").collection("professions");
  fetch(
    "https://us.api.blizzard.com/data/wow/profession/index?namespace=static-us&locale=en_US&access_token=" +
      access_token
  )
    .then((response) => response.json())
    .then((data) => {
      myobj = data.professions;
      collection12.insertMany(myobj, function (err, res) {
        if (err) throw err;
        console.log("Professions collection inserted into Raiddon db");
      });
    });

  // Data to be inserted: Power types
  const collection13 = client.db("raiddon-bnet-api").collection("power-types");
  fetch(
    "https://us.api.blizzard.com/data/wow/power-type/index?namespace=static-classic-us&locale=en_US&access_token=" +
      access_token
  )
    .then((response) => response.json())
    .then((data) => {
      myobj = data.power_types;
      collection13.insertMany(myobj, function (err, res) {
        if (err) throw err;
        console.log("Power types collection inserted into Raiddon db");
      });
    });

  // Data to be inserted: Realms
  const collection14 = client.db("raiddon-bnet-api").collection("realms");
  fetch(
    "https://us.api.blizzard.com/data/wow/realm/index?namespace=dynamic-classic-us&locale=en_US&access_token=" +
      access_token
  )
    .then((response) => response.json())
    .then((data) => {
      myobj = data.realms;
      collection14.insertMany(myobj, function (err, res) {
        if (err) throw err;
        console.log("Realms collection inserted into Raiddon db");
      });
    });

  // Data to be inserted: Creature families
  const collection15 = client
    .db("raiddon-bnet-api")
    .collection("creature-families");
  fetch(
    "https://us.api.blizzard.com/data/wow/creature-family/index?namespace=static-classic-us&locale=en_US&access_token=" +
      access_token
  )
    .then((response) => response.json())
    .then((data) => {
      myobj = data.creature_families;
      collection15.insertMany(myobj, function (err, res) {
        if (err) throw err;
        console.log("Creature families collection inserted into Raiddon db");
      });
    });

  // Data to be inserted: Creature types
  const collection16 = client
    .db("raiddon-bnet-api")
    .collection("creature-types");
  fetch(
    "https://us.api.blizzard.com/data/wow/creature-type/index?namespace=static-classic-us&locale=en_US&access_token=" +
      access_token
  )
    .then((response) => response.json())
    .then((data) => {
      myobj = data.creature_types;
      collection16.insertMany(myobj, function (err, res) {
        if (err) throw err;
        console.log("Creature types collection inserted into Raiddon db");
      });
    });

  // Data to be inserted: Achievements
  const collection17 = client.db("raiddon-bnet-api").collection("achievements");
  fetch(
    "https://us.api.blizzard.com/data/wow/achievement/index?namespace=static-us&locale=en_US&access_token=" +
      access_token
  )
    .then((response) => response.json())
    .then((data) => {
      myobj = data.achievements;
      collection17.insertMany(myobj, function (err, res) {
        if (err) throw err;
        console.log("Achievements collection inserted into Raiddon db");
      });
    });

  // Data to be inserted: Mounts
  const collection18 = client.db("raiddon-bnet-api").collection("mounts");
  fetch(
    "https://us.api.blizzard.com/data/wow/mount/index?namespace=static-us&locale=en_US&access_token=" +
      access_token
  )
    .then((response) => response.json())
    .then((data) => {
      myobj = data.mounts;
      collection18.insertMany(myobj, function (err, res) {
        if (err) throw err;
        console.log("Mounts collection inserted into Raiddon db");
      });
    });

  // Data to be inserted: Character specializations
  const collection19 = client
    .db("raiddon-bnet-api")
    .collection("character-specializations");
  fetch(
    "https://us.api.blizzard.com/data/wow/playable-specialization/index?namespace=static-us&locale=en_US&access_token=" +
      access_token
  )
    .then((response) => response.json())
    .then((data) => {
      myobj = data.character_specializations;
      collection19.insertMany(myobj, function (err, res) {
        if (err) throw err;
        console.log(
          "Character specializations collection inserted into Raiddon db"
        );
      });
    });

  // Data to be inserted: Quest categories
  const collection20 = client
    .db("raiddon-bnet-api")
    .collection("quest-categories");
  fetch(
    "https://us.api.blizzard.com/data/wow/quest/category/index?namespace=static-us&locale=en_US&access_token=" +
      access_token
  )
    .then((response) => response.json())
    .then((data) => {
      myobj = data.categories;
      collection20.insertMany(myobj, function (err, res) {
        if (err) throw err;
        console.log(
          "Quest categories specializations collection inserted into Raiddon db"
        );
      });
    });

  // Data to be inserted: Areas
  const collection21 = client.db("raiddon-bnet-api").collection("areas");
  fetch(
    "https://us.api.blizzard.com/data/wow/quest/area/index?namespace=static-us&locale=en_US&access_token=" +
      access_token
  )
    .then((response) => response.json())
    .then((data) => {
      myobj = data.areas;
      collection21.insertMany(myobj, function (err, res) {
        if (err) throw err;
        console.log(
          "Areas specializations collection inserted into Raiddon db"
        );
      });
    });

  // Data to be inserted: Reputation factions
  const collection22 = client
    .db("raiddon-bnet-api")
    .collection("reputation-factions");
  fetch(
    "https://us.api.blizzard.com/data/wow/reputation-faction/index?namespace=static-us&locale=en_US&access_token=" +
      access_token
  )
    .then((response) => response.json())
    .then((data) => {
      myobj = data.factions;
      collection22.insertMany(myobj, function (err, res) {
        if (err) throw err;
        console.log(
          "Reputation factions specializations collection inserted into Raiddon db"
        );
      });
    });

  // Data to be inserted: Class talents
  const collection23 = client
    .db("raiddon-bnet-api")
    .collection("class-talents");
  fetch(
    "https://us.api.blizzard.com/data/wow/talent-tree/index?namespace=static-us&locale=en_US&access_token=" +
      access_token
  )
    .then((response) => response.json())
    .then((data) => {
      myobj = data.talent_trees;
      collection23.insertMany(myobj, function (err, res) {
        if (err) throw err;
        console.log(
          "Class talents specializations collection inserted into Raiddon db"
        );
      });
    });

  // Data to be inserted: Titles
  const collection24 = client.db("raiddon-bnet-api").collection("titles");
  fetch(
    "https://us.api.blizzard.com/data/wow/title/index?namespace=static-us&locale=en_US&access_token=" +
      access_token
  )
    .then((response) => response.json())
    .then((data) => {
      myobj = data.titles;
      collection24.insertMany(myobj, function (err, res) {
        if (err) throw err;
        console.log(
          "Titles specializations collection inserted into Raiddon db"
        );
      });
    });
});
});
scheduledJobFunction.start();
};
