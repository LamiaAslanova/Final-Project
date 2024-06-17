const express = require('express')
const { ExhibitionsController } = require('../controllers/Exhibition.controller')

const router = express.Router()

router.get('/', ExhibitionsController.getAll)
router.get('/:id', ExhibitionsController.getById)
router.post('/', ExhibitionsController.add)
router.delete('/:id', ExhibitionsController.delete)

module.exports = router