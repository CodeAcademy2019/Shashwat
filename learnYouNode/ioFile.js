const fs = require('fs');

const numberOfNewLines = () => {
  const filePath = process.argv[2];
  const buf = fs.readFileSync(filePath);
  const str = buf.toString();
  const numLines = str.split('\n').length - 1;
  return numLines;
};
numberOfNewLines();
module.exports = numberOfNewLines;
