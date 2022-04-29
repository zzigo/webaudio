# Module Pattern

A module patter is a type of encapsulation commonly used as a singleton style object where only one instance exists.



### types of modules

### anonymous closure

```
(function() {
  'use strict';
  // Your code here
  // All function and variables are scoped to this function
})();
```

Is a function that wrap our code and create an enclosed scope..

Is also an IIFE (invoked function expression), it means that the function is evaluated then immediately invoked (you don't need to call the function again being a kind of autorun function)

#### Exporting

Next we will want to export our module. This basically assigns the module to a variable that we can use to call our modules methods.

```
var myModule = (function() {
  'use strict';

})();
```

### public modules

To expose this method to code outside our module we return an `Object` with the methods defined.

```
var myModule = (function() {
  'use strict';

  return {
    publicMethod: function() {
      console.log('Hello World!');
    }
  };
})();

myModule.publicMethod(); // outputs 'Hello World'
```

