var routes = require('./routes'),
    example = require('./utils/example');

module.exports = function (app) {

    /// params

    // example param validation
    app.param('hash', function (req, res, next, hash) {
      if(/^[0-9a-f]{5,40}$/.test(hash)) {
        next();
      } else {
        next(new Error('Invalid commit hash'));
      }
    });

    /// routes

    // index
    app.get('/', routes.index);

    // basic routing example
    app.get('/example', example.go);

    // routing example with param
    app.get('/example/:hash', example.go);

    /// catch 404 and forwarding to error handler
    app.use(function(req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });


    /// error handlers

    // development error handler
    // will print stacktrace
    if (app.get('env') === 'development') {
        app.use(function(err, req, res/*, next*/) {
            res.render('error', {
                message: err.message,
                error: err
            });
        });
    }

    // production error handler
    // no stacktraces leaked to user
    app.use(function(err, req, res/*, next*/) {
        res.render('error', {
            message: err.message,
            error: {}
        });
    });
};
