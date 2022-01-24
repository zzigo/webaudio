# buffers



```
const playSample = (audioBuffer, audioContext) => {
```

```jsx
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
