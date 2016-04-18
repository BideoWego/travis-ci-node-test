var express = require('express');
var app = express();


app.get('/', function(request, response) {
  response.send('Hello World!');
});


if (require.main === module) {
  app.listen(3000, function() {
    console.log('Serving at http://localhost:3000');
  });
} else {
  module.exports = app;
}




