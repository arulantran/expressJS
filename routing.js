var express = require("express");
var app = express();
app.get('/', (request, response) => {
    response.send('GET request to the homepage')
  })
app.post('/', (request, response) => {
    response.send('POST request to the homepage')
  })
  app.get('/example', (req, res) => {
    const { query } = req;
    console.log(query); // This will log the query parameters object
    res.send('Query parameters extracted');
});

app.listen(5000);
