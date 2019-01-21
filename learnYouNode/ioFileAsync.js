const fs = require('fs');

let callback = (data) => {
  console.log(data);
  return data;
};

const getNumberOfLines = (data) => {
  const numLines = data.toString().split('\n').length - 1;
  return numLines;
};

const numberOfNewLines = (callback) => {
  const filePath = process.argv[2];
  fs.readFile(filePath, (error, contents) => {
    if (error) {
      callback('File Could Not be Read');
    } else {
      callback(getNumberOfLines(contents));
    }
  });
};
module.exports = { numberOfNewLines, getNumberOfLines };
