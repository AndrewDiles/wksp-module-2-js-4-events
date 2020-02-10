// Exercise 1.2
// ------------
// DON'T COPY/PASTE THE LAST EXERCISE. REWRITE IT FROM SCRATCH!
// Similar to the last exercise, write an app that gives the user
// a random amount of time (up to 5 seconds) to click anywhere on the screen.
// 
// But this time, let's let the user know how much time they have to actually 'click'.
// If they click inside of the required time, you should tell them that they've won,
// else let them know that they've lost.

// In short, 
// Replicate (and I mean, REWRITE it from scratch) the last exercise, and add
// - random amount of time to click
// - tell the user how much time they have to click.

// Challenge
// Make the countdown live...

const timespan = document.getElementById('time');
const h2 = document.createElement('h2');

const h4 = document.createElement('h4');
document.querySelector('body').appendChild(h4);



let won = false;
let timeToClick = 1+(Math.floor((Math.random())*4));
console.log(timeToClick);
let remainingTime = timeToClick;

timespan.innerText = timeToClick;

console.log(`User has ${timeToClick} seconds to click or they lose.`);

const indicateTheyClicked = function(){
    won = true;
    // alert("You win!");
    document.removeEventListener('click', indicateTheyClicked);
    h2.innerText = `You had ${remainingTime} seconds left to click until you failed at life.`;
    document.querySelector('body').appendChild(h2);
    clearInterval(countdown);
}

setTimeout(function(){ 
    if (won != true) {
        alert("You lost");
        document.removeEventListener('click', indicateTheyClicked);
    }
}, 1000*timeToClick);


let countdown = setInterval(function(){
    remainingTime -=0.1;
    remainingTime *= 10;
    remainingTime = (Math.floor(remainingTime))/10;
    console.log(remainingTime);
    if (remainingTime <= 0){clearInterval(countdown);};
    h4.innerText = `You have ${remainingTime} seconds left to succeed.`;
}, 100);

document.addEventListener('click', indicateTheyClicked);







// timespan.innerText = remainingTime;



// const body = document.querySelector('body');
// const timespan = document.getElementById('time');
// let won = false;
// let timeToClick = 1+(Math.floor((Math.random())*4));
// let remainingTime = timespan;

// console.log(`User has ${timeToClick} seconds to click or they lose.`);

// const clicked = function(){
//     won = true;
//     timespan.innerText = remainingTime;
//     console.log("hi");
//     body.removeEventListener('click', clicked);
// }

// setTimeout(function(){ 
//     if (won != true) {
//         // alert("You lost");
//         body.removeEventListener('click', clicked);
//     }
//     }, timeToClick*1000);


//     // while (won == false){
//     //     setTimeout(function(){ 
//     //         if (won != true) {remainingTime -=0.1;}
//     //         }, 100);
//     //     };

// body.addEventListener('click', clicked);