const net = require('net');

const portNumber = process.argv[2];
const server = net.createServer((socket) => {
  const dateObject = new Date();
  const time = dateObject.toTimeString().slice(0, 5);
  const date = dateObject.toISOString().slice(0, 10);
  const result = date.concat(' ', time, '\n');
  socket.end(result);
});
server.listen(portNumber);
