var express = require('express')
var router = express.Router()
  //upload
var multer = require('multer')
var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './public/images')
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname)
  }
})

var upload = multer({
  storage: storage
})

router.post('/admin/upload', upload.single('file'), function(req, res, next) {
  res.json(req.file)
})


router.get('/news', function(req, res, next) {
  News.find(function(err, allNews) {
    res.render('news', {
      allNews: allNews
    })
  })
})

router.get('/', function(req, res, next) {
  res.redirect('/news');
})

router.get('/admin', function(req, res, next) {
  res.sendfile('../public/admin/index.html')
})



module.exports = {
  news: require('./news'),
  serve: require('./serve'),
  solution: require('./solution'),
  main: router
}