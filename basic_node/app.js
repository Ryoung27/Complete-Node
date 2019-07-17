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
    const url = req.url;
    //Process exit is a hard exit of code.
    // process.exit();
    if (url === '/'){
        res.write('<html>');
        res.write('<head><title>Enter message</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></body>');
        res.write('</html>');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>');
    res.write('<head><title>My first pages</title></head>')
    res.write('<body><h1>Hello from NodeJS</h1></body>')
    res.write('</html>');
    res.end();
});

//Listen for incoming request. Defaults to port 80.
server.listen(3000);
