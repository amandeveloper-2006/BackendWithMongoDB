const http = require('http');  // Import the http module to create a web server

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    // Handle incoming requests and send responses
     if (req.url === '/')  {  // this is route for the home page
    res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World By aman\n');
    }
    else if (req.url=== '/hello') {    // this is route for the hello page and simler you can create more routes
         res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World thank for visiting on hello\n');
    }
    else
    {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('404 Page not found\n');
    }
})

server.listen(port, hostname, () => {
console.log(`Server listening at http://${hostname}:${port}/`);
})