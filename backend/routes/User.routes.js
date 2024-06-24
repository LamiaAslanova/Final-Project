const express = require('express')
const { UserController } = require('../controllers/User.controller')

const router = express.Router()

router.post('/', UserController.signUp)
router.post('/', UserController.signIn)

module.exports = router