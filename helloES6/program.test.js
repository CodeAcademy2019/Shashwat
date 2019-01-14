const program = require('./program');

console.log('Testing Hello World program');

test('The output should be "HELLO ES6"',function(){
    expect(program()).toEqual('HELLO ES6')
});