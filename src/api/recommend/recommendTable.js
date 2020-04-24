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

let recommendShema = new Schema({
    category: {
        type: String,
        required: true
    },
    categoryList: [{
        id: {
            type: String,
            required: true
        },
        cover: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        }
    }]
})

let recommendData = mongoose.model("recommendData", recommendShema)
module.exports = {
    recommendTable: recommendData
}