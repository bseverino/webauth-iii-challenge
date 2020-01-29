const db = require('../../data/db-config.js')

module.exports = {
    add,
    find,
    findBy
}

// takes username, password, and department
function add(credentials) {
    return db('user')
        .insert(credentials)
}

// returns a list of users based on the client's department
function find(department) {
    return db('user')
        .where('department', department)
        .select('id', 'username', 'department')
}

// finds user(s) based on argument, useful to find by id
function findBy(filter) {
    return db('user')        
        .where(filter)
}