require('dotenv').config();
const app = require('./src/app');
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`RAIDDON listening on ${port}!`);
});

//Generating error page
app.use(async (res, req, next) => {
  next(createError.NotFound())
})
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.send({
      error: {
          status: err.status ||500,
          message: err.message
      }
  })
})
