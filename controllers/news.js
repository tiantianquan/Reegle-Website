var models = require('../models')
var News = models.News
var express = require('express')
var router = express.Router()
//upload
var multer  = require('multer')
var fs = require('fs')
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

var upload = multer({ storage: storage })


//all
router.get('/news', function(req, res, next) {
  News.find(function(err, allNews) {
    res.render('news', {
      allNews: allNews
    })
  })
})

router.get('/admin',function(req,res,next){
  res.sendfile('../public/admin/index.html')
})


router.get('/admin/news', function(req, res, next) {
  News.find(function(err, allNews) {
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
  })
})

router.post('/admin/news', function(req, res, next) {
  News.create(req.body)
})

router.post('/admin/upload',upload.single('file'),function(req,res,next){
  res.json(req.file)
})


//single
router.get('/news/:id', function() {

})

module.exports = router