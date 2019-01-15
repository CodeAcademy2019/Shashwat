const templateStrings = require('./templateStrings');

var input = ['Domenic','taylor','','123'];
var output = ['Hello, Domenic!\nYour name lowercased is "domenic".',
'Hello, taylor!\nYour name lowercased is "taylor".','Hello,  !\nYour name lowercased is " ".',
'Hello, 123!\nYour name lowercased is "123".'];

var numberOfTests = output.length;
for(var i=0;i<numberOfTests;i++){
    test('The output should first greet the user and then display his name in lowercase',
    function(){
        expect(templateStrings(input[i])).toEqual(output[i]);
    });
}

