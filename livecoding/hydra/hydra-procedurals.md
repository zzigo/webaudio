# Hydra procedurals

### Audio

#### &#x20;a.

```
a.show() //shows audio input
```

#### a.fft\[]

```
shape(3,() => a.fft[0]).out() // audio input controls shape's size
```

a.setSmooth

```
a.setSmooth (0.9) //add this command above the previous code
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
