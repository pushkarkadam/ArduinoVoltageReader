var socket = io.connect('http://localhost:4000');
var value = 10;
// Displays data on webpage
socket.on('transmission', function(data){
    voltage.innerHTML = '<p> Voltage: ' + data.toString() + '</p>';
});

socket.on('transmission', function(data){
    value = data;
    console.log(value);
    setInterval(function(value) {
        document.getElementById("gauge-a").setAttribute("data-value", value);
    }, 1800);
})
