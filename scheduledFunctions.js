const CronJob = require("node-cron");
const fetch = require ("node-fetch");

const dbConfig = require("./src/config/db_config");
const mongoose = require("mongoose");


exports.initScheduledJobs = () => {
  const scheduledJobFunction = CronJob.schedule("* * * * *", () => {
    console.log("Fetching WOw playable races!");
    fetch("https://us.api.blizzard.com/data/wow/playable-race/index?namespace=static-classic-us&locale=en_US&access_token=EUgHsuwu21aa1HjM47ckebNjUuPyWwQhYg")
    .then(response=> response.json())
    .then(data => {
        console.table(data.races);
    })
  });
  scheduledJobFunction.start();
}

// exports.initScheduledJobs = () => {
//   const scheduledJobFunction = CronJob.schedule("* * * * *", () => {
//     console.log("Fetching WOw playable classes!");
//     fetch("https://us.api.blizzard.com/data/wow/playable-class/index?namespace=static-classic-us&locale=en_US&access_token=EUgHsuwu21aa1HjM47ckebNjUuPyWwQhYg")
//     .then(response=> response.json())
//     .then(data => {
//         console.table(data.classes);
//     })
//   });
//   scheduledJobFunction.start();
// }
