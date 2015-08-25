var models = require('../models')
var Serve = models.Serve
var Solution = models.Solution

var serve = {
  admin: {
    getAll: function(req, res, next) {
      Serve.find().sort({
        _id: -1
      }).exec(function(err, docs) {
        res.json(docs)
      })
    },
    getById: function(req, res, next) {
      Serve.findById(req.params.id, function(err, doc) {
        res.json(doc)
      })
    },
    updateById: function(req, res, next) {
      Serve.findByIdAndUpdate(req.params.id, req.body, function(err, doc) {
        res.json(doc)
      })
    },
    create: function(req, res, next) {
      Serve.create(req.body, function(err, doc) {
        res.json(doc)
      })
    },
    deleteById:function(req,res,next){
      Serve.findByIdAndRemove(req.params.id,function(err,doc){
        res.json(doc)
      })
    }
  },
  common: {
    getAll: function(req, res, next) {
      Serve.find().sort({
        _id: -1
      }).exec(function(err,docs) {
        res.render('serve', {
          data: docs
        })
      })
    },
    getById: function(req, res, next) {
      Serve.findById(req.params.id, function(err, doc) {
        res.render('serve', {
          data: doc
        })
      })
    },
  }
}

module.exports = serve