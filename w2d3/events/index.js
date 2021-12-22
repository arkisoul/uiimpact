require("./admin");
require("./patient");
require("./physician");
const notificationEventEmitter = require("./eventEmitter");

notificationEventEmitter.emit("notify");