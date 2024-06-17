const express = require('express')
const { ShopController } = require('../controllers/Shop.controller')

const router = express.Router()

router.get('/', ShopController.getAll)
router.get('/:id', ShopController.getById)
router.post('/', ShopController.add)
router.delete('/:id', ShopController.delete)

module.exports = router