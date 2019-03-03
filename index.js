const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(express.static('public'))
app.use(bodyParser.json())

app.use('/', require('./src/routes/index'))
app.use('/api', require('./src/routes/api'))

// app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))