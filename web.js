var express = require("express");
var app = express();

var path = 'web';

app.use(express.logger());

app.use(express.static(path));

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});