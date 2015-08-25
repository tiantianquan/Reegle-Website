 var news = require('./news')
 var serve = require('./serve')
 var solution = require('./solution')
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

 router.get('/', function(req, res, next) {
   res.redirect('/news')
 })

 router.get('/admin', function(req, res, next) {
   res.sendfile('../public/admin/index.html')
 })

 //-------------------------------------------------------------

 router.get('/news', news.common.getAll)
 router.get('/news/:id', news.common.getById)

 router.get('/admin/news', news.admin.getAll)
 router.get('/admin/news/:id', news.admin.getById)
 router.put('/admin/news/:id', news.admin.updateById)
 router.post('/admin/news', news.admin.create)
 router.delete('/admin/news/:id', news.admin.deleteById)

 //--------------------------------------------------------------

 router.get('/serve', serve.common.getAll)
 router.get('/serve/:id', serve.common.getById)

 router.get('/admin/serve', serve.admin.getAll)
 router.get('/admin/serve/:id', serve.admin.getById)
 router.put('/admin/serve/:id', serve.admin.updateById)
 router.post('/admin/serve', serve.admin.create)
 router.delete('/admin/serve/:id', serve.admin.deleteById)

 //--------------------------------------------------------------

 router.get('/solution', solution.common.getAll)
 router.get('/solution/:id', solution.common.getById)

 router.get('/admin/solution', solution.admin.getAll)
 router.get('/admin/solution/:id', solution.admin.getById)
 router.put('/admin/solution/:id', solution.admin.updateById)
 router.post('/admin/solution', solution.admin.create)
 router.delete('/admin/solution/:id', solution.admin.deleteById)

 module.exports = router