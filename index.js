const express = require('express')
const app = express()

const multer = require('multer')
const upload = multer()

const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

app.get('/', (request, response) => {
  const helloFile = __dirname + '/views/index.html'
  response.sendFile(helloFile)
})

const listener = app.listen(3000, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})
