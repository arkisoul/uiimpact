const net = require("net");

const PORT = 8989;
const HOST = "127.0.0.1";

net
  .createServer((sock) => {
      console.log(sock)
      sock.write("server connected, sending some data")
    sock.on("close", (hadError) => console.log("Socket connection closed"));

    sock.on("data", (data) => {
      console.log("received data", data.toString());

      sock.write(`Hi from server. I received this data ${data.toString()}`);
    });

    sock.on("connect", () => {
        console.log('socket connected')
    })
    
    sock.on("drain", () => {
        console.log('socket drain')
    })

    sock.on("ready", () => {
        console.log('ready')
    })
  })
  .listen(PORT, HOST, () => {
    console.log(`socket server running at ${HOST}:${PORT}`);
  });
