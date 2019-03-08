const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(process.env.PORT || 4000, function(){
    console.log('Your node js server is running');
});





// Middleware
//app.use(express.static(__dirname + '/public'));
//app.listen(3000, function(){
//  console.log("listen on ")
//});

//app.post('/', function(req, res) {
//  res.end('Success!!!');
//});
