# 2.4.1 - JS Events

---

## Situation

Open the door, when someone is there.

<img src='./assets/door.gif' />

---

## Event-driven Programming

<img src='./assets/fig1_event.png' />

---

### Event Types

<img src='./assets/event_types.jpg' />

[Source](https://data-flair.training/blogs/javascript-event-types/)

---

#### User Interface Events

- `load`   //when node is loaded
- `unload`  //when node is unloaded
- `error`
- `resize`  //resizing screen
- `scroll` //user scrolling up or down

---

#### Focus and Blur Events

These events fire when the HTML elements you can interact with gain/ lose focus.

- `focus`  //when you click on something, the UI focuses on the node (ex:text field)
- `blur`  // focused item gains blur when you click off it
- `focusin` (_new; not supported by Firefox_)
- `focusout` (_new; same as blur; not supported by Firefox_)

---

##### Mouse Events

- `click`
- `dblclick`
- `mousedown`   //holding button down
- `mouseup`     //releasing click
- `mouseover`   //hover onto
- `mouseout`    //not hovering anymore
- `mousemove`   //any time the mouse moves

---

##### Keyboard Events

- `input`       //into an input field
- `keydown`     //
- `keypress`    //
- `keyup`       //release of keyboard button

---

### Form Events

- `submit`      //
- `change`      //has the field been modified
- `input`       //

---

### HTML5 Events

- `DOMContentLoaded`    //browser loads content
- `hashchange`          //if url has changed?
- `beforeunload`        //loads when exiting page       **this must be useful to user, not programmer

---

### CSS Events

- `transitionend`       //when a css transition ends
- `animationstart`      //when a css animation begins
- `animationend`        //when a css animation ends

---

### Events and DOM Nodes

All DOM nodes have methods we can use to _notify_ us of an event.

- [`addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [`removeEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener)

```js
// Example   - there is a button in the browser with if id btn

const button = document.getElementById('btn');
button.addEventListener('click', function(){
    console.log("ouch!");
});

button.removeEventListener('click', function(){
    console.log("ouch!");
});

//better to do this: 

function handleOuch = function() {
    console.log("Ouch!");
};

const button = document.getElementById('btn');
button.addEventListener('click', handleOuch);

button.removeEventListener('click', handleOuch);

```

---

### [Event Object](https://www.w3schools.com/jsref/obj_event.asp)

Event handler functions are passed an argument, when events are triggered.

This object includes lots of stuff.

- `preventDefault()`    
- `target`              
- `stopPropagation()`   

```js
function handleOuch = function(event) {
    event.preventDefault;
}
```
---
    
### Default Actions

Some events have _default_ actions associated to them.

- click a link                  //goes to href
- press down arrow              //scrolls down
- click `submit` in a Form      //resets form and sends info

In most cases handlers are called _before_ the default action takes place.

You can prevent the _default_ action from happening by calling `event.preventDefault();` in the eventListener function.

---
    
### target

- The  `target` property refers to the node where they originated. (example)            //
- With an `input`, use `event.target.value` to read what was entered into an `input`.   //
or, with an `input`, use `event.target.id` to know the id of the node they inputted into  //I wrote this, could be wrong
---

### Propagation

Handlers registered on nodes with children will also receive events that happen in the children.

```html
<div>
    <ul>
        <li><a href="#"><img scr="..."></a></li>
        ...
    </ul>
</div>
```

---

### 3 Phases of Event Propagation

- The Event Capture Phase
- The Event Target Phase
- The Event Bubbling Phase

**most** events bubble

---

<img src='./assets/propagation_bubbling.png' />

[Source](https://www.sitepoint.com/event-bubbling-javascript/)

---

`<p>A paragraph with a <button id="the-btn">button</button>.</p>`

```js
    
let para = document.querySelector("p");
let button = document.querySelector("button");

para.addEventListener("mousedown", () => {
    console.log("Handler for paragraph.");
});

button.addEventListener("mousedown", event => {
    console.log("Handler for button.");
    if (event.button == 2) event.stopPropagation();
});



//New playground  below

let button = document.querySelector("button");


button.addEventListener("mousedown", event => {
    console.log(event);  //this prints an object with a massive amount of information.  Useful.
    console.log(event.target);  //prints node being targetted
    console.log(event.target.style); //prints css on targetted node
    console.log("Handler for button.");
    if (event.button == 2) event.stopPropagation();
});



```

//a click on the button returns "Handler for button." then "Handler for button."

//but a right click on button only returns "Handler for button." because you stopped propagation (bubbling)


---

## Events and the Event Loop

Events can only be processed when _nothing_ else is running.

This means that other page processes will be delayed until there is time to process it.

This can occur if you have long-running event handlers, or _lots_ of short-running ones.

---

[Read a little more deeply...](https://eloquentjavascript.net/15_event.html)

---
