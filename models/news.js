var mongoose = require('mongoose')
var Schema = mongoose.Schema

var NewsSchema = new Schema({
  title: {
    type: String
  },
  //todo:使用ObjectId链接用户表
  author: {
    type: String
  },
  description: {
    type: String
  },
  content: {
    type: String
  },
  createDate: {
    type: Date,
    default: Date.now
  },
  updateDate: {
    type: Date,
    default: Date.now
  },
})

// var News = mongoose.model('News', NewsSchema)

// News.getAllNews = function(success, fail) {
//   News.find().sort({
//     '_id': -1
//   }).exec(function(err, docs) {
//     if (err !== null) {
//       fail(err)
//     } else {
//       success(docs)
//     }
//   })
// }

// News.getById = function(req, success, fail) {
//   News.findById(req.params.id, function(err, docs) {
//     if (err !== null) {
//       fail(err)
//     } else {
//       success(docs)
//     }
//   })
// }

// News.updateById = function(req, success, fail) {
//   News.findByIdAndUpdate(req.params.id, req.body, function(err, doc) {
//     if (err !== null) {
//       fail(err)
//     } else {
//       success(docs)
//     }
//   })
// }


module.exports = mongoose.model('News', NewsSchema)
