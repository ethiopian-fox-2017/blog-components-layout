'use strict'
//All Dependencies
const express = require('express'),
      path = require('path'),
      logger = require('morgan'),
      cookieParser = require('cookie-parser'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      cors= require('cors'),

      //All Route Files
      routes = require('./routes/index'),
      article = require('./routes/apiArticle'),

      //Express Instance
      app = express();

//load environment variables with dotenv
require('dotenv').config()

//Database connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/blog', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Database connected!');
  }
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(cors())
app.use('/', routes);
app.use('/api/article', article);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: {}
  });
});


module.exports = app;
