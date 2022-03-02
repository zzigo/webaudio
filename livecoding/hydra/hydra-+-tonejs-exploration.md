# Hydra + ToneJS exploration

## A first synch between ToneJS , H & p5

```cpp

//init p5 and toneJS libs inside hydra
p1 = new P5()
await loadScript("https://unpkg.com/tone")

//var declare [L]
var number = 0

//FM synth 
synth = new Tone.FMSynth().toDestination();

//create a class seq which loop hydra & toneJS functions
seq = new Tone.Sequence ((time,note) => {

//trigger the tJS synth in eighteen notes in proportion with time
synth.triggerAttackRelease(note, "8n",time);

//convert pitch notation into midivalues - shift to absolute octave
number = (Tone.Midi(note).toMidi())-60;

//p5 text kind of console
p1.background(0);
p1.hide()
p1.textSize(300);
p1.fill(255);
p1.text(number,20,p1.displayHeight-200); 

//hydra loop
osc(number*10).kaleid(number).out();

},["C4", ["C#5", "D6", "D#5"], "E4", ["F5", "F#6"]]).start(0);

//p5 rendering
s1.init({src: p1.canvas}) 
src(s1).out(o3)

//tonejs transport setup
Tone.Transport.start();
Tone.Transport.bpm.value = 60;

//hydra rendering
render()
```
