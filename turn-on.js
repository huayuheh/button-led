
var Gpio = require('onoff').Gpio,	//onoff module (use npm install onoff)
  button = new Gpio(17, 'in', 'both'),	//setup GPIO17 as output
  ed = new Gpio(27, 'out'),      //setup GPIO27 as output
  ledState = 0; 		  //internal variable to track LED state (1 = on, 0 = off)



button.setActiveLow( true );		//optional to reverse button value

button.watch(function(err, value) {	//watch button changes
	if (value === true){
		led.writeSync( 1 );
		console.log('Button is ON' );
	}else{
		led.writeSync( 0 );
		console.log('Button is OFF');
	}
});

process.on('SIGINT', function(){
  button.unexport();
  led.unexport();
  process.exit();
});





// setInterval( function(){	  //setInterval repeats a function every fixed preset milliseconds
//   led.writeSync( ledState );	  //output next ledState
//   ledState = ledState ? 0 : 1;    //update next ledState, if 1 then 0 else if 0 then 1
// }, 100);			  //setInterval fixed preset milliseconds

