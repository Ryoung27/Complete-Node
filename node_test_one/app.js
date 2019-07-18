
//Creating a server.
// Importing http from global Node.
const http = require('http');
const routes = require('./routes');


//Using the create server method.
//Takes a request listener as a constant
//Takes request and response
// function rqListener(req, res){

// }
//Event driven.

console.log(routes.someText);

const server = http.createServer(routes.handler);

//Listen for incoming request. Defaults to port 80.
server.listen(3000);
