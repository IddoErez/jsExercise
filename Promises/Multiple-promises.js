function all(promise1, promise2) {
    let promise3 = new Promise(function (resolve, reject) {
        let counter = 0
        let array = []
        promise1.then((x) => {
            array.push(x)
            counter++
            counter == 2 ? resolve(array) : null
        })
        promise2.then((y) => {
            array.push(y)
            counter++
            counter == 2 ? resolve(array) : null
        })
    });
    return promise3
}

all(getPromise1(), getPromise2()).then((array)=>console.log(array))



