module.exports = (app) => {
  app.use('/welcome', require('./app'));
  // app.use('/api', require('./app/api'));
  // app.use('/utils', require('./app/utils'));
};
