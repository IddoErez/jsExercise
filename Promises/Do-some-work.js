const http = require("q-io/http");
const url1 = "http://localhost:7000/"
const url2 = "http://localhost:7001/"
http.read(url1)
.then((result) => {
    let request = http.read(url2 + result)
    return request
}).then((Json) => {console.log(JSON.parse(Json))})
.catch(console.log)
