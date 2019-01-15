const arrowAndThis = require('./arrowAndThis');

console.log('Testing the arrow function to replace bind function');

test('The output should be "Ouch!"',function(){
    expect(arrowAndThis()).toEqual('Ouch!');
})

test('The output should be "Ouch!"',function(){
    expect(arrowAndThis('Some Random Argument')).toEqual('Ouch!');
})

test('The output should be "Ouch!"',function(){
    expect(arrowAndThis(" ")).toEqual('Ouch!');
})