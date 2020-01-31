const db = require('../../data/db-config.js')

function validateId(database) {
    return function(req, res, next) {
        const id = req.params.id
        db(database)
            .where('id', id)
            .then(resource => {
                if (!resource) {
                    res.status(400).json({ message: 'Invalid id.' })
                } else {
                    req.resource = resource
                    next()
                }
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({ message: 'Error validating id.' })
            })
    }
}

module.exports = validateId