const fs = require('fs');
const path = require('path');

let callback = (data => data);

const filterNamewithExt = (list, extension) => list.filter(word => path.extname(word) === '.'.concat(extension));
const filteredLs = (pathToFile, extension, callback) => {
  fs.readdir(pathToFile, (err, items) => {
    if (err) {
      return callback(Error('error listing files in directory'));
    }
    callback(null, filterNamewithExt(items, extension));
  });
};
module.exports = { filteredLs, filterNamewithExt };
