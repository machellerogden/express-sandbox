var express = require('express'),
    app = express();

require('./app/config')(app);
require('./app/server/router')(app);

module.exports = app;
