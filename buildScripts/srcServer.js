var express = require('express');
var path = require('path');
var open = require('open');

var port = 2000; //set port
var app = express(); //create instance of express

//Tell express which routes it should handle
//any references to the root, should be handled by this function
app.get ('/', function (request,response){
  response.sendFile(path.join(__dirname,'../src/index.html'));
});

//Tell express to listen on the port we defined above
app.listen(port,function(err){
  if(err){
    console.log(err);
  } else {
    open ('http://localhost:' + port);
  }
});

// in console type node buildScripts/srcServer.js
