
function templateStrings(){
    var name = process.argv[2];
    var result = `Hello, ${name}!\nYour name lowercased is "${name.toLowerCase()}".`;
    console.log(result);
    return result;
}
templateStrings();

module.exports = templateStrings;
