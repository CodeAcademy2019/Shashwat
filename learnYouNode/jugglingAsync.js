const http = require('http');

const url1 = process.argv[2];
const url2 = process.argv[3];
const url3 = process.argv[4];
let responseReceived = 0;
let finalQueue = [];
const print = (responseArray) => {
  console.log(responseArray[0]);
  console.log(responseArray[1]);
  console.log(responseArray[2]);
};
http.get(url1, (response) => {
  let result = '';
  response.setEncoding('utf8');
  response.on('data', (data) => {
    result += data;
  });
  response.on('end', () => {
    finalQueue[0] = result;
    responseReceived += 1;
    if (responseReceived === 3) {
      print(finalQueue);
    }
  });
});
http.get(url2, (response) => {
  let result = '';
  response.setEncoding('utf8');
  response.on('data', (data) => {
    result += data;
  });
  response.on('end', () => {
    finalQueue[1] = result;
    responseReceived += 1;
    if (responseReceived === 3) {
      print(finalQueue);
    }
  });
});
http.get(url3, (response) => {
  let result = '';
  response.setEncoding('utf8');
  response.on('data', (data) => {
    result += data;
  });
  response.on('end', () => {
    finalQueue[2] = result;
    responseReceived += 1;
    if (responseReceived === 3) {
      print(finalQueue);
    }
  });
});
