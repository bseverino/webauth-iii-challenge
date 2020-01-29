const router = require('express').Router()

const Users = require('./user-model.js')

const checkToken = require('../middleware/check-token.js')

router.get('/', checkToken, (req, res) => {
     Users.find()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Error retrieving users.' })
        })
})

module.exports = router