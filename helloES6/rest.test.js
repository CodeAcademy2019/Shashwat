const rest = require('./rest');


test('average(1, 1, 2, 3, 5, 8, 13, 21, 34, 55) returns 14.3',function(){
    var output = 14.3;
    expect(rest(1, 1, 2, 3, 5, 8, 13, 21, 34, 55)).toEqual(output);
});

test('average(1, 2.1, 3.3, 4.4, 5.2) returns 3.2',function(){
    var output = 3.2;
    expect(rest(1, 2.1, 3.3, 4.4, 5.2)).toEqual(output);
});

test('average(a, b, c, d) returns  Nan',function(){
    var output = ' ';
    expect(rest('a','b','c','d')).toEqual(NaN);
});
