

		//global variables
	var actx, master, now = null;


actx = new AudioContext();
master = actx.createGain();
now = actx.currentTime;
master.gain.setValueAtTime (0.2,0);




function kick() {

var osc = actx.createOscillator();
var gainOsc = actx.createGain();
var osc2 = actx.createOscillator();
var gainOsc2 = actx.createGain();


osc.type ="triangle"; 
osc2.type = "sine";

osc.frequency.value = 40;
osc2.frequency.value = 70;

//gain
gainOsc.gain.setValueAtTime (1, actx.currentTime);
gainOsc.gain.exponentialRampToValueAtTime(0.001, now+ 0.5);

gainOsc2.gain.setValueAtTime (1, actx.currentTime);
gainOsc2.gain.exponentialRampToValueAtTime(0.0001, now+ 0.5);

//freq
osc.frequency.setValueAtTime (1, actx.currentTime);
osc.frequency.exponentialRampToValueAtTime(0.001, now+ 0.5);

osc2.frequency.setValueAtTime (50, actx.currentTime);
osc2.frequency.exponentialRampToValueAtTime(0.001, now+ 0.5);

//connections
osc.connect(gainOsc);
osc2.connect(gainOsc2);
gainOsc.connect(master);
gainOsc2.connect(master);
master.connect(actx.destination);

osc.start(now);
osc2.start(now);

osc.stop(now + 0.4);
osc2.stop(now + 0.5);

}

function createKick(){
const kickB = document.createElement("button")
kickB.innerText = "kick";
kickB.addEventListener("click", function() {kick()});
document.body.appendChild(kickB);
}