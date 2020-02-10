// const secOne = document.querySelector('section1');
// const secTwo = document.querySelector('section2');
// const secThree = document.querySelector('section3');

const main = document.getElementById('main');
const secOne = document.getElementById('section1');
const secTwo = document.getElementById('section2');
const secThree = document.getElementById('section3');

const h4 = document.createElement('h4');
const button = document.createElement('button');
const p = document.createElement('p');
const s3button = document.createElement('button');
const s3field = document.createElement('input')
const s3p = document.createElement('p');



main.style.height = `100vh`;
main.style.backgroundImage = `url(bg.webp)`;
main.style.backgroundSize = 'cover';
secOne.style.height = `33vh`;
secTwo.style.height = `33vh`;
secThree.style.height = `34vh`;
secTwo.style.textAlign = `right`;
button.style.textAlign = 'center';
p.style.fontSize = '50px;'
p.style.fontWeight = '900'
// p.style.width = '20%';
// p.style.position = 'center';
secThree.style.textAlign = `right`;
button.style.backgroundColor = `yellow`;
button.style.opacity = `0.2`;
button.style.height = `100px`;
button.style.width = `100px`;
secOne.style.border = 'dashed';
secThree.style.display = 'inline-block';
s3field.style.height = '50px';
s3field.style.width = '100px';
s3p.style.width = '100px';
s3p.style.height = '50px';
s3p.style.marginRight = '0px';
s3button.style.width = '100px';
s3button.style.height = '50px';

// button.style.position = 'relative';
// p.style.position = 'absolute';
// p.style.top = '50%';
// p.style.left = '50%';

// let hours = Date().slice(15,24);
// let hours = getTime();
// secOne.innerText = `The current time is ${hours}`;

secOne.appendChild(h4);
secTwo.appendChild(button);
secTwo.appendChild(p);
secThree.appendChild(s3field);
secThree.appendChild(s3p);
secThree.appendChild(s3button);


function setTime() {
    let hours = Date().slice(15,24);
    secOne.innerText = `The current time is ${hours}`;
    console.log('Time has been updated.');
}
setInterval(setTime, 100);

// Below methods did not work for me.  I suspect I would have had to include something else for them to... function... harhar
// getHours() – Provides current hour between 0-23.
// getMinutes() – Provides current minutes between 0-59.
// getSeconds() – Provides current seconds between 0-59.

button.innerText = `Start me`;
let running = false;
let time = 0;
let hundredthsOfSecondsDisplay = 0;
let secondsDisplay = 0;

let timeup;
function watchOnOff(){
    timeup = setInterval(function(){
        time +=10;
        if (hundredthsOfSecondsDisplay<100){
            hundredthsOfSecondsDisplay +=1;
        }
        else {
            hundredthsOfSecondsDisplay = 0;
            secondsDisplay +=1;
        }
        if (secondsDisplay <10 && hundredthsOfSecondsDisplay <10){
            p.innerText = `0${secondsDisplay}:0${hundredthsOfSecondsDisplay}`;
        }
        else if (secondsDisplay <10 && hundredthsOfSecondsDisplay >=10){
            p.innerText = `0${secondsDisplay}:${hundredthsOfSecondsDisplay}`;
        }
        else if (secondsDisplay >=10 && hundredthsOfSecondsDisplay <10){
            p.innerText = `${secondsDisplay}:0${hundredthsOfSecondsDisplay}`;
        }
        else if (secondsDisplay >=10 && hundredthsOfSecondsDisplay >=10){
            p.innerText = `${secondsDisplay}:${hundredthsOfSecondsDisplay}`;
        }


    }, 10);
}
p.innerText = '00:00';

const stopwatch = function(){
    // stops a running stopwatch
        if (running === true){
            running = false;
            clearInterval(timeup);
            console.log("Stopping1");
            button.innerText = 'Continue?';
        }
    // pauses the stopwatch
        else if (running === false){
            running = true;
            watchOnOff();
            button.innerText = 'Stop';
            console.log("Starting1");
        }
}

s3button.innerText = `Let the final countdown begin`;
s3p.innerText = "0000";

let t;
const begincountdown = function(){
    t = s3field.value;
    s3p.innerText = s3field.value;
    timedown = setInterval(function(){
        if (t <=0){
            s3p.innerText = 'The time was here all along.';
            console.log("done");
            let thesoundofsuccess = new Audio('Windows-95-startup-sound.wav');
            thesoundofsuccess.play();
            clearInterval(timedown);
        }
        else if (isNaN(t)){
            s3p.innerText = 'You did done wrong A-A-RON!';
        }

        else {s3p.innerText -= 1;
            console.log('ho');
            t-=1;
            // I added this below because the interval runs every second, so the above loop was
            // always occuring a second too late for my taste.
            // the problem still exists if you enter 0 or a negative number.
            // I also didn't force the input to be a number.
            // So you can put non numbers, then the timer becomes Nan and doesn't count down....
            // Actually this isn't too hard to fix.
            // Fixed it by testing for NaN
            if(t <=0){
                s3p.innerText = 'The time has come!';
                let thesoundofsuccess = new Audio('Windows-95-startup-sound.wav');
                thesoundofsuccess.play();
                clearInterval(timedown);
            }
        }
    }, 1000);
}

s3button.addEventListener('click', begincountdown);

button.addEventListener('click', stopwatch);