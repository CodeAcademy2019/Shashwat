function parsedPromised(json) {
    return new Promise(function(resolve, reject) {
      try {
        resolve(JSON.parse(json))
      }
      catch(error) {
        reject('Unable to parse JSON Object')
      }
    })
  }
  
  parsedPromised(process.argv[2])
  .then(console.log)
  .catch(console.log)

  module.exports = parsedPromised;