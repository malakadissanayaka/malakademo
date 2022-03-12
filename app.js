
const express = require('express')
const app = express()
const port = process.env.PORT ||  3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/malaka', (req, res) => {
    res.send('malaka rander ')
  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})