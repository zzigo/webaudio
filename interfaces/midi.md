---
description: >-
  introduction to the Web MIDI APPI for sending and receiving midi data from
  your browser
---

# midi

Web MIDI APi exposes the object `navigator` with the method `.requestMIDIAccess().` This method uses a mechanisms called _promise._ The `Promise` object represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Like a proxy not necessarily known when the promise is create. Its allows you to associate handlers with an asynchronous action's eventual success value or failure reason. `Promise` has three methods:&#x20;

.then(), .catch() and .finally() , used to associate further actions with a promise that becomes settled.&#x20;

Lets see an example with the midiAccess:

```
let midiOutput = null;
navigator.requestMIDIAccess()
.then(function(midiAccess) {
  const outputs = Array.from(midiAccess.outputs.values());
  console.log(outputs);
});
```

1. we take the output device by calling midiAccess.outputs.values(). It returns an iterator which can be used to obtain all our output.&#x20;
2. Then we use `Array.from` to convert it into an array.

#### Send a midi event

First we need to understand the low-level MIDI message structure.

Midi 1.0 send a 8,16 or 24-bit message. Depending on the prefix the device knows which message we are sending: noteon, noteoff, ctlout, etc.&#x20;

```
1001000 - noteOn
1000000 - noteOff
```

Next message is a 4 bits encoding the MIDI Channel number, up to 16.000Third message is the key value in midiNotes (C4 = 60)

Fourth octet represents velocity (0-128)

{% embed url="https://miro.medium.com/max/1400/1*8cFFGrWDYP1dVgakms8yWQ.png" %}
structure of a midi message
{% endembed %}

We can send the message both in  binary or in hexadecimal, which is the most common.&#x20;

```
midiOutput.send([0x90, 0x3C, 0x80]); // hexadecimal
midiOutput.send([0b10000000, 0b00011100, 01111111]); // binary
midiOutput.send([144, 60, 128]); // decimal
```
