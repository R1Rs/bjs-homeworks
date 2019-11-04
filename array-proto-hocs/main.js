// Задание 1

//Пункт 1. compareArrays

const compareArrays = (arr1, arr2) => (arr1.length !== arr2.length) ? false : arr1.every( (number, index) => number === arr2[index]);


// Пункт 2. memoize

function memoize(fn, limit) {
    let results = []; 
    return function () {
      let arrArguments = Array.from(arguments);
      let valueFind = results.find(function (value, index) {
      return compareArrays(arrArguments, results[index].arrArguments);
      });   
      if (valueFind === undefined) {
        res = fn(...arrArguments);
        results.push({arrArguments, res}); 
        console.log("подсчитано");
      } else {
        console.log("нашли в массиве" );
        res = valueFind.res;
      }
  
      if (results.length > (limit)) {
         results.shift();
      }
        return res;
    }
  }