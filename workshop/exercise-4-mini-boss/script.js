const main = document.getElementById('main');
const container = document.getElementById('container');


let vpw = window.innerWidth;
let vph = window.innerHeight;

main.style.height = `${vph}px`;
main.style.width = `${vpw}px`;
container.style.height = `${vph}px`;
container.style.width = `${vpw}px`;

const game = function(){                                                    // All-encompassing game function 

    const setTimer = function(){                                            // function to set 30s until failure
        setTimeout(timeToFail, 30000);
    }
    let switchButtonClass;                                                  // scoping variable name out of inner functions
    let gameOver = false;
    let success = false;

    const b = 5+(2*Math.floor(1+((Math.random())*7)));                      // 'random' # of boxes to make = 2d8 +5

    const makeStartButton = function(){                                     // function: makes the start button                             
        const startButton = document.createElement('button');               // typing shortcut
        startButton.innerText = "Do you want to play a game?"               // adds text for user to see
        startButton.style.width = '400px';                                  // making box larger than other buttons will be
        startButton.style.backgroundColor = 'blue';                         // blue is nicer
        startButton.style.opacity = '0.5';                                  // transparency is also a positive
        startButton.style.top = '0px';
        startButton.style.position = 'absolute';
        startButton.style.left = '25%';
        main.appendChild(startButton);                                      // puts the button on screen
    
        const start = function(){                                           // what to do once start is pushed
            startButton.style.display = 'none';                             // remove the start button
            startButton.removeEventListener('click', start);                // remove the listener for the start button
            makeBoxes();                                                    // make the boxes
        }
        startButton.addEventListener('click', start);
    }

    const makeBoxes = function(){
        for (i=1; i<=b; i++){
            const button = document.createElement('button');
            button.className += `button${i}`;                               // adding classname: button#
            let h = 0;                                                      // creating some variables
            let w = 0;
                for (j=0; j<10; j++){                                       // simulate each roll 10 times
                    w += 1+(Math.floor(11*Math.random()));                  // simulates a d12 roll
                    h += 1+(Math.floor(11*Math.random()));                  // same as above but for height
                }
            // console.log("Height of " + h + "  Width of " + w);           Was testing
            button.style.height = `${h + 30}px`;                            // sets height to 10d12 +30
            button.style.width = `${w + 30}px`;                             // same as above but for width
            x = (80*(Math.random()))+10;                                    // making random numbers from 10-90
            y = (80*(Math.random()))+10;
            button.style.top = `${y}%`;                                     // setting x and y axes of button locations
            button.style.left = `${x}%`;
            button.style.position = 'absolute';                             // letting button locations break confines of parent
            container.appendChild(button);                                  // inserting button into (ill-named) container

            let switchButtonClass = function(event) {                       // what occurs when a button is clicked
                    // const buttonClass = event.target.className;          // apparently I don't need this       
                    button.classList.toggle('purple');                      // switches class: purple of button on/off
            }
            console.log(button);
            button.addEventListener('click', switchButtonClass);            // creates a Listener for each Button
            console.log(switchButtonClass);
        }
        // boxes are now made.  Start the timer and begin testing if we done done
        setTimer();                                                         // start the fail clock
        wonYet();                                                           // begins the success interval tests
    }

    const timeToFail = function(){                                              // the 'you failed?' function
        if (success == false){    
            alert(`You have failed in life.  Couldn't even click some boxes?`); // you did fail
            // clearTimeout(timeToFail, 30000);                                 //clear it
            gameOver = true;                                                    //gg?
        }
    }
    
    const wonYet = function(){
        let t = 0                                                               // setting initial time
        const internalWinTest = function(){
            t +=0.1;                                                            // incrementing time 100ms
            let finished = true;                                                // setting intial state of finished
            for (i=1; i<=b; i++){                                              // creating a loop for each button
                const button = document.querySelector(`.button${i}`);           // I was missing the . for about 10 minutes of debugging haha   
                if (!button.classList.contains('purple')){finished=false;}      // testing that each button is purple
            }
            if (gameOver === true) {                                            // if game is done...
                clearInterval(wonYet)                                           // stop the repeating function
                clearListeners();                                               // stop the boxes from listening
            }
            else if (finished===true){                                          // so I have several ways of indicating the game is done.  I should have named them better...
                gameOver = true;                        
                clearInterval(wonYet);                                          // clear it
                success = true;                                                 // you won
                clearListeners();                                               // stop the boxes from listening
                // clearTimeout(setTimer);                                      // clear it
// note: I spent a lot of time on the above line and failed to get it to stop the setTimeout()
// in the end, I just changed its function to only do something if success == false.
                alert(`much wow.  so impressed.  u clickeded da b's gud... `);          // paltry reward
                let fanfare = new Audio('final-fantasy-vii-victory-fanfare-1.mp3');     
                fanfare.play();                                                 // actual reward
            }
            console.log(`It is ${finished} that you have finished.`);
        }
        const wonYet = setInterval(internalWinTest, 100);                       // initiate the interval
    }

    const clearListeners = function(){                                          // ending user's fun box color changing powers
        for (i=1; i <=b; i++){                                                  // loop over the 'random' number of boxes 
            const button = document.querySelector(`.button${i}`);               // grab it
            console.log(button);


            let switchButtonClass = function(event) {                       // what occurs when a button is clicked
                // const buttonClass = event.target.className;          // apparently I don't need this       
                button.classList.toggle('purple');                      // switches class: purple of button on/off
        }

            button.removeEventListener('click', switchButtonClass);             // silence them
            console.log(switchButtonClass);

            //ISSUE: CAN'T REMOVE LISTENERS BECAUSE FUNCTION IS RE-WRITTEN IN LOOP
        }
    }
    
    makeStartButton();                                                          // runs func to make button

}

game();                                                                         // RUN THE GAME!


// THE BELOW CODE WORKS EXCEPT REMOVING THE LISTENERS AT THE END

// const main = document.getElementById('main');
// const container = document.getElementById('container');


// let vpw = window.innerWidth;
// let vph = window.innerHeight;

// main.style.height = `${vph}px`;
// main.style.width = `${vpw}px`;
// container.style.height = `${vph}px`;
// container.style.width = `${vpw}px`;

// const game = function(){                                                    // All-encompassing game function 

//     const setTimer = function(){                                            // function to set 30s until failure
//         setTimeout(timeToFail, 30000);
//     }
//     let switchButtonClass;                                                  // scoping variable name out of inner functions
//     let gameOver = false;
//     let success = false;

//     const b = 5+(2*Math.floor(1+((Math.random())*7)));                      // 'random' # of boxes to make = 2d8 +5

//     const makeStartButton = function(){                                     // function: makes the start button                             
//         const startButton = document.createElement('button');               // typing shortcut
//         startButton.innerText = "Do you want to play a game?"               // adds text for user to see
//         startButton.style.width = '400px';                                  // making box larger than other buttons will be
//         startButton.style.backgroundColor = 'blue';                         // blue is nicer
//         startButton.style.opacity = '0.5';                                  // transparency is also a positive
//         startButton.style.top = '0px';
//         startButton.style.position = 'absolute';
//         startButton.style.left = '25%';
//         main.appendChild(startButton);                                      // puts the button on screen
    
//         const start = function(){                                           // what to do once start is pushed
//             startButton.style.display = 'none';                             // remove the start button
//             startButton.removeEventListener('click', start);                // remove the listener for the start button
//             makeBoxes();                                                    // make the boxes
//         }
//         startButton.addEventListener('click', start);
//     }

//     const makeBoxes = function(){
//         for (i=1; i<=b; i++){
//             const button = document.createElement('button');
//             button.className += `button${i}`;                               // adding classname: button#
//             let h = 0;                                                      // creating some variables
//             let w = 0;
//                 for (j=0; j<10; j++){                                       // simulate each roll 10 times
//                     w += 1+(Math.floor(11*Math.random()));                  // simulates a d12 roll
//                     h += 1+(Math.floor(11*Math.random()));                  // same as above but for height
//                 }
//             // console.log("Height of " + h + "  Width of " + w);           Was testing
//             button.style.height = `${h + 30}px`;                            // sets height to 10d12 +30
//             button.style.width = `${w + 30}px`;                             // same as above but for width
//             x = (80*(Math.random()))+10;                                    // making random numbers from 10-90
//             y = (80*(Math.random()))+10;
//             button.style.top = `${y}%`;                                     // setting x and y axes of button locations
//             button.style.left = `${x}%`;
//             button.style.position = 'absolute';                             // letting button locations break confines of parent
//             container.appendChild(button);                                  // inserting button into (ill-named) container

//             let switchButtonClass = function(event) {                       // what occurs when a button is clicked
//                     // const buttonClass = event.target.className;          // apparently I don't need this       
//                     button.classList.toggle('purple');                      // switches class: purple of button on/off
//             }
//             console.log(button);
//             button.addEventListener('click', switchButtonClass);            // creates a Listener for each Button
//             console.log(switchButtonClass);
//         }
//         // boxes are now made.  Start the timer and begin testing if we done done
//         setTimer();                                                         // start the fail clock
//         wonYet();                                                           // begins the success interval tests
//     }

//     const timeToFail = function(){                                              // the 'you failed?' function
//         if (success == false){    
//             alert(`You have failed in life.  Couldn't even click some boxes?`); // you did fail
//             // clearTimeout(timeToFail, 30000);                                 //clear it
//             gameOver = true;                                                    //gg?
//         }
//     }
    
//     const wonYet = function(){
//         let t = 0                                                               // setting initial time
//         const internalWinTest = function(){
//             t +=0.1;                                                            // incrementing time 100ms
//             let finished = true;                                                // setting intial state of finished
//             for (i=1; i<=b; i++){                                              // creating a loop for each button
//                 const button = document.querySelector(`.button${i}`);           // I was missing the . for about 10 minutes of debugging haha   
//                 if (!button.classList.contains('purple')){finished=false;}      // testing that each button is purple
//             }
//             if (gameOver === true) {                                            // if game is done...
//                 clearInterval(wonYet)                                           // stop the repeating function
//                 clearListeners();                                               // stop the boxes from listening
//             }
//             else if (finished===true){                                          // so I have several ways of indicating the game is done.  I should have named them better...
//                 gameOver = true;                        
//                 clearInterval(wonYet);                                          // clear it
//                 success = true;                                                 // you won
//                 clearListeners();                                               // stop the boxes from listening
//                 // clearTimeout(setTimer);                                      // clear it
// // note: I spent a lot of time on the above line and failed to get it to stop the setTimeout()
// // in the end, I just changed its function to only do something if success == false.
//                 alert(`much wow.  so impressed.  u clickeded da b's gud... `);          // paltry reward
//                 let fanfare = new Audio('final-fantasy-vii-victory-fanfare-1.mp3');     
//                 fanfare.play();                                                 // actual reward
//             }
//             console.log(`It is ${finished} that you have finished.`);
//         }
//         const wonYet = setInterval(internalWinTest, 100);                       // initiate the interval
//     }

//     const clearListeners = function(){                                          // ending user's fun box color changing powers
//         for (i=1; i <=b; i++){                                                  // loop over the 'random' number of boxes 
//             const button = document.querySelector(`.button${i}`);               // grab it
//             console.log(button);


//             let switchButtonClass = function(event) {                       // what occurs when a button is clicked
//                 // const buttonClass = event.target.className;          // apparently I don't need this       
//                 button.classList.toggle('purple');                      // switches class: purple of button on/off
//         }

//             button.removeEventListener('click', switchButtonClass);             // silence them
//             console.log(switchButtonClass);

//             //ISSUE: CAN'T REMOVE LISTENERS BECAUSE FUNCTION IS RE-WRITTEN IN LOOP
//         }
//     }
    
//     makeStartButton();                                                          // runs func to make button

// }

// game();                                                                         // RUN THE GAME!