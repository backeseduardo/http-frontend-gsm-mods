const express = require('express')
const router = express.Router()
const path = require('path')

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/../../views/index.html'))
})
// define the about route
router.get('/about', function (req, res) {
  res.send('About birds')
})

module.exports = router