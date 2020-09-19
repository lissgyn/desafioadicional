var express = require('express')
var router = express.Router()
var moviesAPIContoller=require('../../controllers/api/moviesController')
router.get('/',moviesAPIContoller.list)
router.get('/:id',moviesAPIContoller.detalle)
router.post('/create', moviesAPIContoller.create)
module.exports = router