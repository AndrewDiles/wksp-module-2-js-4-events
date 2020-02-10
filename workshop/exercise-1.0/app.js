// Exercise 1.0
// ------------
// Write an app that registers a click anywhere on the screen.
// Once the user clicks, let them know that they did it!

// Hints:
// - Target the <body>

// OPTIONAL
// Feel free to add some CSS to this once you're done
// --------------------------------------------------

const body = document.getElementById('main');
const INCREMENT = 2;

const indicateTheyClicked = function(){
    body.innerText = 'You clicked, well done!';
    body.style.fontSize += INCREMENT;  //doesn't work lol
}


document.addEventListener('click', indicateTheyClicked);