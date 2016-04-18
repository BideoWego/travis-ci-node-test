var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.send('Hello Travis CI!');
});


if (require.main === module) {
  var port = app.get('port');
  app.listen(port, function() {
    console.log('Serving at http://localhost:' + port);
  });
} else {
  module.exports = app;
}




