const arrowFunction1 = require('./arrowFunction1');

console.log('Taking first characters of the different strings and concatenating them.');

test('The output should be "cr"',function(){
    var input1 = 'cat';
    var input2 = 'rat';
    var output = 'cr';
    expect(arrowFunction1(input1,input2)).toEqual('cr');
});

test('The output should be "12"',function(){
    var input1 = '135';
    var input2 = '246';
    var output = '12';
    expect(arrowFunction1(input1,input2)).toEqual('12');
});

test('The output should be "  "',function(){
    var input1 = '  ';
    var input2 = '  ';
    var output = '  ';
    expect(arrowFunction1(input1,input2)).toEqual('  ');
});