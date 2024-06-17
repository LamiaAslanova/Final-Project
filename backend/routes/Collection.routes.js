const express = require('express')
const { CollectionsController } = require('../controllers/Collection.controller')

const router = express.Router()

router.get('/', CollectionsController.getAll)
router.get('/:id', CollectionsController.getById)
router.post('/', CollectionsController.add)
router.delete('/:id', CollectionsController.delete)

module.exports = router