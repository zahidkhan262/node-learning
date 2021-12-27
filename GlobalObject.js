





// check filename
console.log("fileName", __filename)

// check directory name
console.log(__dirname);

function timeOut() {
    console.log("hello")
}
// setTimeout(timeOut, 3000);

// setInterval(timeOut, 3000);

let obj=setTimeout(timeOut, 3000);

clearInterval(obj)