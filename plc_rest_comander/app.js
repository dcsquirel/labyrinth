const express = require('express')
const app = express()
const port = 3000

var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://mqtt.labict.be')

var bodyParser = require('body-parser');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/control', function(req, res) {

    console.log(req.body)
    res.send(req.body)

    var datastring = JSON.stringify(req.body);

    client.publish('test/plc/drive', datastring )

});



app.get('/', (req, res) => res.send('Hello World!'))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

