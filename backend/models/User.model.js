const mongoose = require('mongoose')

const Users = mongoose.model('Users', new mongoose.Schema({
    firstName: String,
    lastName: String,
    userName: String,
    email: String,
    password: String
}))

module.exports = { Users }