let events = require("events");
let eventEmitterObj = new events.EventEmitter();

let connectHandler = function connected() {
    console.log("connection successfull");
    eventEmitterObj.emit("dataReceived");
};
eventEmitterObj.on("dataReturn", connectHandler);

eventEmitterObj.on("dataRecieved", function () {
    console.log("dataRecieved Successfully");
});

eventEmitterObj.emit("dataRturn");
console.log("program end");