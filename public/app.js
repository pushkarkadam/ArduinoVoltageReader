var ipAddress = String(window.location.href);

var socket = io.connect(ipAddress);
var value = 0;

socket.on('transmission', function(data){
    var voltageConverter = 100 / data[0]
    value = data[1] * voltageConverter;
});

setInterval(() => {
    if (value < 25) {
        document.getElementById("gauge-a").setAttribute("data-color-bar-progress", "rgba(240,47,12,.75)");
    }
    else if (value < 50 ) {
        document.getElementById("gauge-a").setAttribute("data-color-bar-progress", "rgba(240,116,12,.75)");
    }
    else if (value < 75) {
        document.getElementById("gauge-a").setAttribute("data-color-bar-progress", "rgba(232,229,17,.75)");
    }
    else {
        document.getElementById("gauge-a").setAttribute("data-color-bar-progress", "rgba(35,235,12,.75)");
    }
    document.getElementById("gauge-a").setAttribute("data-value", value);
}, 1800);
