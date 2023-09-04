const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  console.log(req.url)
  res.send('User Home Page')
})

router.get('/profile', (req, res) => {
  res.send('User Profile Page')
})

module.exports = router