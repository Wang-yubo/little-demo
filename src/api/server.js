const express = require("express")
const { getRecommendData } = require("./recommend/getRecommend")
const { getRecommendDetailData } = require("./recommendDetail/setDetailDate")
const { getSingerData } = require("./singer/getSingerData")
var bodyParser = require("body-parser")
let app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
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

app.get("/api/getRecommendData", getRecommendData)
app.get("/api/getRecommendDetailData/:id", getRecommendDetailData)
app.get("/api/getSingerData", getSingerData)


app.listen(9527)