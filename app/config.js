var express = require('express'),
    path = require('path'),
    favicon = require('static-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    stylus = require('stylus'),
    nib = require('nib');

module.exports = function (app) {
    app.config = require('konphyg')(__dirname + '/../')('config');
    app.set('views', path.join(__dirname, 'server/views'));
    app.set('view engine', 'jade');
    app.use(favicon());
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded());
    app.use(cookieParser());
    app.use(stylus.middleware({
        src: path.join(__dirname, 'server/views'), // .styl files are located in `views/stylesheets`
        dest: path.join(__dirname, 'server/public'), // .styl files are located in `views/stylesheets`
        compile: function (str, path) {
            return stylus(str)
            .set('filename', path)
            .set('compress', true)
            .use(nib());
        }
    }));
    app.use(express['static'](path.join(__dirname, 'server/public')));
    app.use(app.router);
};
