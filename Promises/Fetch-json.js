const http = require("q-io/http");
const url = "http://localhost:1337/"

http.read(url) 
.then((Json)=>console.log(JSON.parse(Json)))
.catch(console.log)

