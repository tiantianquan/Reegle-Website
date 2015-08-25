var models = require('../models')
var News = models.News

//请求自身API
// var request = require('request')
// router.get('/news', function(req, res) {
//   request('http://127.0.0.1:3000/admin/news', function(error, response, body) {
//     res.render('news', {
//       allNews: JSON.parse(body)
//     })
//   })
// })



var news = {
  admin: {
    getAll: function(req, res, next) {
      News.find().sort({
        _id: -1
      }).exec(function(err, docs) {
        res.json(docs)
      })
    },
    getById: function(req, res, next) {
      News.findById(req.params.id, function(err, doc) {
        res.json(doc)
      })
    },
    updateById: function(req, res, next) {
      News.findByIdAndUpdate(req.params.id, req.body, function(err, doc) {
        res.json(doc)
      })
    },
    create: function(req, res, next) {
      News.create(req.body, function(err, doc) {
        res.json(doc)
      })
    },
    deleteById:function(req,res,next){
      News.findByIdAndRemove(req.params.id,function(err,doc){
        res.json(doc)
      })
    }
  },
  common: {
    getAll: function(req, res, next) {
      News.find().sort({
        _id: -1
      }).exec(function(err,docs) {
        res.render('news', {
          data: docs
        })
      })
    },
    getById: function(req, res, next) {
      News.findById(req.params.id, function(err, doc) {
        res.render('news', {
          data: doc
        })
      })
    },
  }
}

module.exports =news 