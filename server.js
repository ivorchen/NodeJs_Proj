var express = require('express');
var fs=require('fs');
var app = express();

//read data from file
fs.readFile('./data.txt',function(err,file_content){
  if(err){
    console.log("Can't read file\n");
    throw err;
  }
  else {
    console.log("Reading file\n",file_content.toString());
  }
});

//this app use express module to create an restful api project
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
