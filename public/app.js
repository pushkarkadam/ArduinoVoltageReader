var socket = io.connect('http://localhost:4000');

// Displays data on webpage
socket.on('transmission', function(data){
    voltage.innerHTML = '<p> Voltage: ' + data + '</p>';
});
