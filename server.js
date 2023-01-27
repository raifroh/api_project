const express = require('express')
const app = express()
let PORT = 8000

const savage = {
    'age': 29,
    'birthName': '212121',
    'birthLocation': 'London, England'
}
//create a server

app.listen(PORT, () => {
    console.log(`The server is now running on port ${PORT}!`)
})

//api
app.get('/api', (request, response) => {
    response.json(savage)
})

//serve up a file

app.get('/', (request,response) => {
    //this makes it check our current directory,
    response.sendFile(__dirname + '/index.html')
})
