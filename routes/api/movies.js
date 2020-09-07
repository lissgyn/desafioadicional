var express = require('express')
var router = express.Router()
var moviesAPIContoller=require('../../controllers/api/moviesController')
router.get('/',moviesAPIContoller.list)
module.exports = router