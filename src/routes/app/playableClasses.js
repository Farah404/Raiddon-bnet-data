var express = require("express");
var router = express.Router();
const dbo = require('../../config/db_config');


router.route("/playableClasses").get(async function(req, res){
  const dbConnect = dbo.getDb();


dbConnect
.collection('playable-classes')
.find({})
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching listings!");
     } else {
        res.json(result);
        console.table(result)
      }
    });
});


module.exports = router;
