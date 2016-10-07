var Gpio = require('onoff').Gpio,	//onoff module (use npm install onoff)
  button = new Gpio(17, 'in', 'both'),	//setup GPIO17 as output
  led = new Gpio(27, 'out'),      //setup GPIO27 as output
  ledState = 0; 		  //internal variable to track LED state (1 = on, 0 = off)

var startTime = new Date(milliseconds);
  setTimeout(function(){ led.writeSync( 0 ); }, 3000);
  setTimeout(function(){ led.writeSync( 1 ); }, 6000);

button.setActiveLow( true );		//optional to reverse button value



button.watch(function(err, value) {	//watch button changes
	if (value == true){
    endTime = new Date(milliseconds);
    reactionTime = endTime - startTime;
    led.writeSync( 0 );
		console.log('Your reaction time is ' + reactionTime + 'ms' );
	}else{
	}
});

process.on('SIGINT', function(){
  button.unexport();
  led.unexport();
  process.exit();
});