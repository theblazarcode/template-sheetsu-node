// npm packages
const express = require('express');
const serverless = require('serverless-http')

// custom files
const sheetRouter = require('./routers/sheet')

// code
const app = express();

const router = express.Router()
router.get('/', (req, res) => {
  res.json({ok:"True",message:"api working !"})
})

// assign routers to link
app.use('/.netlify/functions/api', router)
app.use('/.netlify/functions/api/sheet', sheetRouter)

exports.handler = serverless(app)
