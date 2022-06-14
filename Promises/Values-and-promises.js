function attachTitle(name){
   return (`DR. ${name}`)
}

let promise = new Promise(function (resolve, reject) {
    resolve('MANHATTAN');
  });

  promise.then(attachTitle).then(console.log)