const http = require('http');
const url = require('url');

const parseTime = (date) => {
  const jsonObject = {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
  };
  return jsonObject;
};
const unixTime = (date) => {
  const jsonObject = {
    unixtime: date.getTime(),
  };
  return jsonObject;
};
const processTimeRequest = (request, response) => {
  if (request.method === 'GET') {
    const parsed = url.parse(request.url, true);
    if (parsed.pathname === '/api/parsetime') {
      response.writeHead(200, { 'Content-Type': 'application/json'});
      const date = new Date(parsed.query.iso);
      response.write(JSON.stringify(parseTime(date)));
    } else if (parsed.pathname === '/api/unixtime') {
      const date = new Date(parsed.query.iso);
      response.writeHead(200, { 'Content-Type': 'application/json' });
      response.write(JSON.stringify(unixTime(date)));
    }
    response.end();
  }
};

const getServer = http.createServer(processTimeRequest);
getServer.listen(process.argv[2]);
