const http = require("http"); // import http module
const https = require("https");
const { URL } = require("url");
const fs = require('fs');
const {join} = require('path');

const server = http.createServer(); // create a server
const secureServer = https.createServer({
  key: fs.readFileSync(join(__dirname, "..", "secureserver.key")),
  cert: fs.readFileSync(join(__dirname, "..", "secureserver.cert")),
});

server.on("request", (request, response) => {
  // console.log(request, response);
  const data = [];
  const method = request.method;
  const url = request.url;
  const parsedUrl = new URL(url, "http://localhost:3000");
  const pathname = parsedUrl.pathname;
  const contentType = request.headers["content-type"];
  const query = {};
  for (const [key, value] of parsedUrl.searchParams.entries()) {
      query[key] = value;
  }
  request.query = query;

  request.on("data", (chunk) => data.push(chunk));
  request.on("end", () => {
    request.rawBody = data.concat();
    const dataString = data.concat().toString();
    console.log(dataString);
    if (contentType === "application/json") {
      const body = JSON.parse(dataString);
      request.body = body;
      console.log(body);
    } else if (contentType === "application/x-www-form-urlencoded") {
      const dataArr = dataString.split("&");
      console.log(dataArr);
      const body = {};
      dataArr.forEach((field) => {
        const fieldArr = field.split("=");
        body[fieldArr[0]] = fieldArr[1];
      });
      console.log(body);
      request.body = body;
    } else if (contentType && contentType.includes("multipart/form-data;")) {
      // form-data
      // we can parse form data here
      const boundary = contentType.split("multipart/form-data; boundary=")[1];
      const dataArr = dataString.split(boundary);
      console.log(request.query, dataArr);
    } else {
      request.body = {};
    }

    // Routes
    if (method === "GET" && pathname === "/") {
      response.writeHead(200, "Ok", "Content-Type: text/plain");
      response.write("Welcome to the Nodejs server");
      response.end();
    } else if (method === "POST" && pathname === "/") {
      response.writeHead(201, "Created! Done", {
        "Content-Type": "application/json",
        "Accept-Type": "text/plain, text/html, text/*",
      });
      response.write(
        JSON.stringify({ success: true, data: [], message: "List" })
      );
      response.end();
    } else {
      response.writeHead(404, "Not found");
      response.write("End of server. No matching rout found");
      response.end();
    }
  });
});

secureServer.on("request", (request, response) => {
  // console.log(request, response);
  const data = [];
  const method = request.method;
  const url = request.url;
  const parsedUrl = new URL(url, "http://localhost:3000");
  const pathname = parsedUrl.pathname;
  const contentType = request.headers["content-type"];
  const query = {};
  for (const [key, value] of parsedUrl.searchParams.entries()) {
    query[key] = value;
  }
  request.query = query;

  request.on("data", (chunk) => data.push(chunk));
  request.on("end", () => {
    request.rawBody = data.concat();
    const dataString = data.concat().toString();
    console.log(dataString);
    if (contentType === "application/json") {
      const body = JSON.parse(dataString);
      request.body = body;
      console.log(body);
    } else if (contentType === "application/x-www-form-urlencoded") {
      const dataArr = dataString.split("&");
      console.log(dataArr);
      const body = {};
      dataArr.forEach((field) => {
        const fieldArr = field.split("=");
        body[fieldArr[0]] = fieldArr[1];
      });
      console.log(body);
      request.body = body;
    } else if (contentType && contentType.includes("multipart/form-data;")) {
      // form-data
      // we can parse form data here
      const boundary = contentType.split("multipart/form-data; boundary=")[1];
      const dataArr = dataString.split(boundary);
      console.log(request.query, dataArr);
    } else {
      request.body = {};
    }

    // Routes
    if (method === "GET" && pathname === "/") {
      response.writeHead(200, "Ok", "Content-Type: text/plain");
      response.write("Welcome to the secure Nodejs server");
      response.end();
    } else if (method === "POST" && pathname === "/") {
      response.writeHead(201, "Created! Done", {
        "Content-Type": "application/json",
        "Accept-Type": "text/plain, text/html, text/*",
      });
      response.write(
        JSON.stringify({ success: true, data: [], message: "List" })
      );
      response.end();
    } else {
      response.writeHead(404, "Not found");
      response.write("End of server. No matching rout found");
      response.end();
    }
  });
});

server.listen(3000, () =>
  console.log(`HTTP server started listening at http://localhost:3000`)
); // start listening on a port
// default port for a http server is 80
// default port for a secure http server is 443
secureServer.listen(3443, () => {
    console.log(`Node secure server is running at https://localhost:3443`)
})