const http = require('http');

const httpGetRequest = (callback) => {
  const url = process.argv[2];
  http.get(url, (response) => {
    response.setEncoding('utf8');
    response.on('data', (data) => {
      console.log(data);
      callback(data);
    });
  }).on('error', (error) => {
    console.log(error.msg);
    callback(error.msg);
  });
};

module.exports = httpGetRequest;