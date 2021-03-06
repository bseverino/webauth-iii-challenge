const router = require('express').Router()

const authRouter = require('./auth/auth-router.js')
const userRouter = require('./users/user-router.js')

router.use('/auth', authRouter)
router.use('/users', userRouter)

module.exports = router