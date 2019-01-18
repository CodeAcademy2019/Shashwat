const arr = [];

const all = (promise1,promise2) =>{
    return new Promise((resolve,reject)=>{  
        var counter =0;
        promise1.then((data1)=>{
            arr[counter]=data1;
            counter++;
            if(counter>=2){
                resolve(arr);
            }
        });
        promise2.then((data2)=>{
                arr[counter]=data2;
            counter++;
            if(counter>=2){
                resolve(arr);
            }});    
    });
};
all(getPromise1(),getPromise2()).then((result) => {
    console.log(result)},null)
module.exports = {all,arr};