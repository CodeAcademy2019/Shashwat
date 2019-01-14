function rest(...args){
    var sum = args.reduce((totalValue,currentVal) => totalValue+currentVal);
    var average = sum/args.length;
    return average;
}


module.exports = rest;