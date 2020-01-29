const router = require('express').Router()
const bc = require('bcryptjs')

const generateToken = require('../middleware/generate-token.js')

const Users = require('../users/user-model.js')

router.post('/register', (req, res) => {
    const user = req.body
    const hash = bc.hashSync(req.body.password, 8)
    user.password = hash

    Users.add(user)
        .then(saved => {
            console.log(saved)
            res.status(201).json({ message: 'User successfully created.' })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Error creating user.' })
        })
})

router.post('/login', (req, res) => {
    const { username, password } = req.body

    Users.findBy({ username })
        .first()
        .then(user => {
            if (user && bc.compareSync(password, user.password)) {
                const token = generateToken(user)

                res.status(200).json({
                    message: `Welcome ${user.username}!`,
                    token
                })
            } else {
                res.status(401).json({ message: 'Invalid credentials.' })
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Error validating user.' })
        })
})

module.exports = router