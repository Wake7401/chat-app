const express = require('express')
const dotenv = require("dotenv")

const { chats } = require('./data/data')
const app = express()
dotenv.config()
const port = process.env.PORT   

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/api/chat",(req,res)=>{
    res.send(chats);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})