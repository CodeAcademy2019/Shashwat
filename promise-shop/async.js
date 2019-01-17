var async = new Promise(function (fulfill, reject) {
    fulfill('PROMISE VALUE');
});

async.then(console.log,null);
console.log('MAIN PROGRAM');

module.exports = async;