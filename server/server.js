const express = require('express')
const cors = require('cors')

// server logic
const isAna = require('./logic')

// init express
const app = express()

const PORT = process.env.PORT || 8080

// route checks if to strings are anagrams
app.get('/api/isana/:s1/:s2', cors(), (req, res) => {
    res.json({isAna: isAna(req.params.s2,req.params.s1)})
})

app.listen(PORT)