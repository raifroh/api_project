const express = require('express')
const app = express()
let PORT = 8000

const people = {
    '21 savage':
        {'age': 29,
        'birthName': 'twenty-one',
        'birthLocation': 'London, England'
    },
    'chance the rapper':
        {'age': 29,
        'birthName': 'Chancelor',
        'birthLocation': 'Chicago, Illinois'
    },
    'monica':
        {'age': 25,
        'birthName': 'Monica',
        'birthLocation': 'San Diego, Illinois',
        'status': 'Loved by Rai'
    },
    'unknown':
        {'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    },

}
//create a server

app.listen(PORT, () => {
    console.log(`The server is now running on port ${PORT}!`)
})

//api
app.get('/api/:name', (request, response) => {
    const personName = request.params.name.toLowerCase()
    if(people[personName]){
        response.json(people[personName])
    }else{
        response.json(people['unknown'])
    }
})

//serve up a file

app.get('/', (request,response) => {
    //this makes it check our current directory,
    response.sendFile(__dirname + '/index.html')
})
