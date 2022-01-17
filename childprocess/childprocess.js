// let fs = require("fs");

// let childProcess = require("child_process");

// let workerProcess = childProcess.exec("node support.js", function (err, stdOut, stdErr) {
//     if (err) {
//         console.log("error", err);
//         console.log(err.code);
//         console.log(err.signal);
//     }
//     console.log(stdOut);
//     console.log(stdErr);
// });

// workerProcess.on("exit", function (data) {
//     console.log(data);
// })




let fs = require("fs");

let childProcess = require("child_process");

for (var i = 0; i < 4; i++) {


    let workerProcess = childProcess.exec("node support.js" + i, function (err, stdOut, stdErr) {
        if (err) {
            console.log("error", err);
            console.log(err.code);
            console.log(err.signal);
        }
        console.log(stdOut);
        console.log(stdErr);
    });

    workerProcess.on("exit", function (data) {
        console.log(data);
    })
}