const http = require('http');

const url = [process.argv[2], process.argv[3], process.argv[4]];
let finalQueue = [];
let responseReceived = 0;

const print = (responseArray) => {
  for (let i = 0; i < 3; i += 1) {
    console.log(responseArray[i]);
  }
};
const httpGetRequest = (urlAddress, indexOfResult) => {
  http.get(urlAddress, (response) => {
    let result = '';
    response.setEncoding('utf8');
    response.on('data', (data) => {
      result += data;
    });
    response.on('end', () => {
      finalQueue[indexOfResult] = result;
      responseReceived += 1;
      if (responseReceived === 3) {
        print(finalQueue);
      }
    });
  });
};
for (let i = 0; i < 3; i += 1) {
  httpGetRequest(url[i], i);
}
