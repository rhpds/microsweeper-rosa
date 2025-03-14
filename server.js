var express = require("express");
var path = require('path');

var app = express();

var __dirname = path.resolve();

var staticPath = path.join(__dirname, '/static');
app.use(express.static(staticPath));

app.listen(8080, function() {
  console.log('listening on port 8080');
});
