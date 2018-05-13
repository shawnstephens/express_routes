const port = 3000,
  express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  homeController = require('./controllers/homeController');

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(bodyParser.json());

app.use(homeController.logRequestPaths);

app.post('/', homeController.logPostBody);

app.get( '/items/:vegetable', homeController.sendReqParam );

app.listen(3000, () => {
  console.log(`Server running on port: ${port}`);
});