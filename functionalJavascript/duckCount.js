    function duckCount(...objs) {
      var result = objs.reduce((accm,currentObject) =>{
          if(Object.prototype.hasOwnProperty.call(currentObject,'quack')){
              accm++;
          }
          return accm;
      },0)
       return result; 
    }

    module.exports = duckCount