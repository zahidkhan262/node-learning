let fs = require("fs");
let express = require("express");
let multer = require("multer");
const { response } = require("express");

let api = express();

api.use(express.static("public"));

api.use(multer({ dest: "temp" }).single("file"));

api.post("/imageuploadapi", function (req, res) {
    console.log("req", req)
    let fileObj = __dirname + "/public" + req.file.originalname;
    fs.readFile(req.file.path, function (error, readData) {
        var resData = ""
        fs.writeFile(fileObj, readData, function (err, data) {
            if (err) {
                console.log(err);
            } else {
                resData = { "message": "file uploaded successfully" }
                res.end(JSON.stringify(resData))
            }
        })
        

    })
})



let server = api.listen(4000)
console.log("server is live")
