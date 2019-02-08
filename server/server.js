const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '../dist')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

app.get('/search', function(req, res) {
  
  // reqObj = req.body;

  res.send('Hello Search')
})

app.listen(9000, () => {
  console.log("running on 9000")
});