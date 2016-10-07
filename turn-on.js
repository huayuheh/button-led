  led = new Gpio(27, 'out'),      //setup GPIO27 as output
  ledState = 0; 		  //internal variable to track LED state (1 = on, 0 = off)

setInterval( function(){    //setInterval repeats a function every fixed preset milliseconds
  led.writeSync( ledState );    //output next ledState
  ledState = ledState ? 0 : 1;    //update next ledState, if 1 then 0 else if 0 then 1
}, 3000);        //setInterval fixed preset milliseconds


button.setActiveLow( true );		//optional to reverse button value





