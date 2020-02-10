const main = document.getElementById('main');
const d1 = document.getElementById('d1');
const d2 = document.getElementById('d2');

const startButton = document.createElement('button');
const instructionsButton = document.createElement('button');
const instructions = document.createElement('button');
const instructionsexist = document.createElement('button');
const instructionsxbutton = document.createElement('button');
const kirby = document.createElement('img');
const sonic = document.createElement('img');
const signal = document.createElement('img');
const centerCoin = document.createElement('img');

const p1Coin1 = document.createElement('img');
const p1Coin2 = document.createElement('img');
const p1Coin3 = document.createElement('img');
const p2Coin1 = document.createElement('img');
const p2Coin2 = document.createElement('img');
const p2Coin3 = document.createElement('img');


// backgroundmusic.play();
// leaving above line here as it is interesting to note that many browsers do not allow music to play until the user has
// interacted with the site.  So, starting the music right away, does not work
// going to make music start once instructions or start game is pressed

let p1points = 0;
let p2points = 0;
let firstBootUp = true;
let isMusicOn = false;

let backgroundmusic = new Audio('./sounds/bg.mp3');
let whatwasthatnoise = new Audio('./sounds/signal.mp3');
let win = new Audio('./sounds/win.mp3'); 
let lose = new Audio('./sounds/lose.mp3'); 
let prize = new Audio('./sounds/prize.mp3'); 


const highlightOn = function(){                                                 // wanted to make what you could select clear
    this.style.borderColor = 'gold';
    this.style.color = 'gold';
    // console.log('on');                                                       // was here for debugging
}

const highlightOff = function(){
    this.style.borderColor = 'rgb(132, 146, 165)';
    this.style.color = 'white';
    // console.log('off');
}

const menu = function(){
    

    main.style.backgroundImage = 'url(imgs/bg.gif)';
    startButton.style.bottom = '10%';
    instructionsButton.style.top = '10%';
    startButton.style.left = '44%';
    instructionsButton.style.left = '44%';
    startButton.innerText = 'Start game';
    instructionsButton.innerText = 'Instructions';
    startButton.style.display = 'inline-block;';
    instructionsButton.style.display = 'inline-block;';
    d1.appendChild(startButton);
    d2.appendChild(instructionsButton);
    startButton.addEventListener('mouseover', highlightOn);
    startButton.addEventListener('mouseout', highlightOff);
    instructionsButton.addEventListener('mouseover', highlightOn);
    instructionsButton.addEventListener('mouseout', highlightOff);
    startButton.addEventListener('click', clickedStart); 
    instructionsButton.addEventListener('click', goToInstructions);
}

const returnToMenuFromI = function(){
    instructionsxbutton.removeEventListener('mouseover', highlightOn);
    instructionsxbutton.removeEventListener('mouseout', highlightOff);
    instructionsxbutton.removeEventListener('click', returnToMenuFromI);
    instructions.style.display = 'none';
    instructionsxbutton.style.display = 'none';
    location.reload();                                      //issue : cheap trick, cuts music, should go back if I have time.
}

const clickedStart = function(){
    startButton.style.display = 'none';
    instructionsButton.style.display = 'none';
    gameOn();
}

const goToInstructions = function(){
    startButton.removeEventListener('mouseover', highlightOn);
    startButton.removeEventListener('mouseout', highlightOff);
    instructionsButton.removeEventListener('mouseover', highlightOn);
    instructionsButton.removeEventListener('mouseout', highlightOff);
    startButton.removeEventListener('click', clickedStart);
    instructionsButton.removeEventListener('click', goToInstructions);

    if (isMusicOn===false){                                                             //work around for turning on music after ineraction                 
        backgroundmusic.play();
        isMusicOn = true;
    }

    startButton.style.display = 'none';
    instructionsButton.style.display = 'none';
    instructions.innerText = "Two players wait for a signal to start after a random delay. Once the start signal, first person to press their key wins. If a player presses before the signal appears, they lose. Player one presses the q key and player 2 presses the p key.";
    instructions.style.top = '50%';
    instructions.style.right = '20%';
    instructions.style.padding = '50px 15px';
    instructions.style.cursor = 'arrow';
    instructions.style.outline = '0';
    instructions.style.position = 'flex';
    instructions.style.width = '60%';
    instructions.style.height = 'auto';

    instructionsxbutton.style.width = '30px';
    instructionsxbutton.style.minWidth = '30px';
    instructionsxbutton.style.height = '25px';
    instructionsxbutton.style.minHeight = '25px';
    instructionsxbutton.innerText = 'X';
    instructionsxbutton.style.position = 'relative';
    instructionsxbutton.style.top = '50%';
    instructionsxbutton.style.right = '-28.75%';
    instructionsxbutton.style.border = 'none';
    instructionsxbutton.style.padding = '0';
    instructionsxbutton.style.color = 'grey';
    instructionsxbutton.style.backgroundColor = 'silver';
    instructionsxbutton.style.border = '1px solid rgb(132, 146, 165)';
    d1.appendChild(instructions);
    d1.appendChild(instructionsxbutton);
    instructionsxbutton.addEventListener('mouseover', highlightOn);
    instructionsxbutton.addEventListener('mouseout', highlightOff);
    instructionsxbutton.addEventListener('click', returnToMenuFromI);
    main.addEventListener('keypress', escape);
    function escape(e) {
        console.log(e.keyCode);
        if(e.key === "q"){returnToMenuFromI();}
        else if(e.key == "Esc"){returnToMenuFromI();}
        else if(e.key == "Escape"){returnToMenuFromI();}
        else if(e.which == "27"){returnToMenuFromI();}
    }
}

const gameOn = function(){
    if (firstBootUp === true) {
        startButton.removeEventListener('mouseover', highlightOn);
        startButton.removeEventListener('mouseout', highlightOff);
        instructionsButton.removeEventListener('mouseover', highlightOn);
        instructionsButton.removeEventListener('mouseout', highlightOff);
        startButton.removeEventListener('click', gameOn);
        instructionsButton.removeEventListener('click', goToInstructions);

        signal.src = './imgs/signal.png';                                           // create signal img
        signal.style.height = '25%';
        signal.style.position = 'absolute';
        signal.style.right = `${5+90*Math.random()}%`;
        signal.style.top = `${5+90*Math.random()}%`;
        signal.style.transform = 'rotate(-130deg)';
        signal.style.display = 'none';                                              // this is the signal whose display must be flickered
        d1.appendChild(signal);

        kirby.style.height = '30%';                                                 // create sonic and kirby imgs
        kirby.style.position = 'absolute';
        kirby.style.bottom = '10%';
        kirby.style.left = '5%';
        sonic.style.height = '45%';
        sonic.style.position = 'absolute';
        sonic.style.bottom = '10%';
        sonic.style.right = '5%';
        kirby.src = './imgs/p1.gif';
        sonic.src = './imgs/p2.gif';
    
        d2.appendChild(kirby);
        d2.appendChild(sonic);

        centerCoin.src = './imgs/prize.gif';                                        // create coin imgs
        centerCoin.style.height = '25%';
        centerCoin.style.position = 'absolute';
        centerCoin.style.bottom = '10%';
        centerCoin.style.left = '47%';
        centerCoin.style.display = 'none';
        d2.appendChild(centerCoin);

        p1Coin1.src = './imgs/prize.gif';                                           // I should probably make a loop for this, but they're all in different places...           
        p1Coin1.style.height = '12%';                                               // so I would need increments and more internal loops
        p1Coin1.style.position = 'absolute';                                        // this actually feels like less work
        p1Coin1.style.top = '10%';                                                  // its less prone to error
        p1Coin1.style.left = '3%';                                                  // and isn't any less processing
        d1.appendChild(p1Coin1);                                                    // I mean if there were 100 coins, then okay lol
        p1Coin1.style.display = 'none';

        p1Coin2.src = './imgs/prize.gif';
        p1Coin2.style.height = '12%';
        p1Coin2.style.position = 'absolute';
        p1Coin2.style.top = '10%';
        p1Coin2.style.left = '9%';
        d1.appendChild(p1Coin2);
        p1Coin2.style.display = 'none';

        p1Coin3.src = './imgs/prize.gif';
        p1Coin3.style.height = '12%';
        p1Coin3.style.position = 'absolute';
        p1Coin3.style.top = '10%';
        p1Coin3.style.left = '15%';
        d1.appendChild(p1Coin3);
        p1Coin3.style.display = 'none';

        p2Coin1.src = './imgs/prize.gif';
        p2Coin1.style.height = '12%';
        p2Coin1.style.position = 'absolute';
        p2Coin1.style.top = '10%';
        p2Coin1.style.right = '3%';
        d1.appendChild(p2Coin1);
        p2Coin1.style.display = 'none';

        p2Coin2.src = './imgs/prize.gif';
        p2Coin2.style.height = '12%';
        p2Coin2.style.position = 'absolute';
        p2Coin2.style.top = '10%';
        p2Coin2.style.right = '9%';
        d1.appendChild(p2Coin2);
        p2Coin2.style.display = 'none';

        p2Coin3.src = './imgs/prize.gif';
        p2Coin3.style.height = '12%';
        p2Coin3.style.position = 'absolute';
        p2Coin3.style.top = '10%';
        p2Coin3.style.right = '15%';
        d1.appendChild(p2Coin3);
        p2Coin3.style.display = 'none';

        let rot = 0;
        // let drop = 0;
        const signalspin = function(){
            // signal.style.transform = `translateY(${drop})`;
            // signal.style.top = '${drop}px';                                      // was trying to make the signal fall for fun, but I won't bother
            signal.style.transform = `rotate(${rot}deg)`;                           // I could set the signal's rotation to be fixed and random, but spinning seems better
            rot += 3;
            // drop -= 5;
        }
        setInterval(signalspin, 10);
        firstBootUp = false;
    }

    if (isMusicOn===false){                                                     // work around for turning on music after ineraction                  
        backgroundmusic.play();
        isMusicOn = true;
    }

    let timerdone = false;
    let timeToAttack = 2+10000*Math.random();

    centerCoin.style.display = 'none';

    const timerdoneset = function(){
        timerdone = true;
        isMusicOn = false;
        backgroundmusic.pause();
        centerCoin.style.display = 'block'; 
        whatwasthatnoise.play();
        signal.style.display = 'block';
    }
    const timeUntilSignal = setTimeout(timerdoneset, timeToAttack);

    const updateCoinDisplay = function(){                                   // decided to make a function to set the coin displays of each coin
        if (p1points === 0)                                                 // based on the number of coins each player has collected
        {   p1Coin1.style.display = 'none';                                 // I included the case zero because I will use it when we hit reset
            p1Coin2.style.display = 'none';
            p1Coin3.style.display = 'none';
        }
        if (p1points === 1){p1Coin1.style.display = 'block';}
        else if (p1points === 2){p1Coin2.style.display = 'block';}
        else if (p1points === 3){
            p1Coin3.style.display = 'block';
            win.play();
        }

        if (p2points === 0)
        {   p2Coin1.style.display = 'none';
            p2Coin2.style.display = 'none';
            p2Coin3.style.display = 'none';
        }
        if (p2points === 1){p2Coin1.style.display = 'block';}
        else if (p2points === 2){p2Coin2.style.display = 'block';}
        else if (p2points === 3){
            p2Coin3.style.display = 'block';
            win.play();
        }
    }

    const resetSignalSpinner = function(){
        signal.style.display = 'none';
        signal.style.right = `${5+90*Math.random()}%`;
        signal.style.top = `${5+90*Math.random()}%`;
    }

    const coinWasGot = function(){
        if ( (p2points >= 3) || (p1points >= 3) ){                                          // B: does a player have enough points?   
    
            // Funny note here, I put >= because of a funny incident I had once while playing starfox 64 where I jumped from 4 to 6 kills at the same moment after killing two opponents with the same bomb.
            // The deathmatch ends when a player hits 5 kills, but because I went from 4 to 6 and they were testing for == 5 instead of >= 5, I didn't win.
            // I ended up getting to 8 or 9 kills, before one of my friends hit 5 and claimed he won to tease me haha
            // my kill count went off the screen.  It was quite interesting at the time.
            centerCoin.style.display = 'none';
            if (p1points >= 3){
                kirby.src = './imgs/p1win.gif';
                kirby.src =  './imgs/p1win.gif';
                kirby.style.height = '55%';
                kirby.style.left = '-2%';}
            else if (p2points >= 3){
                sonic.src = './imgs/p2win.gif';
                sonic.style.height = '66%';                                     
                sonic.style.right = '0%';                                   
                sonic.style.bottom = '5%'; }
            gameEnd();                                                      // begin endgame() function
        }
        else {
            gameOn();                                                       // start up game() again for another round.
        }
    }

    const restart = function(){
        instructionsButton.removeEventListener('click', restart);
        startButton.style.display = 'none';
        instructionsButton.style.display = 'none';
        kirby.style.height = '30%';                                                 
        kirby.style.position = 'absolute';
        kirby.style.bottom = '10%';
        kirby.style.left = '5%';
        sonic.style.height = '45%';
        sonic.style.position = 'absolute';
        sonic.style.bottom = '10%';
        sonic.style.right = '5%';
        kirby.src = './imgs/p1.gif';
        sonic.src = './imgs/p2.gif';
        p1points = 0;
        p2points = 0;
        updateCoinDisplay();

        gameOn();
    }

    const gameEnd = function(){
        if (p1points >= 3) {startButton.innerText = 'Kirby wins!';}
        else if (p2points >= 3) {startButton.innerText = 'Sonic wins!';}
        startButton.style.backgroundColor = 'rgba(0,0,0,0)';
        startButton.style.border = 'none';
        startButton.style.color = 'white';
        startButton.style.fontSize = '4rem';
        startButton.style.left = '38%';
        startButton.style.width = 'auto';
        startButton.style.display = 'block';
        instructionsButton.style.borderColor = 'rgb(132, 146, 165)';
        instructionsButton.style.color = 'white';
        instructionsButton.innerText = 'Restart game';
        instructionsButton.style.display = 'block';
        instructionsButton.addEventListener('click', restart);
        instructionsButton.addEventListener('mouseover', highlightOn);
        instructionsButton.addEventListener('mouseout', highlightOff);
    }

    function p1activate(e) {                                                    // function to detect p1 entry
        if((e.key === "q") || (e.which == "113") ){                             // testing if it was p1 thst attacked
            main.removeEventListener('keypress', p1activate);                   // silence the listeners
            main.removeEventListener('keypress', p2activate);
            console.log('p1 attacks!')                                          // testing to make sure it works
            resetSignalSpinner();                                               // make signal vanish and set new location
            if(timerdone === false){                                            // A: test if too early
                console.log('But it was too early...');
                p2points ++;                                                    // give point to oppo
                updateCoinDisplay()
                clearTimeout(timeUntilSignal);                                  // end the signal timer
                lose.play();                                                    // play fail mp3                                                            
                console.log(`Sonic has ${p2points} coin(s).`);                  // logging for myself                    
                sonic.src =  './imgs/p2win.gif';                                // change to winning gif        
                sonic.style.height = '66%';                                     
                sonic.style.right = '0%';                                       // adjusting size and location of gif as winning and base gifs have different dimensions
                sonic.style.bottom = '5%';                                      
                setTimeout(function(){                                      
                    sonic.src =  './imgs/p2.gif';                               //resetting sonic;s base characteristics        
                    sonic.style.height = '45%';                                     
                    sonic.style.right = '5%';                                       
                    sonic.style.bottom = '10%';                                     
                    coinWasGot();                                               // trigger function to see if the game is done
                },1200);                                                        // this is roughly how long the animation takes
            }
            else{                                                               // A: if not too early
                console.log('success');
                p1points ++;                                                    // p1 gets point
                console.log(`Kirby has ${p1points} coin(s).`);
                kirby.src = './imgs/p1run.gif';
                let kirbyrunsright = setInterval(function(){
                    let x = parseInt(kirby.style.left);
                    x+=1;
                    kirby.style.left = `${x}%`;
                    if (kirby.style.left == '50%') {
                        prize.play();
                        updateCoinDisplay();
                        kirby.style.left = '5%'
                        kirby.src = './imgs/p1.gif';
                        clearInterval(kirbyrunsright);
                        coinWasGot();
                    };
                },15);
            }   
        }
    }

    function p2activate(e) {                                                    // Same as above but with p1 and p2 inversed
        console.log('p2 attacks!')
        resetSignalSpinner();
        if((e.key === "p") || (e.which == "112") ){
            main.removeEventListener('keypress', p1activate);                       
            main.removeEventListener('keypress', p2activate);
            if(timerdone === false){
                console.log('But it was too early...');
                p1points ++;
                updateCoinDisplay();
                clearTimeout(timeUntilSignal);
                lose.play();
                console.log(`Kirby has ${p1points} coin(s).`);
                kirby.src =  './imgs/p1win.gif';
                kirby.style.height = '55%';
                kirby.style.left = '-2%';
                setTimeout(function(){
                    kirby.src =  './imgs/p1.gif';
                    kirby.style.height = '30%';
                    kirby.style.left = '5%';
                    coinWasGot();
                },1000);
            }
            else{
                console.log('success');
                p2points ++;
                console.log(`Sonic has ${p2points} coin(s).`);
                sonic.src = './imgs/p2run.gif';
                let sonicrunsleft = setInterval(function(){
                    let x = parseInt(sonic.style.right);
                    x+=1;
                    sonic.style.right = `${x}%`;
                    if (sonic.style.right == '45%') {
                        prize.play();
                        updateCoinDisplay();
                        sonic.style.right = '5%'
                        sonic.src = './imgs/p2.gif';
                        clearInterval(sonicrunsleft);
                        coinWasGot();
                    };
                },12);
            }
        }
    }
    main.addEventListener('keypress', p1activate);                              // activate the listeners for p1's q and p2's p
    main.addEventListener('keypress', p2activate);
    console.log('listening...');
}















menu();



// transform: translateX(calc(50vw - 50% - 100px));
// transition: transform 1s ease-in-out;