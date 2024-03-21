var express = require("express");
var app = express();
app.get('/profile/:username', (req, res) => {
    const username = req. params.username; 
   // aman
    res.send('Profile page '+username); 
   });
   app.get('/profile/:username/:country', (req, res) => {     
    const username = req. params.username;   
    country = req.params.country;    
    res.send('Profile page'); 
});        
app.get('/profile/:username/:country', (req, res) => { 
    const { username, country } = req.params; 
    res.send('Profile page');                          
});
//Quer String
app.get('/profile', (req, res) => {
    const name = req.query.name;
    const age = req.query['age'];
    console.log(name, age); // This will log the name and age
    res.send('Query parameters extracted');
});
app.listen(5000);
