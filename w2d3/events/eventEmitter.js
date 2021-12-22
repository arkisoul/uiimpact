const EventEmitter = require("events");

const notificationEventEmitter = new EventEmitter()

notificationEventEmitter.on("notify", () => console.log('Notify first'))
notificationEventEmitter.emit("notify");
notificationEventEmitter.on("notify", () => console.log('Notify second'))
notificationEventEmitter.on("notify", () => console.log('Notify third'))
notificationEventEmitter.emit("notify");
notificationEventEmitter.on("sms", (args) => console.log('sms', args))
notificationEventEmitter.on("email", () => console.log('Email'))

notificationEventEmitter.emit("sms", 987654321);

module.exports = notificationEventEmitter;