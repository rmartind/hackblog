const http = require('http');
const fs= require('fs');

const hostname = '127.0.0.1';
const port = '8000';

const server = http.createServer((req, res) => {
  console.log('Request made: ' + req.url);

  if(req.url === '/home' || req.url === '/') {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    fs.createReadStream(__dirname + '/index.html').pipe(res);
  } else if (req.url === '/about') {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    fs.createReadStream(__dirname + '/about.html').pipe(res);
  }  else if (req.url === '/contact') {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    fs.createReadStream(__dirname + '/contact.html').pipe(res);
  }  else if (req.url === '/comment') {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    fs.createReadStream(__dirname + '/comment.html').pipe(res);
  } else {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    fs.createReadStream(__dirname + '/404.html').pipe(res);
  }// 404 Not Found



});

server.listen(port, hostname, () => {
  console.log(`Server up at http://${hostname}.${port}`);
});
