let fileSystem = require("fs");

// let data = fileSystem.readFileSync("first.txt");
// console.log("data :", data.toString());
// console.log("program end")

// o/p=> data this is zahid khan....


fileSystem.readFile("first.txt", function (error, data) {
    if (error) {
        console.log("error", error)
    } else {
        console.log("data:", data.toString());
        console.log("program end")
    }
})

