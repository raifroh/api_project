const express = require('express')
const app = express()

//serve up a file

app.get('/', (request,response) => {
    response.send('/index.html')
})
