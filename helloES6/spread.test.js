const spread = require('./spread');

console.log('We are tring to give variable number of inputs to the program');

test('The minimum of [0,64,40,78,46,77,40,77] is 0',function(){
    var input = [0,64,40,78,46,77,40,77];
    var output = 'The minimum of 0,64,40,78,46,77,40,77 is 0';
    expect(spread(0,64,40,78,46,77,40,77)).toEqual(output);
});