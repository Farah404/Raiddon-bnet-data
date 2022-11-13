const router = require('express').Router();
const { BlizzAPI } = require('blizzapi');

// const fetch = require('node-fetch');
// async function start() {
// const response = await fetch('https://us.api.blizzard.com/data/wow/playable-race/index?namespace=static-classic-us&locale=en_US&access_token=EUW5nbYYRvi27pVlj2KksCC7OmKbR9DvVXhttps://api.github.com/users/github');
// const data = await response.json();
// console.log(data);
// }

/** Regions */
router.get('/getAllRegions', (req, res) => {
  res.json(BlizzAPI.getAllRegions());
});

router.get('/getAllRegionIds', (req, res) => {
  res.json(BlizzAPI.getAllRegionIds());
});

router.get('/getAllRegionNames', (req, res) => {
  res.json(BlizzAPI.getAllRegionNames());
});

router.get('/getRegionNameById/:regionId', (req, res) => {
  const { regionId } = req.params;
  res.json(BlizzAPI.getRegionNameById(regionId));
});

router.get('/getRegionIdByName/:regionName', (req, res) => {
  const { regionName } = req.params;
  res.json(BlizzAPI.getRegionIdByName(regionName));
});

router.get('/validateRegionId/:regionId', (req, res) => {
  const { regionId } = req.params;
  res.json(BlizzAPI.validateRegionId(regionId));
});

router.get('/validateRegionName/:regionName', (req, res) => {
  const { regionName } = req.params;
  res.json(BlizzAPI.validateRegionName(regionName));
});

/** Locales */

router.get('/getAllLocales', (req, res) => {
  res.json(BlizzAPI.getAllLocales());
});

router.get('/getAllLocaleNames', (req, res) => {
  res.json(BlizzAPI.getAllLocaleNames());
});

router.get('/getLocalesByRegionId/:regionId', (req, res) => {
  const { regionId } = req.params;
  res.json(BlizzAPI.getLocalesByRegionId(regionId));
});

router.get('/checkIfLocaleLooksValid/:locale', (req, res) => {
  const { locale } = req.params;
  res.json(BlizzAPI.checkIfLocaleLooksValid(locale));
});

router.get('/validateLocale/:locale', (req, res) => {
  const { locale } = req.params;
  res.json(BlizzAPI.validateLocale(locale));
});

router.get('/isLocaleValidForRegionId/:locale/:regionId', (req, res) => {
  const { locale, regionId } = req.params;
  res.json(BlizzAPI.isLocaleValidForRegionId(locale, regionId));
});

module.exports = router;
