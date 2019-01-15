const spread = require('./spread');

console.log('We are tring to give variable number of inputs to the program');

test('The minimum of [0,64,40,78,46,77,40,77] is 0',function(){
    var output = 'The minimum of 0,64,40,78,46,77,40,77 is 0';
    expect(spread(0,64,40,78,46,77,40,77)).toEqual(output);
});

test('The minimum of [78,46,77,40,77] is 40',function(){
    var output = 'The minimum of 78,46,77,40,77 is 40';
    expect(spread(78,46,77,40,77)).toEqual(output);
});

test('The minimum of [-1,64,40,78,46] is -1',function(){
    var output = 'The minimum of -1,64,40,78,46 is -1';
    expect(spread(-1,64,40,78,46)).toEqual(output);
});

test('The minimum of [a,64,40,78,46] is 40',function(){
    var output = 'The minimum of a,64,40,78,46 is 40';
    expect(spread(a,64,40,78,46)).toEqual(output);
});