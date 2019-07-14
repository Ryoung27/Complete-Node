//Creating a server.
// Importing http from global Node.
const http = require('http');


//Using the create server method.
//Takes a request listener as a constant
//Takes request and response
// function rqListener(req, res){

// }
//Event driven.
const server = http.createServer((req, res) =>{
    console.log(req);
    //Process exit is a hard exit of code.
    // process.exit();
});

//Listen for incoming request. Defaults to port 80.
server.listen(3000);
