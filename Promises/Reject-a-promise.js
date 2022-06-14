let promise = new Promise(function (fulfill, reject) {
   setTimeout(() => {
    reject(new Error('REJECTED!'));
  }, 300);
});
promise.then(null, function onReject(error) {
    console.log(error.message);
  });
