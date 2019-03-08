const express = require('express');
const app = express();

// Middleware
app.use(express.static(__dirname + '/public'));
app.listen(3000, function(){
  console.log("listen on ")
});

app.post('/', function(req, res) {
  res.end('Success!!!');
});
