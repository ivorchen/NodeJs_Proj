var express = require('express');
var fs=require('fs');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello World, from ivor');
})
app.get('/index.html', function (req, res) {
   res.send('Hello World, from ivor');
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
