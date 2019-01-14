const templateStrings = require('./templateStrings');

console.log('Testing the template Strings in ES6 format.');

test('The output should first greet the user and then display his name in lowercase',function(){
    expect(templateStrings('Domenic')).toEqual('Hello, Domenic!\nYour name lowercased is "domenic".')
});