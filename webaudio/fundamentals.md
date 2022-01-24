# fundamentals



## hello world: The AudioContext()

1. The audio context is an object that will contain everything related to web audio. It's similar to the concept of canvas in js and puredata. Technically speaking is an instance that starts a thread (a memory allocation on the RAM of the microprocessor being evaluated continuously).
2.  AudioContext is an audio node-graph:

    * For example, you play the guitar, and you have an amp, well, the guitar is a source, and the amp is the destination.

    [https://kroki.io/blockdiag/svg/eNpLyUxML0rMVUhMyc3MU6jm4lJQSC\_KLy1QSC\_NLEksAoooAAGUE52TmJSao2CroOQe6hniGKQUaw2WTsksLkGSdPEMDvEPCvH091MIcHVx9IErSy0uycxLLMnMz0NS7egbAFFQC7YcYpOuHbqhSZl5KRB1YAmQAoRxXLVcANTyO\_A=](https://kroki.io/blockdiag/svg/eNpLyUxML0rMVUhMyc3MU6jm4lJQSC\_KLy1QSC\_NLEksAoooAAGUE52TmJSao2CroOQe6hniGKQUaw2WTsksLkGSdPEMDvEPCvH091MIcHVx9IErSy0uycxLLMnMz0NS7egbAFFQC7YcYpOuHbqhSZl5KRB1YAmQAoRxXLVcANTyO\_A=)

    * But then you add a dist pedal, an eq, and a reverb pedal.
    * This chain of source audio plus FX that modifies the sound is what is called a "node graph".
    * Each component is a **node.**
    * We start with a \*\*source node (\*\*a guitar, a saw wave, a sample), then we interpose a node (an fx, a process), and end with a \*\*destination node (\*\*speakers, re-router, any type of output).
    * It’s not considered §good practice to have more than one audio context in a single project.

### Audio Context

is a directed graph of audio nodes that defines how the audio stream flows from its source (file, synth) to its destination (speakers). As audio passes through each node, its properties can be modified or inspected. The simplest audio context is a connection directly from a source node to a destination node.

There are three types of audio nodes,

1. The **Source Node** \[produces sound]
2. The **Processing Node** \[process sound]
3. The **Destination Node** \[creates and render the audio]

#### webaudio API

* WebAudio is an API \[ application programming interface]
* An API is a portion of code that a programmer is given access to, which controls a larger unseen body of code within certain constraints. Imagine if, to learn how to play your favorite musical instrument, you had to literally build it from scratch. As you can imagine, this would get very tedious—especially if the instrument were to break. Thus, it’s much more convenient to learn to play a pre-made musical instrument. The convenience here is that the construction process is removed and your only concern is what is important to you, which is the controls needed to use the instrument. Similarly, programmers write **APIs** that expose only small pieces of code for developers to use, and these small pieces of code allow you to do a lot of work with minimal effort.
* In addition to being able to load and playback sound files, the Web Audio API also allows you to generate sound from scratch in the form of oscillators. You can then manipulate any sound playback or generation using filters, reverb effects, dynamic compressors, delay effects, and a host of other options.

#### Some characteristics of Web Audio API

1. Web Audio API is a native JavaScript library for advanced audio processing.
2. Allows access to features as sythesis, analysis, visualization, spacialisation, and time-based performances.
3.  The easiest helloworld flowchart is to create an AudioContext which is a method of the **window** object.

    ```jsx
    new (window.AudioContext || window.webkitAudioContext)();
    ```



```jsx
//a basic connection

const context = new AudioContext(), osc = new OscillatorNode(context), amp = new GainNode (context, {gain:0.5});
osc.connect(amp).connect(context.destination);
osc.start();
```

But this won't work on many browsers due a limitation introduced in 2018 by Google Chrome:

The user gestures are required for the browser tab, so as minimum I need to create a button to play the audio context when its pressed.

```jsx
window.addEventListener('load', () => {

  const button1 = document.getElementbyId("start");
  button1.disable = false;
  button1.addEventListener ('click', () => context.resume());

})
```

#### AudioBuffer

```jsx
const playSample = (audioBuffer, audioContext) => {
	const bufferSource = 
		new AudioBufferSourceNode(audioContext, {buffer: audioBuffer});
  const amp = new GainNode (audioContext);
  bufferSource.connect(amp).connect(audioContext.destination);
  bufferSource.start();
```

To grant separability is useful to construct the audio nodes inside variables .

Here we're passing the buffer (audioBuffer) to create a buffer source (the bufferSource)

Then we connect the bufferSource (a private node) to the amp (the process node) and the amp to the destination./

```jsx
class Pad {
    constructor (outputNode, audioBuffer) {

      this._context = outputNode.context;
      this._buffer = audioBuffer;
      this._outputNode = outputNode;
    }
  }
```

Finally we add a sample method , almost the same than the prior function.

But with one differences, that we're now referring to objects store on this variable

```jsx
playSample () {
	const bufferSource = 
		new AudioBufferSourceNode(this._context, {buffer: this._bufffer});
  const amp = new GainNode (this._context);
  bufferSource.connect(amp).connect(this._outputNode);
  bufferSource.start();
}
```
