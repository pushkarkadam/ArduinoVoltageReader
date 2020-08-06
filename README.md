# Arduino Voltage Reader

The project uses [johnny-five](http://johnny-five.io/) to read the voltage from an Arduino. The voltage value is displayed on the webpage using [websockets](https://socket.io/).

The code also uses the [canvas gauges](https://canvas-gauges.com/) that shows the voltage input to the maximum permitted voltage in terms of percentage value. The change in voltage is reflected by the gauge animation.

## Installing NodeJS

For installation [click here](https://nodejs.org/en/download/).

## Installing Dependencies

Browse inside the `ArduinoVoltageReader` directory and execute the following to install node modules:

`npm install`

## Arduino Firmware

For using the **johnny-five** with Arduino, upload the `StandardFirmata` on your arduino.

`StandardFirmata` can be accessed by opening the Arduino IDE and following the steps:

`File > Examples > Firmata > StandardFirmata`

If you are using Arduino Nano make sure you follow the steps before uploading `StandardFirmata` on your board.

`Tools > Processor > ATmega328P (Old Bootloader)`

## Arduino Instructions

The maximum voltage value permitted in Arduino Nano's analog Pin is 5V.

## .env files

All the configuration variables are stored in `.env` file.

This is a node dependency.

Following command loads the node dependency:

`require('dotenv').config();`

The values stored in `.env` file are in `key=value` pairs.

The value is stored in string. So, it is necessary to use `parseInt()` to convert string to int.

### Creating .env file

To create a `.env` file using GNU nano, enter the following command in terminal inside `ArduinoVoltageReader` directory.

`nano .env`

A nano text editor opens up. Type the following code:

```
# Maximum voltage to read is 5V.
MAX_VOLTAGE=5

# Select the analog pin on the Arduino
ANALOG_PIN=6

# Port for the server
PORT=4000
```

Press `Ctrl + X` to exit Nano.

Alternatively, use any code editor and create a file named `.env` and copy the upper mentioned code.

## Running

* Browse in the directory using command prompt or terminal
* Connect the Arduino to your computer
* Run `node index.js`

## Running on Raspberry Pi

### Installation steps

* Clone this repository by using `git clone <repo>`.

* Browse inside the project directory by typing `cd ArduinoVoltageReader`.

* Once inside the `ArduinoVoltageReader` directory, install node modules by typing `npm install`.

* Create a `.env` file by typing `nano .env`

    * A text editor will open.

    * Copy the code mentioned in **Creating .env file**.

    * Once the code is copied, save by pressing `Ctrl + X`.

### Connecting Arduino to Raspberry Pi

* Connect Arduino with Raspberry Pi with the USB.

* Attach the positive terminal of the voltage source to the Analog Pin selected in `.env` file (In this case Analog Pin 6 `A6`).

* Attach the negative terminal of the voltage source to any ground `GND` pin on Arduino.

### Launching the express server on Raspberry Pi

* Make sure you are in the directory `ArduinoVoltageReader`.

* Launch the express server by typing: `node index.js`.

* Copy the IP address displayed in the terminal.

### Viewing the display on webpage

* Use a chromium browser.

* Copy the IP address from the terminal into the search bar and go.

* The dial gauge should appear.

### THE GAUGE DOES NOT DISPLAY ANY CHANGES

* Terminate the server by pressing `Ctrl + C` in the terminal.

* Restart the server by typing `node index.js`.

* Refresh the browser.
