const msg = 'TIMED OUT!';
const print = () =>{
    console.log(msg);
    return msg;
}
const warmUp = () => {
    setTimeout(print,300);
}
warmUp();

module.exports = {warmUp,print};
