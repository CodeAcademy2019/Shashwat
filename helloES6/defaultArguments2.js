function defaultArguments2(msg,importance = 'not provided'){
    var imp = '!';
    if(importance==='not provided'){
        importance = msg.length;
    }
    var result = msg + imp.repeat(importance);
    return result;
}

module.exports = defaultArguments2;