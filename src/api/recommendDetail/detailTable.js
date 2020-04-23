const mongoose = require("mongoose")
const Schema = mongoose.Schema;
mongoose.connect("mongodb+srv://wyb:wyb123..@cluster0-nupid.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("数据库连接成功");
}).catch((err) => {
    console.log("连接失败", err);
})

//* 定义骨架
let detailShema = new Schema({
    id: {
        required: true,
        type: String
    },
    cover: {
        required: true,
        type: String
    },
    title: {
        required: true,
        type: String
    },
    tag: [{
        id: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    }],
    songlist: [{
        mid: {
            required: true,
            type: String
        },
        name: {
            required: true,
            type: String
        },
        singer: [{
            id: {
                required: true,
                type: String
            },
            mid: {
                required: true,
                type: String
            },
            name: {
                required: true,
                type: String
            },
            title: {
                required: true,
                type: String
            }
        }]
    }]
});
let detailDate = mongoose.model("detailDate", detailShema);
module.exports = {
    detailTable: detailDate
};