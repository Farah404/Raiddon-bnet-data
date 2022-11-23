module.exports = (app) => {
  app.use('/', require('./app'));
  app.use('/api', require('./app/areas'))
  app.use('/', require('./app/index'))
  // app.use('/crud', require('./app/crud/routes'))
  // app.use('/api', require('./app/api'));
  // app.use('/utils', require('./app/utils'));
  app.use('*',function (req, res) {
    res.redirect('/');
});
};
