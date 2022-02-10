# Hydra procedurals

### Audio

#### &#x20;a.

```
a.show() //shows audio input
a.hide() //hides audio input
```

#### a.fft\[]

```
shape(3,() => a.fft[0]).out() // audio input controls shape's size
```

use lowest sound value (bass freqs). a.fft gives normalize value between 0 and 1,  availablie in 4 different frequency bands: a.fft\[0],  a.fft\[1], a.fft\[2] and a.fft\[3]

```
shape(4).color(0,0,1).scale( () => a.fft[0] *2 ).out(o0)
  shape(5).color(1,0,1).scale( () => a.fft[1] *2 ).out(o1)
  shape(6).color(0,1,1).scale( () => a.fft[2] *2 ).out(o2)
  shape(7).color(0.5,0,1).scale( () => a.fft[3] *2 ).out(o3)
  render()
```

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

### WebCam

```
s0.initCam()
src(s0).saturate(2).contrast(1.3).layer(src(o0).mask(shape(4,2).scale(0.5,0.7).scrollX(0.25)).scrollX(0.001)).modulate(o0,0.001).out(o0)
```
