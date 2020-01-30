const db = require('../../data/db-config.js')
const Users = require('./user-model.js')

describe('user model', () => {
    describe('test environment', () => {
        it('should use the testing environment', () => {
            expect(process.env.DB_ENV).toBe('testing')
        })
    })

    beforeEach(async () => {
        await db('user').truncate()
    })

    describe('add()', () => {
        it('should add the user into the db', async () => {
            await Users.add({ username: 'Bianca', password: 'password', department: 'Backend' })
            await Users.add({ username: 'Isabela', password: 'password', department: 'Cat' })

            const users = await db('user')

            expect(users).toHaveLength(2)
        })
    })
})