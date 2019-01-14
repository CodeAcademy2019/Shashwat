const arrowFunction1 = require('./arrowFunction1');

console.log('Taking first characters of the different strings and concatenating them.');

test('The output should be "cr"',function(){
    var input = ['cat','rat'];
    expect(arrowFunction1(input)).toEqual('cr');
});