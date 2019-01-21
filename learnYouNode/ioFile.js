const fs = require('fs');

const numberOfLines = (data) => {
  const numLines = data.toString().split('\n').length - 1;
  return numLines;
};

const numberOfNewLines = () => {
  const filePath = process.argv[2];
  const buf = fs.readFileSync(filePath);
  return numberOfLines(buf);
};
module.exports = { numberOfNewLines, numberOfLines };
