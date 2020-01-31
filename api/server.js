const express = require('express')

const apiRouter = require('./api-router.js')
const middlewareConfig = require('./middleware/middleware-config.js')

const server = express()

middlewareConfig(server)

server.use('/api', apiRouter)

module.exports = server
