const express = require('express')
const bodyParser = require('body-parser');
const fs = require('fs') 

const app = express()
app.use(bodyParser.json()) //parse JSON body
app.use(bodyParser.urlencoded()) //parse x-www-form-urlencoded body

app.use((req, res, next) => {
    console.log(new Date(), req.path, req.body);
    req.requestTime = new Date();
    next();
});

app.get('/', (req, res) => {
    fs.readFile('index.html', (err, data) => {
        res.contentType('text/html').send(data)
    })
})

app.get('/foo/:myvar', (req, res) => res.send({var: req.params.myvar}))

app.post('/add', (req, res) => {
    res.send(`${parseInt(req.body.foo)+parseInt(req.body.bar)}`)
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))