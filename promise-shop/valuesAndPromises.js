const attachTitle = (firstArg) => {
    return 'DR. '+ firstArg;
}

const fulfilledPromise = Promise.resolve('MANHATTAN').then(attachTitle)
fulfilledPromise.then(console.log);

module.exports = fulfilledPromise;