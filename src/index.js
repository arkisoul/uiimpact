const http = require("http");
const fs = require("fs");
// req: http.IncomingMessage
// res: http.ServerResponse
const users = [];

const server = http.createServer(function (request, response) {
  const method = request.method;
  const url = request.url;
  const address = new URL(url, "http://localhost:3000/");
  const pathname = address.pathname;
  console.log(pathname);
  request.query = {};
  address.searchParams.forEach((value, key) => {
    request.query[key] = value;
  });

  const rawData = [];

  // access request body
  request.on("data", function(chunk) {
      rawData.push(chunk);
  })

  request.on("end", function() {
      console.log(rawData);
      request.rawBody = rawData;
      const data = Buffer.concat(rawData).toString();
      console.log(data);
      request.body = data;
  })

  if (method === "GET" && pathname === "/") {
    response.setHeader("Content-Type", "text/plain");
    return response.end("Welcome to the Nodejs server");
  } else if (method === "GET" && pathname === "/test") {
    response.setHeader("Content-Type", "application/json");
    return response.end(
      JSON.stringify({ message: "I am handling test route" })
    );
  } else if (method === "POST" && pathname === "/user") {
    const id = address.searchParams.get("id") || 1;
    const name = address.searchParams.get("name") || "John";
    const newUser = { id: id, name: name };
    users.push(newUser);
    response.setHeader("Content-Type", "application/json");
    response.statusCode = 201;
    return response.end(
      JSON.stringify({
        message: "New user created successfully",
        user: newUser,
      })
    );
  } else if (method === "GET" && pathname === "/user") {
    const id = address.searchParams.get("id");
    let filteredUsers = users;
    if (id) {
      filteredUsers = users.filter((user) => user.id == id);
    }
    response.setHeader("Content-Type", "application/json");
    return response.end(
      JSON.stringify({
        message: "Users list",
        users: filteredUsers,
      })
    );
  } else if (method === "GET" && pathname === "/file") {
    const readStream = fs.createReadStream("bigfile.txt");
    readStream.pipe(response);
  }
  response.statusCode = 404;
  return response.end("No matching route found. Please try again");
});

server.listen(3000, function () {
  console.log("Node server is listening at port 3000");
});

// const eventEmitter = require("./emitter");

// eventEmitter.on("data", () => console.log('data received'));
// eventEmitter.on("data", () => console.log("data II received"));
// eventEmitter.on("data", () => console.log("data III received"));
// eventEmitter.on("end", () => console.log("end event received"));

// eventEmitter.emit("data");
// eventEmitter.emit("none");
// eventEmitter.emit("end");
