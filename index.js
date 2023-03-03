const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/getCustom/:schemaname/:table/:executor/:searchwhat/:comparewith', db.getCustom)
app.get('/getCustomand/:schemaname/:table/:executor/:searchwhat/:comparewith/:andid/:andval', db.getCustomand)
app.post('/postCustom/:schemaname/:table', db.postCustom)



app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
