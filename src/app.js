var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var utils = require('./utils');

var indexRouter = require('./routes/index');
var addRouter = require('./routes/add');
var postsRouter = require('./routes/api/posts');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/add', addRouter);
app.use('/api/posts', postsRouter);

utils.connectMongoDB();

module.exports = app;
