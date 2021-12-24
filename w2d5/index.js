const http = require('http'); // import http module
const { URL } = require('url');

const server = http.createServer(); // create a server

server.on("request", (request, response) => {
    // console.log(request, response);
    const data = [];
    const method = request.method;
    const url = request.url;
    const parsedUrl = new URL(url, "http://localhost:3000");
    const pathname = parsedUrl.pathname;
    const contentType = request.headers['content-type'];
    console.log(
      method,
      url,
      parsedUrl,
      parsedUrl.searchParams,
      parsedUrl.searchParams
    .get('query'));

    request.on('data', (chunk) => data.push(chunk))
    request.on('end', () => {
        const dataString = data.concat().toString();
        console.log(dataString);
        if(contentType === 'application/json') {
            const dataBody = JSON.parse(dataString);
            console.log(dataBody);
        } else if(contentType === 'application/x-www-form-urlencoded') {
            const dataArr = dataString.split('&');
            console.log(dataArr);
            const body = {};
            dataArr.forEach((field) => {
                const fieldArr = field.split("=");
                body[fieldArr[0]] = fieldArr[1];
            })
            console.log(body);
        } else {
            // form-data
            // we can parse form data here
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
    })
})

server.listen(3000, () => console.log(`HTTP server started listening at http://localhost:3000`)); // start listening on a port