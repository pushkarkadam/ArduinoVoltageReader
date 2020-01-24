var socket = io.connect('http://localhost:4000');
var value = 0;
const VOLTAGE_CONVERTER = 17.76;

socket.on('transmission', function(data){
    value = data * VOLTAGE_CONVERTER;
    console.log(value);
});

setInterval(function() {
    document.getElementById("gauge-a").setAttribute("data-value", value);
}, 1800);
