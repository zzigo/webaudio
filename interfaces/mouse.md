# mouse

### Static mouse position

We are using the element canvas. Canvas is used to draw graphics on a web page via Javascript. We will use it to track the mouse activity. To know more about it, go to [Canvas](../html/canvas.md).\


To catch the mouse activity we are using an **HTML DOM event** called _**onclick**_, but the problem is that there is no continuous information and we only know the mouse position on the click event.

{% embed url="https://replit.com/@jsmusic/mouse01#index.html" %}

### Dynamic mouse position

In this case, we've changed the **HTML DOM EVENT** from _**onclick**_ to _**onmousemove**_, triggering the function `mouseActivity`() which takes the `clientX,Y` properties showing mouse's coordinates.

Just to experiment we added another HTML DOM EVENT called _**onmouseout**_ that trigger the function `clearCoor()` once the mouse is outside the canvas. It will erase the content of the onScreenConsole.

{% embed url="https://replit.com/@jsmusic/mouse02#index.html" %}

### Mouse position on full window

We have another option to control the mouse activity through the **document** object. Due the [Hoisting](../javascript/js-hoisting.md) we don't need to put the function prior to the others.&#x20;

In this case, the mouse coordinates are no longer limited to the canvas area but to the whole document.&#x20;

This is useful for [Theremin](../welcome-to-wa-hem/gallery.md) app,  since is dealing with the fullscreen type defined by CSS as we will see in the next step.

{% embed url="https://replit.com/@jsmusic/mouse03#index.html" %}
