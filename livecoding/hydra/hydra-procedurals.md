# Hydra procedurals

### Audio

#### &#x20;a.

```
a.show() //shows audio input
a.hide() //hides audio input
```

#### a.fft\[]

use lowest sound calue (bass freqs)

```
shape(3,() => a.fft[0]).out() // audio input controls shape's size
```

a.setSmooth

```
a.setSmooth (0.9) //add this command above the previous code
```

#### Audio and Mouse together

```
a.show();
a.setBins(3);

shape( 3 )
.rotate(

  () => Math.PI * mouse.x / 180

)
.repeatX( 30 )
.repeatY( 30 )
.scale(
  () => a.fft[0]*4
)
.out( o0 );
  a.setSmooth (0.9);
;
render(o0);
```

### Screen

```
s0.initScreen()

src(s0)
    .invert()
    .blend(o0,0.94)
    .modulate(o0, 20)
    .out()
```
