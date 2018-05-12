const port = 3000,
  express = require('express'),
  app = express();

app.get('/items/:vegetable', (req, res) => {
  let veg = req.params.vegetable;
  res.send(`This is the page for ${veg}`);
});

app.listen(3000, () => {
  console.log(`Server running on port: ${port}`);
});