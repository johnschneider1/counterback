require('dotenv').config()
const server = require('./api/server')

const port = process.env.PORT || 5150

server.listen(port, _ => console.log(`Server listening on port ${port}`))

