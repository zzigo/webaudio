# audio params

All AudioParams have methods that we can use to manipulate their values. Using these methods, we can set envelopes and create more finite control structures of our audio signal using automation.

Let’s first look at an example.

Say I want to add an envelope to a square wave:

```jsx
window.AudioContext = window.AudioContext || window.webkitAudioContext;

var audioContext = new AudioContext();
var osc = audioContext.createOscillator();
var currentTime = audioContext.currentTime;

osc.type = 'square';
osc.gain.value = 0.2;
osc.frequency.value = 0;

osc.connect(audioContext.destination)

osc.start(0);
osc.stop(4);
```

Here the sound will appear immediately, and if you didn’t set your gain properly, you’re gonna have a bad time.

Now, we will use the _AudioParam_ methods **setValueAtTime** & **exponentialRampToValueAtTime**.

```jsx
osc.frequency.setValueAtTime(440, currentTime)
osc.frequency.exponentialRampToValueAtTime(5000, currentTime + 1.0);

osc.frequency.exponentialRampToValueAtTime(200, currentTIme + 2.0)
```

The `setValueAtTime` AudioParam method will assign a specific numerical value at a specific point in time relative to the `AudioContext.currentTime`. The `exponentialRampToValueAtTime` AudioParam method will move a value exponentially to a certain number at a specified time relative to our initial `setValueAtTime` value.

The `setValueAtTime` simply sets an AudioParam _value_ (the first argument) to be assigned at a specific _startTime_ (the second argument). The AudioParam will be set to the assigned value a the assigned startTime.  We've already converted the startTime into the variable `now` .

`exponentialRampToValueAtTime` ramps to a value (the first argument) exponentially until the specified endTime argument (the second argument). We also can use `linearRampToValueAtTime`, which has the same functionality except it operates _linearly_ and not exponentially.

Another AudioParam method is `setValueCurveAtTime`. This method gives us another form of AudioParam automation. It accepts in array of values, and automates these values based on a beginning time argument and a duration time argument.

An example :

```jsx
var waveArray = new Float32Array(5);
waveArray[0] = 200;
waveArray[1] = 700;
waveArray[2] = 2000;
waveArray[3] = 100;
waveArray[4] = 440;

osc.frequency.setValueCurveAtTime(waveArray, currentTime + 4, 4);
```

The above code will automate the frequency between these set values _evenly_, beginning after 4 seconds and lasting for 4 seconds. Add this code to our existing AudioParam example, and we should have something like this.

```jsx
window.AudioContext = window.AudioContext || window.webkitAudioContext;

var audioContext = new AudioContext();

var globalGain = audioContext.createGain();

var currentTime = audioContext.currentTime;
var osc = audioContext.createOscillator();
console.log(osc);

osc.type = 'square';
osc.frequency.value = 0;

// Attack
osc.frequency.setValueAtTime(440, currentTime);
osc.frequency.exponentialRampToValueAtTime(5000, currentTime + 2);

// Decay
// osc.frequency.setValueAtTime(5000, currentTime + 3)
osc.frequency.exponentialRampToValueAtTime(200, currentTime + 3);

var waveArray = new Float32Array(5);
waveArray[0] = 200;
waveArray[1] = 700;
waveArray[2] = 2000;
waveArray[3] = 100;
waveArray[4] = 440;

osc.frequency.setValueCurveAtTime(waveArray, currentTime + 4, 4);

osc.connect(globalGain);
globalGain.connect(audioContext.destination);

osc.start(currentTime);
osc.stop(10);
```

The final two AudioParam methods are `setTargetAtTime` and `cancelScheduledValues`.

`setTargetAtTime` takes three arguments. The first is the target, the value that will be transitioned to. The second is the startTime, the time relative to `AudioContext.currentTime`, the transition will begin. The third is the timeConstant, or the duration of the transition.

So, if we write our code like this:

\`target.setValueAtTime(440, currentTime);

target.frequency.setTargetAtTime(880, currentTime + 1, 0.2);\`

Here, we are targeting the frequency value of an oscillator. First, use the `setValueAtTime` method to a frequency of 440 at the currentTime. This will let the `setTargetAtTime` method know at what value to start from. If you do not use `setValueAtTime` before any other AudioParam method, you will get errors and bugs.
