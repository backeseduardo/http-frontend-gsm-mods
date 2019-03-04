const express = require('express')
const router = express.Router()
const fs = require('fs')
const path = require('path')

// middleware that is specific to this router
// router.use(function timeLog (req, res, next) {
//   console.log('Time: ', Date.now())
//   next()
// })
// define the home page route
router.get('/', function (req, res) {
  res.send('Api home page')
})

router.post('/send', function (req, res) {
  fs.writeFile(path.dirname(__filename)+'/../../../tcp-backend-gsm-mods/data/sendto.txt',
    req.body.text,
    {
      encoding: 'utf8',
      flag: 'w'
    },
    (err, data) => {
      if (err) {
        res.send(err)
      } else {
        res.end()
      }
    })
})

router.get('/log', function (req, res) {
  fs.readFile(path.dirname(__filename)+'/../../../tcp-backend-gsm-mods/data/log.txt', {
    encoding: 'utf8',
    flag: 'r'
  }, (err, data) => {
    if (err) {
      res.send(null)
    } else {
      res.send(data)
    }
  })
})

router.get('/log/clear', function (req, res) {
  fs.writeFile(path.dirname(__filename)+'/../../../tcp-backend-gsm-mods/data/log.txt',
    '',
    {
      encoding: 'utf8',
      flag: 'w'
    },
    (err, data) => {
      if (err) {
        res.send(err)
      } else {
        res.end()
      }
    })
})

module.exports = router