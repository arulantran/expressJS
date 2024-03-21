const express = require('express');
const app = express();
const path = require('path');
app.set('view engine', 'ejs');
// Send a simple response
app.get('/send', (req, res) => {
    res.send('Hello, world!');
});
// Download a file
app.get('/download', (req, res) => {
    // Specify the path to a file you want to download
    res.download(path.join(__dirname, 'logo.png'));
});
// Redirect to another URL
app.get('/redirect', (req, res) => {
    res.redirect('https://example.com');
});

// Render a view template
app.get('/render', (req, res) => {
    // Render a view (for this to work you need to set up a view engine)
    res.render('index', { title: 'Express Demo' });
});
// Send a file
app.get('/sendFile', (req, res) => {
    // Specify the path to the file
    res.sendFile(path.join(__dirname, 'logo.png'));
});
// Send a status
app.get('/sendStatus', (req, res) => {
    // Send a 404 status code
    res.sendStatus(404);
});
// End the response
app.get('/end', (req, res) => {
    res.end();
});
// Send a JSON response
app.get('/json', (req, res) => {
    res.json({ message: 'This is a JSON response' });
});

// Send a JSONP response
app.get('/jsonp', (req, res) => {
    // The callback query parameter is used to determine the callback name
    res.jsonp({ message: 'This is a JSONP response' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
