// Exercise 2.3
// ------------
// DON'T COPY/PASTE THE LAST EXERCISE. REWRITE IT FROM SCRATCH! (This is the last time.)
// Similar to the last exercise, write an app that gives the user
// a random amount of time (up to 5 seconds) to click the screen.

// It would be a good idea to create a new function that will manage the whole game.



function clickGame() {
    const timespan = document.getElementById('timer');
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
        remainingTime = (Math.floor(10*(remainingTime-.1)))/10;
        if (remainingTime <= 0){clearInterval(countdown);};
        h4.innerText = `You have ${remainingTime} seconds left to succeed.`;
    }, 100);

    document.addEventListener('click', indicateTheyClicked);
}

clickGame();