function alwaysThrows(){
    throw new Error('OH NOES')
}

function iterate(x){
   console.log(x)
   return x+1
}

let promise = new Promise(function (resolve, reject) {
    resolve(1);
  });

  promise.then(iterate)
         .then(iterate)
         .then(iterate)
         .then(iterate)
         .then(iterate)
         .then(alwaysThrows)
         .then(iterate)
         .then(iterate)
         .then(iterate)
         .then(iterate)
         .then(iterate)
         .catch((error)=>{console.log(error.message)})
        
