var foot = {
    kick: function () {
        var result;
        this.yelp = "Ouch!";
        setImmediate(() => {
            console.log(this.yelp);
            result = this.yelp;
        });
        return result;
    }
};

function arrowAndThis(){
    var output = foot.kick();
    console.log(output);
    return output;
}
arrowAndThis();



module.exports = arrowAndThis;