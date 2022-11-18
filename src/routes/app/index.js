const router = require('express').Router();

router.get('/', (req, res) => {
  return res.json({
    message: "Welcome Raiddon: Fetching Battlne.net API and storing it into MongoDB",
  });
});

module.exports = router;
