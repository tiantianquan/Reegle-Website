var models = require('../models')
var Solution = models.Solution
var express = require('express')
var router = express.Router()

router.get('/admin/solution', function(req, res, next) {
  Solution.find().sort({_id:-1}).exec(function(err, docs) {
    res.json(docs)
  })
})

router.get('/admin/solution/:id', function(req, res, next) {
  Solution.findById(req.params.id ,function(err, news) {
    res.json(news)
  })
})

router.put('/admin/Solution/:id', function(req, res, next) {
  var data = req.body
  Solution.findByIdAndUpdate(data._id,data,function(err, doc) {
    res.json(doc)
  })
})

router.post('/admin/solution', function(req, res, next) {
  Solution.create(req.body,function(err,doc){
    res.json(doc)
  })
})

module.exports = router