const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const port = 80

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./src/routes/index'))
app.use('/api', require('./src/routes/api'))

// app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
