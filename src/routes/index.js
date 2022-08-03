const router = require('express').Router()
const indexController = require('../controllers/index')
const customersController = require('../controllers/customers')

router.get('/', indexController.index)

router.get('/register', customersController.index)

router.post('/register/add', customersController.add)  

router.get('/list', customersController.list)

router.get('/edit', customersController.formEdit)
router.post('/edit/:id', customersController.edit)

router.get('/remove/:id', customersController.remove)

module.exports = router