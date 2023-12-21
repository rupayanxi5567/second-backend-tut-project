import express  from "express";

// const express = require()
const app = express()

app.get('/', (req, res) => {
  res.send('Hello mal!')
})

// get a list of 6 jokes
app.get('/api/jokes', (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "1 joke",
      content: "a joke"
    },{
      id: 2,
      title: "2 joke",
      content: "the 2nd  joke"
    }
  ]
  res.send(jokes)
})



const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})