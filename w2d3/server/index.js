const http = require('http'); // import http module

const server = http.createServer(); // create a server

server.on("request", (request, response) => {
    // console.log(request, response);
    const method = request.method;
    const url = request.url;
    console.log(method, url)
    request.on('data', (chunk) => console.log('req data', chunk.toString()))
    if(method === 'GET' && url === '/') {
        response.writeHead(200, 'Ok', 'Content-Type: text/plain')
        response.write("You are visiting the root url");
        response.end()
    } else if(method === 'POST' && url === '/') {
        response.writeHead(201, "Created! Done", {
          "Content-Type": "application/json",
          "Accept-Type": "text/plain, text/html, text/*",
        });
        response.write(JSON.stringify({success: true, data: [], message: 'List'}));
        response.end();
    } else {
        response.writeHead(404, 'Not found');
        response.write("End of server. No matching rout found");
        response.end();
    }
})

server.listen(3000, () => console.log(`HTTP server started listening at http://localhost:3000`)); // start listening on a port