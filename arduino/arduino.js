const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const portusb = new SerialPort('COM4', { baudRate: 38400 });
const parser = portusb.pipe(new Readline({ delimiter: '\n' }));
// Read the port data
portusb.on("open", () => {
  console.log('serial port open');
});
parser.on('data', data =>{
  console.log('got word from arduino:', data);
});




const express = require('express')
const app = express()
const port = 3000

var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://mqtt.labict.be')

var bodyParser = require('body-parser');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
client.publish('test/plc/drive', 'dikke test' )
app.post('/api/control', function(req, res) {

    // console.log(req.body)
    // res.send(req.body)

    // var datastring = JSON.stringify(req.body);

    // client.publish('test/plc/drive', datastring )
    client.publish('test/plc/drive', 'dikke test' )


});

// while (i < 10) {
//     text += "The number is " + i;
//     i++;
//   }



app.get('/', (req, res) => res.send('Hello World!'))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))







