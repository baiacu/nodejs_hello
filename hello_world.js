var express = require('express');

var app = express();

app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('hello_world', { title: 'Hey', message: 'Hello there!'});
});

app.listen(process.env.PORT);