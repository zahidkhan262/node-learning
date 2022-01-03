let express = require('express');
let api = express();
let bodyParser = require("body-parser");
let urlEncoded = bodyParser.urlencoded({ extended: true });

/* api.get('/getapi', function(req, res){
    res.send("get api");
}); */

api.get('/getapi', function (req, res) {

    let data = {
        firstname: req.query.firstname,
        lastname: req.query.lastname
    }
    let jsonObj = JSON.stringify(data);
    console.log("request data", data);
    res.end(jsonObj);
});

api.post('/postapi', urlEncoded, function (req, res) {

    let data = {
        firstname: req.body.firstname,
        lastname: req.body.lastname
    }
    let jsonObj = JSON.stringify(data);
    console.log("request data", data);

    res.end(jsonObj);
});
api.use(express.static("public"));

api.get("/index.html", function (req, res) {
    res.sendFile(__dirname + "/" + "index.html");
})



let server = api.listen(3030);
console.log("express server running!!!!")

