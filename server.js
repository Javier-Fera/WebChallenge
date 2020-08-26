var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname)));
app.use("/style", express.static(__dirname));
app.use("/assets", express.static(__dirname + '/assets'));
app.use("/script", express.static(__dirname + '/script'));

// viewed at based directory http://localhost:8080/
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + 'views/index.html'));
});

// add other routes below
app.get('/results', function (req, res) {
  res.sendFile(path.join(__dirname + 'results.html'));
});

app.listen(process.env.PORT || 8080);