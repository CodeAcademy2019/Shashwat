const html = require('./taggedTemplateStrings');

test ('Testing for < and & in input', () => {
    expect(html(['<b> ','says</b>','!'],'<Steve Jobs ',' & is innovative')).toEqual('User <b> &lt;Steve Jobs says &amp; is innovative!');
});

test ('Testing for > and "', () => {
    expect(html(['<b> ','says</b>','!'],'Virat Kohli> ',' is an "excellent" batsman')).toEqual('User <b> Virat Kohli&gt; says is &quot;excellent&quot; batsman!');
});

/*
test ('the output should be free from html unsafe characters',() => {
    expect(tagg(["<b>"," says</b>:","\"","\""],"domenic"," <dl> is a fun tag")).toBe(`<b>domenic says</b>: &lt;dl&gt; is a fun tag"`);
});
*/

