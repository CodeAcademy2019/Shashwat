const arrowFunction1 = require('./arrowFunction1');

console.log('Taking first characters of the different strings and concatenating them.');

test('The output should be "cr"',function(){
    //var input = ['cat','rat'];
    var input1 = 'cat';
    var input2 = 'rat';
    var output = 'cr';
    expect(arrowFunction1(input1,input2)).toEqual('cr');
});