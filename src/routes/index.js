module.exports = (app) => {
  app.use('/', require('./app'));
  // app.use('/crud', require('./app/crud/routes'))
  // app.use('/api', require('./app/api'));
  // app.use('/utils', require('./app/utils'));
};
