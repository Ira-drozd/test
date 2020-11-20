const express = require('express')
const config = require('config')

const app = express()

app.use(express.json({extended: true}))

app.use('/api', require('./routes/form.routes'))

const PORT = config.get('port') || 5000

app.listen(5000, () => console.log(`Server has been started on port ${PORT}...`))