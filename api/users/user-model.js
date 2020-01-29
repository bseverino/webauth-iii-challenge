const db = require('../../data/db-config.js')

module.exports = {
    add,
    find,
    findBy
}

function add(credentials) {
    return db('user')
        .insert(credentials)
}

function find() {
    return db('user')
        .select('id', 'username')
}

function findBy(filter) {
    return db('user')        
        .where(filter)
}