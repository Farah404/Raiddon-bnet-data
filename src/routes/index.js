module.exports = (app) => {
  app.use("/", require("./app"));
  app.use("/", require("./app/index"));

  app.use("/api", require("./app/areas"));
  app.use("/api", require("./app/achievements"));
  app.use("/api", require("./app/achievementsCategories"));
  app.use("/api", require("./app/armor"));
  app.use("/api", require("./app/auctionHouseIndex"));
  app.use("/api", require("./app/allianceAuctionHouse"));
  app.use("/api", require("./app/hordeAuctionHouse"));
  app.use("/api", require("./app/characterSpecialisation"));
  app.use("/api", require("./app/classTalents"));
  app.use("/api", require("./app/consumables"));
  app.use("/api", require("./app/containers"));
  app.use("/api", require("./app/creatureFamilies"));
  app.use("/api", require("./app/creatureTypes"));
  app.use("/api", require("./app/professions"));
  app.use("/api", require("./app/questCategories"));
  app.use("/api", require("./app/realms"));
  app.use("/api", require("./app/reputationFactions"));
  app.use("/api", require("./app/titles"));
  app.use("/api", require("./app/weapons"));
  app.use("/api", require("./app/itemClasses"));
  app.use("/api", require("./app/mounts"));
  app.use("/api", require("./app/playableRaces"));
  app.use("/api", require("./app/playableClasses"));
  app.use("/api", require("./app/powerTypes"));
  app.use("/api", require("./app/racePictures"));

  app.use("*", function (req, res) {
    res.redirect("/");
  });
};
