var Gpio = require('../onoff').Gpio,
    //led = new Gpio(17, 'out'), // 38
    button = new Gpio(1, 'in', 'both'); // 117

button.watch(function(err, value) {
    if (err) exit();
    console.log("Button pressed");
    //led.writeSync(value);
});

function exit() {
    //led.unexport();
    button.unexport();
    process.exit();
}

process.on('SIGINT', exit);

setInterval(function(){
    button.read(function(err, value) {  // Asynchronous read.
        if (err) throw err;
        console.log("value: " + value);
    });
}, 1000);



