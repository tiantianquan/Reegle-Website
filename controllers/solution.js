var models = require('../models')
var Solution = models.Solution
var Serve = models.Serve

var solution = {
  admin: {
    getAll: function(req, res, next) {
      Solution.find().sort({
        _id: -1
      }).exec(function(err, docs) {
        res.json(docs)
      })
    },
    getById: function(req, res, next) {
      Solution.findById(req.params.id, function(err, doc) {
        res.json(doc)
      })
    },
    updateById: function(req, res, next) {
      Solution.findByIdAndUpdate(req.params.id, req.body, function(err, doc) {
        res.json(doc)
      })
    },
    create: function(req, res, next) {
      Solution.create(req.body, function(err, doc) {
        res.json(doc)
      })
    },
    deleteById:function(req,res,next){
      Solution.findByIdAndRemove(req.params.id,function(err,doc){
        res.json(doc)
      })
    }
  },
  common: {
    getAll: function(req, res, next) {
      Solution.find().sort({
        _id: -1
      }).exec(function(err,docs) {
        res.render('solution', {
          data: docs
        })
      })
    },
    getById: function(req, res, next) {
      Solution.findById(req.params.id, function(err, doc) {
        res.render('solution', {
          data: doc
        })
      })
    },
  }
}

module.exports = solution