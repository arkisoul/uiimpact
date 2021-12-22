const notificationEventEmitter = require("./eventEmitter");

notificationEventEmitter.on("notify", () => {
    console.log('Notify event in admin')
})