const http = require("http")

console.log("Server running")

http.createServer(function(req, res){
    console.log("client made a request")
    res.write("Hello World!")
}).listen(8000)