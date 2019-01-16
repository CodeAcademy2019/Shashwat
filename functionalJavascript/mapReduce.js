module.exports = function arrayMap(arr, fn) {
    return arr.reduce(function (result, currentValue) {
        return result.concat([fn(currentValue)]);
    }, []);
  }