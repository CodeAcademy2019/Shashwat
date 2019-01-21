const fs = require('fs');
const path = require('path');

const filterNamewithExt = (list, extension) => {
  return list.filter(word => path.extname(word) === '.'.concat(extension));
};
const filteredLs = (pathToFile, extension, callback) => {
  fs.readdir(pathToFile, (err, items) => {
    if (err) {
      return callback(err);
    }
    callback(null, filterNamewithExt(items, extension));
  });
};
module.exports = filteredLs;
