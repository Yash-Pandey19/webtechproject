const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the project directory
app.use(express.static(__dirname));

// Define routes for your HTML pages
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/intro.html'));
});
//for portfolio website
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/webtechproject/portfolio.html'));
  });
//
// Repeat the above for each HTML page in your project

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
