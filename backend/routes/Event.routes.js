const express = require('express')
const { EventsController } = require('../controllers/Event.controller')

const router = express.Router()

router.get('/', EventsController.getAll)
router.get('/:id', EventsController.getById)
router.post('/', EventsController.add)
router.delete('/:id', EventsController.delete)

module.exports = router