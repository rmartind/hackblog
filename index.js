var express = require('express');
const port = 8000;

var server = express();

server.set('view engine', 'ejs');
server.use('/public', express.static('public'));

server.get('/', (req, res) => {
  res.render('index');
});

server.get('/about', (req, res) => {
  res.render('about');
});

server.get('/contact', (req, res) => {
  res.render('contact');
});

server.get('/comment', (req, res) => {
  res.render('comment');
});


server.listen(port);
