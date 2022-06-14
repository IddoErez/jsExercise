function parsePromised(input) {
    return new Promise(function (resolve, reject) {
        try {
            resolve(JSON.parse(input));
        } catch (error) {
            reject(error);
        }
    });
}

function onRejected(err) {
    console.log(err.message);
}
parsePromised(process.argv[2]).then(null, onRejected);