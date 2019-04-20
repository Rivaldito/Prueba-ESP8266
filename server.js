require('./config')
const express = require('express')
const bodyParser = require('body-parser')


const app = express()


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())





app.get('/', (req, res) => {

    res.json({
        data
    })

});

app.post('/data', (req, res) => {

    let body = req.body;

    var data = {
        numero: body.numero
    }

    res.json(data)

    console.log('HOLA')
})

app.listen(process.env.PORT)