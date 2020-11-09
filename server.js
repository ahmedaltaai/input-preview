const express = require('express');
const path = require('path');

const app = express();

const mainWebsite = express.static(path.join(__dirname, '/dist'));

app.use(mainWebsite);

app.get('/', (req, res) => {
  res.render(path.join(__dirname, '/dist'));
});


const port = process.env.PORT || 8080;

app.listen(port);

console.log(`Listening on port: ${port}`);
