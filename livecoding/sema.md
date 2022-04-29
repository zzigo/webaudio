# Sema

[https://sema.codes/playground/](https://sema.codes/playground/)\
\
Sema is developed at the University of Sussex, with ❤️ and funding from two UKRI/AHRC grants 'MIMIC - Musically Intelligent Machines Interacting Collaboratively' and 'Innovating Sema'. It builds upon many amazing contributions of the open-source community, including [Svelte](https://svelte.dev), [Routify](https://routify.dev), [Supabase](https://supabase.com), [Nearley](https://nearley.js.org) and [Maximilian](https://github.com/micknoise/Maximilian).

Its main feature, unlike other livecoding frameworks, is that you can create your own language from grammar definitions.

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

```
//variables

//:<name>:<content>

:osc1:{102}sawn;
:osc2:{201}sawn;
:osc3:{199}sawn;
:osc4:{150}sawn;
>{:osc1:, :osc2:, :osc3:, :osc4:}mix;


:all:{:osc1:{102}sawn,:osc2:{103}sawn}mix;
>{:osc1:,10}dist;

```

#### 2.javascript

In the _JavaScript Editor_ you can use JavaScript to edit and create new machine learning models.



#### 3.gramma

The _Grammar Editor_ enables you to customize and create a new language by defining and editing grammars.

This editor is _context-dependent_ and bound to the language of the LiveCode editor. So give focus to you LiveCode editor to show the button to create the grammar Editor.
