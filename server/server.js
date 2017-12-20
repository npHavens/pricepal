var app = require('./server-config.js');
var db = require('../db/config.js');

var port = 3000;

app.listen(port);

console.log('Server now listening on port ' + port);


