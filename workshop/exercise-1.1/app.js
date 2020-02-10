// Exercise 1.1
// ------------
// Write an app that gives the user 1s (or 1000ms) to click anywhere on the screen.
// 
// If they click inside of the required time, you should tell them that they've won,
// else let them know that they've lost.

// Hints:
// - Target the <body>
// - setTimout is your friend.
// - You'll a flag to store whether the user has won or lost

// OPTIONAL
// Feel free to add some CSS to this once you're done
// --------------------------------------------------

const body = document.getElementById('main');
let won = false;


const indicateTheyClicked = function(){
    won = true;
    alert("You win!");
    document.removeEventListener('click', indicateTheyClicked);
}

setTimeout(function(){ 
    if (won != true) {alert("You lost");
    document.removeEventListener('click', indicateTheyClicked);}
    }, 1000);


document.addEventListener('click', indicateTheyClicked);ti