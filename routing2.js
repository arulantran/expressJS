const express = require('express');
const app = express();
const port = 3000;
// Middleware for '/example' route
app.all('/example', (req, res, next) => {
  console.log('Middleware for /example route');
  next(); // Pass control to the next handler
});
// GET request handler for '/example' route
app.get('/example', (req, res) => {
  res.send('GET request received for /example');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
