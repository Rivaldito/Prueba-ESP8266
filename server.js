require('./config')
let express = require('express')


let app = express()


app.get('/', (req, res) => {

    res.json({
        hola: 12
    });

});

app.listen(process.env.PORT)