const jwt = require('jsonwebtoken')
const secrets = require('../config/secrets.js')

function checkToken(req, res, next) {
    const token = req.headers.authorization

    jwt.verify(token, secrets.jwtSecret, err => {
        if (err) {
            console.log(err)
            res.status(401).json({ message: 'You must be logged in to do this.' })
        } else {
            next()
        }
    })
}

module.exports = checkToken