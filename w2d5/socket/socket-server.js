const net = require("net");

const PORT = 8989;
const HOST = "127.0.0.1";

net.createServer((sock) => {
    // sock.write("Server:: Hello from server");
    sock.on("close", () => console.log("Socket connection closed"));

    sock.on("data", (data) => {
      console.log("received data", data.toString());

      sock.write(`Hi from server. I received this data ${data.toString()}`);
    });

    sock.on('error', (err) => console.error(err))

    sock.on("connect", () => {
      console.log("socket connected");
    });
    // console.log(sock);
  })
  .listen(PORT, HOST, () => {
    console.log(`socket server running at ${HOST}:${PORT}`);
  });
