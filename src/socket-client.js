const net = require("net");

const PORT = 8989;
const HOST = "127.0.0.1";

const client = new net.Socket();

client.connect({ port: PORT, host: HOST }, () => {
  console.log("client connected");

//   client.write("Hi from socket connection")
});

client.on("data", (data) => {
    console.log(`received data from server ${data.toString()}`)
    // client.destroy();
})

// client.on("close", () => console.log("connection closed at client."))
