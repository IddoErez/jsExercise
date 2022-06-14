let promise1 = new Promise(function (fulfill, reject) {
    fulfill('SECRET VALUE');
  });

  let promise2 = Promise.resolve('SECRET VALUE');


  let promise3 = new Promise(function (fulfill, reject) {
    reject(new Error('SECRET VALUE'));
  });

  var promise4 = Promise.reject(new Error('SECRET VALUE'));


promise1.then((result)=> console.log(result))
promise2.then((result)=> console.log(result))
promise3.catch((result)=> console.log(result.message))
promise4.catch((result)=> console.log(result.message))