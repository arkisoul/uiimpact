const http = require('http');
// req: http.IncomingMessage
// res: http.ServerResponse
const users = [];

const server = http.createServer(function(request, response) {
    const method = request.method;
    const url = request.url;
    if(method === 'GET' && url === "/") {
        response.setHeader("Content-Type", "text/plain");
        return response.end("Welcome to the Nodejs server")
    } else if(method === 'GET' && url === "/test") {
        response.setHeader("Content-Type", "application/json");
        return response.end(JSON.stringify({message: "I am handling test route"}));
    } else if(method === 'POST' && url === "/user") {
        const newUser = {id: Math.round(Math.random() * 50), name: "John"}
        users.push(newUser);
        response.setHeader("Content-Type", "application/json");
        response.statusCode = 201;
        return response.end(
          JSON.stringify({ message: "New user created successfully", user: newUser })
        );
    } else if(method === 'GET' && url === '/user') {
        response.setHeader("Content-Type", "application/json");
        return response.end(
          JSON.stringify({
            message: "Users list",
            users: users,
          })
        );
    }
    response.statusCode = 404;
    return response.end("No matching route found. Please try again")
})

server.listen(3000, function() {
    console.log('Node server is listening at port 3000');
})