---
description: These are a collection of snippets just to get fun on the browser
---

# js-fundamentals

open the console ⌘+⇧+J

erase the console ⌘+K&#x20;

copy the snippet and try out things!

#### webAudio&#x20;

```jsx
var audioContext = new AudioContext(); 
var osc = audioContext.createOscillator(); osc.type = "sawtooth"; 
osc.frequency.value = 100;
osc.connect(audioContext.destination); 
osc.start();
osc.stop(audioContext.currentTime + 1)
```

#### list all scripts in a webpage

```jsx
[].forEach.call( document.querySelectorAll("script[src]"), function( src ) { 
      console.log( src ); 
    });
```

#### envelopes in WA \[codegolfing style]

{% embed url="https://replit.com/@jsmusic/cg-tone" %}
