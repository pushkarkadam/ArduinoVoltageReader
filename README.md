# Arduino Voltage Reader

The project uses [johnny-five](http://johnny-five.io/) to read the voltage from an Arduino. The voltage value is displayed on the webpage using [websockets](https://socket.io/).

The code also uses the [canvas gauges](https://canvas-gauges.com/) that shows the voltage value converted from voltage to kmph. The change in voltage is reflected by the gauge animation.

## Installing NodeJS

For installation [click here](https://nodejs.org/en/download/).

## Installing Dependencies

Initiating the project setup for nodejs

`npm init`

Installing express server

`npm install express --save`

Installing nodemon

`npm install nodemon --save-dev`

Installing socket.io

`npm install socket.io --save`

Installing johnny-five

`npm install johnny-five --save`

Installing canvas gauges

`npm install canvas gauges --save`

Installing dotenv

`npm install dotenv`

## Arduino Firmware

For using the **johnny-five** with Arduino, upload the `StandardFirmata` on your arduino.

`StandardFirmata` can be accessed by opening the Arduino IDE and following the steps:

`File > Examples > Firmata > StandardFirmata`

If you are using Arduino Nano make sure you follow the steps before uploading `StandardFirmata` on your board.

`Tools > Processor > ATmega328P (Old Bootloader)`

## .env files

All the configuration variables are stored in `.env` file.

This is a node dependency.

Following command loads the node dependency:

`require('dotenv').config();`

The values stored in `.env` file are in `key=value` pairs.

The value is stored in string. So, it is necessary to use `parseInt()` to convert string to int.

## Running

* Browse in the directory using command prompt or terminal
* Connect the Arduino to your computer
* Run `nodemon index`
