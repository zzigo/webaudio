# Sema

[https://sema.codes/playground/](https://sema.codes/playground/)\
\


### the three type of editors

#### 1.livecoding

The LiveCode Editor is where you will live code your music with a specific language syntax.

The LiveCode Editor also gives you commands through key combinations:

* to evaluate the code and playback sound, use **cmd–Enter** (Mac) OR **ctrl–Enter** (Win/Linux) \[_command+Enter_]
* to pause playback and stop sound, use **cmd–.** (Mac) OR **ctrl–.** (Win/Linux) \[_command+period_]
* to comment out lines of code in the editor, use **cmd–/** (Mac) OR **ctrl–/** (Win/Linux) \[_command+forwardslash_]

basics

```
> {1000}saw; // > play the code, {freq}<generator> 
> {{100}saw, {110}saw}mix; // {}mix  , the mix function.
> {{300}sin, {1000}sin}mul; // {}mul , ring modulation of two signals
{>0{300}sin, >1{1000}sin}mul; //play >0 left, and right >1

>{{1}noiz,200,1}lpz; //{1}noiz , noise gen with volum
{{1}noiz,2000,1}hpz;  // {gen,freq,q}lpz, low-pass or hihgpass filter
{{{1}noiz,200,1}lpz, {1}sqr}dac; //{functions,{channel}sqr}dac; //alternate channels
>{{1}adc, {10}sin}mul; //input + chopping

```



#### 2.javascript

In the _JavaScript Editor_ you can use JavaScript to edit and create new machine learning models.



#### 3.gramma

The _Grammar Editor_ enables you to customize and create a new language by defining and editing grammars.

This editor is _context-dependent_ and bound to the language of the LiveCode editor. So give focus to you LiveCode editor to show the button to create the grammar Editor.
