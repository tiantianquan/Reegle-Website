var mongoose = require('mongoose')
var Schema = mongoose.Schema

var NewsSchema = new Schema({
  title: {type: String},
  //todo:使用ObjectId链接用户表
  author:{type:String},
  description:{type:String},
  content:{type:String},
  createDate:{type:Date,default:Date.now},
  updateDate:{type:Date,default:Date.now},
})

module.exports = mongoose.model('News', NewsSchema);