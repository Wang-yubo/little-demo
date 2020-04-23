const request = require("request");
const express = require("express");
const {
    detailTable
} = require("./detailTable");
const jsdom = require("jsdom");
const {
    JSDOM
} = jsdom;
let app = express();
app.get("/api/detail/:id", function(req, res) {
    request({
            method: "GET",
            url: "https://i.y.qq.com/n2/m/share/details/taoge.html",
            qs: {
                ADTAG: "newyqq.taoge",
                id: req.params.id

            }
        },
        function(error, response, body) {
            const dom = new JSDOM(body, {
                runScripts: "dangerously"
            });
            let songlist = dom.window.firstPageData;
            detailTable.find({
                id: req.params.id
            }).then((data) => {
                console.log(Number(data));
                if (Number(data) === 0) {
                    console.log("此时数据库中无数据");
                    let finalData = {};
                    finalData.id = req.params.id;
                    finalData.cover = songlist.taogeData.picurl || songlist.taogeData.picurl2;
                    finalData.title = songlist.taogeData.title;
                    finalData.tag = [];
                    finalData.songlist = [];
                    songlist.taogeData.tag.forEach((item) => {
                        finalData.tag.push({
                            id: item.id,
                            name: item.name
                        })
                    });
                    songlist.taogeData.songlist.forEach((item) => {
                        let singer = [];
                        item.singer.forEach((singerList) => {
                            singer.push(singerList)
                        });
                        finalData.songlist.push({
                            mid: item.mid,
                            name: item.name,
                            singer: singer
                        })
                    });
                    res.send(JSON.stringify(finalData));
                    detailTable.create(finalData);
                } else {
                    console.log("此时数据库中有数据");
                    res.send(JSON.stringify(data));

                }
            })
        });
});
app.listen(5004);