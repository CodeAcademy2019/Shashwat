const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (req.url === '/hello') {
    res.write('Hello!');
  } else if (req.url === '/world') {
    res.write('World!');
  }
  res.end();
}).listen(8081);
