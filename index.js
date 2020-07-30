var express = require('express');
var socket = require('socket.io');
var five = require('johnny-five');
require('dotenv').config();

// App setup.
var app = express();

// IP address
var ip = require("ip")

const PORT = process.env.PORT

var server = app.listen(PORT, String(ip.address()), function(){
    console.log('IP address: http://' + String(ip.address()) + ":" + String(PORT));
});

// Static files.
app.use(express.static('public'));

// Socket setup.
var io = socket(server);

io.on('connection', function(socket){
    console.log('made socket connection', socket.id);

    socket.on('transmission', function(data){
        io.sockets.emit('transmission',data);
    });
});

// Arduino settings.
const MAX_VOLTAGE = parseInt(process.env.MAX_VOLTAGE);
const ANALOG_PIN = parseInt(process.env.ANALOG_PIN);
var voltage_value = 0;

var board = new five.Board();

// Sends voltage value to websocket webpage
io.on('connection', function(){
    // Connects Arduino board and reads voltage.
    board.on('ready', function(){
        this.pinMode(ANALOG_PIN, five.Pin.ANALOG);

        this.analogRead(ANALOG_PIN, function(voltage){
            voltage_value = voltage * (MAX_VOLTAGE/1023.0);
            io.emit('transmission',voltage_value);
        });
    });

});

// Error handling when board is not connected.
board.on("error", function(err){
    console.log("On Error: ", err.message);
    process.exit(0);
});
