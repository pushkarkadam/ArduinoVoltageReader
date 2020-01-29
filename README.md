# Arduino Voltage Reader

The project uses *johnny-five* to read the voltage from an Arduino. The voltage value is displayed on the webpage using *websockets*.

The code also uses the *canvas gauges* that shows the voltage value converted from voltage to kmph. The change in voltage is reflected by the gauge animation.

## Installing NodeJS

For installation on Windows [click here](https://nodejs.org/en/download/).

## Installing Dependencies

`npm init`

`npm install express --save`

`npm install nodemon --save-dev`

`npm install socket.io --save`

`npm install johnny-five --save`

`npm install canvas gauges --save`

## Arduino Firmware

For using the *johnny-five* with Arduino, upload the `StandardFirmata` on your arduino.

`StandardFirmata` can be accessed by opening the Arduino IDE and following the steps:

`File > Examples > Firmata > StandardFirmata`

If you are using Arduino Nano make sure you follow the steps before uploading `StandardFirmata` on your board.

`Tools > Processor > ATmega328P (Old Bootloader)`
