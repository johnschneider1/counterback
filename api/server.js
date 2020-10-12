const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const voteRouter = require('../votes/voteRouter')



const server = express()
server.use(cors())
server.use(express.json())


server.use('/api/votes', voteRouter)
server.get('/', (req, res) => {
    res.send("Server is running")
})

module.exports = server