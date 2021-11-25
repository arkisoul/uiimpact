const EventEmitter = require('events');

const orderEventEmitter = new EventEmitter();
module.exports = orderEventEmitter;
eventEmitter.on("orderCompleted", function() {})
eventEmitter.emit("orderCompleted");
// class EventEmitter {
//     constructor() {
//         this.events = {};
//     }

//     /*
//     this.events = {
//         "click": [Function, Function],
//         "mouseenter": [Function],
//     }
//      */

//     on(eventName, eventHandler) {
//         this.events[eventName] = this.events[eventName] || [];
//         this.events[eventName].push(eventHandler);
//     }

//     emit(eventName) {
//         if(this.events[eventName]) {
//             this.events[eventName].forEach((handler) => handler())
//         }
//     }
// }

module.exports = new EventEmitter();