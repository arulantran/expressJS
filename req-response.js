const express = require('express');
const app = express();
app.get('/', (request, response) => {
    response.send('GET request to the homepage')
  })
userdata = [
    {id:1, name:' Coder1' },
    {id:2, name:' Coder2' },
    {id:3, name:' Coder3' },
];
app.get('/users',(req, res) => {
    res.json(userdata);
})
app.listen(5000);
