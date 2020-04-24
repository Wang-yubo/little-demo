// const express = require("express");
const { singerTable } = require("./singerTable");
// let app = express();
// app.listen(9529);
// app.get("/api/getSingerData",)

module.exports = {
    getSingerData: function(req, res) {
        singerTable.find({}, {
            _id: false,
            __v: false
        }).then((data) => {
            res.send(JSON.stringify(data));
        }).catch((err) => {
            console.log(err);
        })
    }
}