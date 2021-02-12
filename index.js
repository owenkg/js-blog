const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const db = require('./database')
const apiPort = 3000
const movieRouter = require('./routes/movierouter')
const swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('./swagger.json')


app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error',console.error.bind(console,'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', movieRouter)
app.use('/apidocs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))