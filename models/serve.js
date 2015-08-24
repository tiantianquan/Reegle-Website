var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId  = Schema.ObjectId

var ServeSchema = new Schema({
    title: {
      zh:{type: String},
      en:{type:String},
      zhLong:{type:String},
      enLong:{type:String}
    },
    description:{type:String},
    content:{type:String},
    connectArticle:[ObjectId],
    createDate:{type:Date,default:Date.now},
    updateDate:{type:Date,default:Date.now},
})

module.exports = mongoose.model('Serve', ServeSchema);