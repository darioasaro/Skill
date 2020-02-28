const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  console.log( __dirname )
  const persona = {
    nombre: "leo",
    edad: 20,
    url: req.url

  }
  
  res.json( persona )
})

app.get('/usuarios', (req, res) => {

  const persona = {
    nombre: "usuarios",
    edad: 20,
    url: req.url

  }
  
  res.json( persona )
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))