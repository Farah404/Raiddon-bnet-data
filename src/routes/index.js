module.exports = (app) => {
  app.use('/', require('./app'));
  app.use('/', require('./app/index'))
  
  app.use('/api', require('./app/areas'))
  app.use('/api', require('./app/achievements'))
  app.use('/api', require('./app/achievementsCategories'))
  app.use('/api', require('./app/armor'))
  app.use('/api', require('./app/auctionHouseIndex'))
  app.use('/api', require('./app/allianceAuctionHouse'))
  app.use('/api', require('./app/hordeAuctionHouse'))
  app.use('/api', require('./app/characterSpecialisation'))
  app.use('/api', require('./app/classTalents'))
  app.use('/api', require('./app/consumables'))
  app.use('/api', require('./app/containers'))
  app.use('/api', require('./app/creatureFamilies'))
  app.use('/api', require('./app/creatureTypes'))
  app.use('/api', require('./app/professions'))
  app.use('/api', require('./app/questCategories'))
  app.use('/api', require('./app/realms'))
  app.use('/api', require('./app/reputationFactions'))
  app.use('/api', require('./app/titles'))
  app.use('/api', require('./app/weapons'))
  app.use('/api', require('./app/itemClasses'))
  app.use('/api', require('./app/mounts'))
  app.use('/api', require('./app/playableRaces'))
  app.use('/api', require('./app/playableRaces'))
  app.use('/api', require('./app/powerTypes'))
 
  app.use('*',function (req, res) {
    res.redirect('/');
        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    
        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    
        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);
    
        // Pass to next layer of middleware
        next();

});
};
