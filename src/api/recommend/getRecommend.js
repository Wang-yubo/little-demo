// const express = require("express")
const { recommendTable } = require("./recommendTable")
    // let app = express();


// app.get("/api/getRecommendData", (req, res) => {
//     recommendTable.find({}, {
//         __v: false,
//         _id: false
//     }).then(data => {
//         res.send(JSON.stringify(data))
//     }).catch(err => {
//         throw err
//     })
// })
module.exports = {
    getRecommendData: function(req, res) {
        recommendTable.find({}, {
            __v: false,
            _id: false
        }).then(data => {
            res.send(JSON.stringify(data))
        }).catch(err => {
            throw err
        })
    }
}


// app.listen(5002)