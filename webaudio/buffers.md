# buffers

A buffer is a bunch of samples of digital audio in memory. Its length depends on the sample-rate an desired time (SR\*Time = sampleSize).\
\
We need to know three things about buffers:

1. How to **fill** a buffer with raw data (we already did it on the [Snare](generators/snare.md) experiment)
2. How to **load** a sample (wav, ogg, local or remote)
3. And how to **play** it  (linear or granular)

### Raw Generation

How we already did, using filters, formulas  and random number generators you can get the typical noise-types. There  is a great [article](https://noisehack.com/generate-noise-web-audio-api/#demo) and [lib](https://github.com/zacharydenton/noise.js) by Zachary Denton covering the topic extensively.

### How to Load a Sample







