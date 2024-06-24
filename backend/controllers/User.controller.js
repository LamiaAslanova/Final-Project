const { Users } = require('../models/User.model')

const UserController = {
    signUp: async (req, res) => {
        try {
            const user = await Users.create({ ...req.body })
            res.send(user)
        }
        catch (error) {
            res.status(404).send(error)
        }
    },
    signIn: async (req, res) => {
        try {
            const { email, password } = req.body
            const user = await Users.findOne({ email })
            if (user) {
                if (user.password == password) {
                    res.send('Success')
                }
                else {
                    res.send('Password is not correct')
                }
            }
            else {
                res.send('User is not defined')
            }
        }
        catch (error) {
            res.status(404).send(error)
        }
    }
}

module.exports = { UserController }