
function templateStrings(name){
    var result = `Hello, ${name}!\nYour name lowercased is "${name.toLowerCase()}".`;
    console.log(result);
    return result;
}

module.exports = templateStrings;
