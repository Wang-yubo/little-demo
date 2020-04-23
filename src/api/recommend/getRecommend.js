const express = require("express")
const { recommendTable } = require("./recommendTable")
let app = express();
//解决跨域问题
app.all("*", function(req, res, next) { //解决跨域请求问题
    res.header({
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Origin': req.headers.origin || '*',
        'Access-Control-Allow-Headers': 'X-Requested-With',
        'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',
        'Content-Type': 'application/json; charset=utf-8'
    });
    if (req.method === "OPTIONS") {
        res.send(200)
        console.log("has option")
    } else {
        next()
    }
});

app.get("/api/getRecommendData", (req, res) => {
    recommendTable.find({}, {
        __v: false,
        _id: false
    }).then(data => {
        res.send(JSON.stringify(data))
    }).catch(err => {
        throw err
    })
})
app.listen(5002)