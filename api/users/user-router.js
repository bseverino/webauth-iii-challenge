const router = require('express').Router()

const Users = require('./user-model.js')

const checkToken = require('../middleware/check-token.js')

// if token is provided, renders a list of users based on the client's department
router.get('/', checkToken, (req, res) => {
    const department = req.user.department

    Users.find(department)
        .then(users => {
            res.status(200).json(users)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Error retrieving users.' })
        })
})

module.exports = router