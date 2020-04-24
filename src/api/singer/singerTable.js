const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.connect("mongodb+srv://wyb:wyb123..@cluster0-nupid.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("数据库连接成功")
}).catch(() => { console.log("连接失败") });
let singerShema = new Schema({
    "singer_id": String,
    "singer_mid": String,
    "singer_name": String,
    "singer_pic": String,
});
let singer = mongoose.model("singer", singerShema);
module.exports = {
    singerTable: singer
};