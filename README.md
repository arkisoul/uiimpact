# Assignment - Topic Node server

## Events - events module in nodejs

## Concept - Streams
Streams - An instance of events in nodejs
    - Readable - Create a read strem/ read the data in chunks
    - Writeable - can write the data in chunks
    - Duplex - can read/write data in chunks
    - Transform - special case of duplex stream. read/write stream. in between it can transform the data.

### Readable stream in Nodejs
- process.stdin
- HTTP Request on the server
- HTTP Response on the client
- TCP Socket
- fs createReadStream
- crypto
- zlib

### Writeable Stream in Nodejs
- process.stdout, process.stderr
- HTTP Request on the client
- HTTP Response on the server
- TCP Socket
- fs createWriteSteam
- crypto
- zlib

### Stream pipe example
readableStreamSrc.pipe(writeableStreamDestination)
if a, b, c and d are streams then we can pipe them together
a.pipe(b).pipe(c).pipe(d)

readableStream.pipe(duplexStream).pipe(transformStream1).pipe(transformStream2).pipe(writable)

## Problem Statement
- Create a server - listen to port 3000
- Create below route handlers
    - Base route to send a welcome message back to the client
    - Wild bookscard route to send a 404 message back to the client
    - GET / route to get books list
    - POST /books route to create a new book (id, title, createdAt)
    - GET /authors route to get authors list
    - POST /authors route to create a new author (id, name, createdAt)

function createServer(cb) {
    request, response
    cb(request, response);
}

createServer((request, response) {

})

client => request (give me http://localhost:3000/user) => server