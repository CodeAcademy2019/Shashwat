function defaultArguments2(msg,importance = msg.length){
    var imp = '!';
    var result = msg + imp.repeat(importance);
    return result;
}

module.exports = defaultArguments2;