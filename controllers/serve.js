var models = require('../models')
var Serve = models.Serve
var express = require('express')
var router = express.Router()

router.get('/admin/serve', function(req, res, next) {
  Serve.find().sort({_id:-1}).exec(function(err, docs) {
    res.json(docs)
  })
})

router.get('/admin/serve/:id', function(req, res, next) {
  Serve.findById(req.params.id ,function(err, news) {
    res.json(news)
  })
})

router.put('/admin/serve/:id', function(req, res, next) {
  var data = req.body
  Serve.findByIdAndUpdate(data._id,data,function(err, doc) {
    res.json(doc)
  })
})

router.post('/admin/serve', function(req, res, next) {
  Serve.create(req.body,function(err,doc){
    res.json(doc)
  })
})

module.exports = router