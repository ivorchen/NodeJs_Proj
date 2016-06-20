// function printHello(){
//     var os=require("os");
//     console.log( "Hello, World!");
//     console.log(os.hostname());
//     console.log(os.type());
//     console.log(os.totalmem()/(1024*1024));
//     console.log(os.freemem()/(1024*1024));
// }
// // Now call above function after 2 seconds
// setTimeout(printHello, 2000);
var http = require('http');
var fs = require('fs');
var url = require('url');
let timer=30000;

// Create a server
http.createServer( function (request, response) {
   // Parse the request containing file name
   var pathname = url.parse(request.url).pathname;

   // Print the name of the file for which request is made.
   console.log("Request for " + pathname + " received.");

   // Read the requested file content from file system
   fs.readFile(pathname.substr(1), function (err, data) {
      if (err) {
         console.log(err);
         // HTTP Status: 404 : NOT FOUND
         // Content Type: text/plain
         response.writeHead(404, {'Content-Type': 'text/html'});
         var not_found="<html><head><title></title></head><body>404 NOT FOUND!</body></html>";
         response.write(not_found);
      }else{
         //Page found
         // HTTP Status: 200 : OK
         // Content Type: text/plain
         response.writeHead(200, {'Content-Type': 'text/html'});

         // Write the content of the file to response body
         response.write(data.toString());
      }
      // Send the response body
      response.end();
   });
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
