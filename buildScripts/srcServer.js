import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

const port = 2000; //set port
const app = express(); //create instance of express
const compiler = webpack(config); //call webpack and pass reference to config

//tell express other things we want to use
//so we want express to use our webpack middleware, and
//pass reference to compiler we declared above
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo:true,
  publicPath:config.output.publicPath
}));


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
