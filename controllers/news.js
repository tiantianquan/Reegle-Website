var models = require('../models')
var News = models.News
var express = require('express')
var router = express.Router()

router.get('/admin/news', function(req, res, next) {
  News.find().sort({'_id': -1}).exec(function(err, allNews) {
    res.json(allNews)
  })
})

router.get('/admin/news/:id', function(req, res, next) {
  News.findById(req.params.id ,function(err, news) {
    res.json(news)
  })
})

router.put('/admin/news/:id', function(req, res, next) {
  var data = req.body
  console.log(data)
  News.findByIdAndUpdate(data._id,data, function(err, doc) {
    res.json(doc)
  })
})

router.post('/admin/news', function(req, res, next) {
  News.create(req.body,function(err,doc){
    res.json(doc)
  })
})




//single
router.get('/news/:id', function() {

})

module.exports = router