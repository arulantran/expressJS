const express = require('express');
const app = express();
app.use(express.json());
app.post('/submit-form', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  //Do some processing and validation on the data
  //Store the data in a database or send it as an email
  res.send('Form submitted successfully!');
});

app.listen(3000, () => console.log('Server running on port 3000'));
