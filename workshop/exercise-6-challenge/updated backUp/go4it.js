const main = document.getElementById('main');
const h1 = document.querySelector('h1');
const zerohumans = document.getElementById('zero');
const onehuman = document.getElementById('one');
const twohumans = document.getElementById('two');
const button = document.querySelector('button');
const col1 = document.querySelectorAll('.col1');
const col2 = document.querySelectorAll('.col2');
const col3 = document.querySelectorAll('.col3');
const col4 = document.querySelectorAll('.col4');
const col5 = document.querySelectorAll('.col5');
const col6 = document.querySelectorAll('.col6');
const col7 = document.querySelectorAll('.col7');
const cols = [col1, col2, col3, col4, col5, col6, col7];                // making this afterward for forEach
const arrow1 = document.querySelector('.arrow1');
const arrow2 = document.querySelector('.arrow2');
const arrow3 = document.querySelector('.arrow3');
const arrow4 = document.querySelector('.arrow4');
const arrow5 = document.querySelector('.arrow5');
const arrow6 = document.querySelector('.arrow6');
const arrow7 = document.querySelector('.arrow7');
const arrows = [arrow1, arrow2, arrow3, arrow4, arrow5, arrow6, arrow7];  // making this post game is working for forEach
const muter = document.getElementById('music');
const muteImage = document.getElementById('mute');
let backgroundmusic = new Audio('audio/commercial.mp3');


let grid = {
    column1: [1, 1, 1, 1, 1, 1],
    column2: [1, 1, 1, 1, 1, 1],
    column3: [1, 1, 1, 1, 1, 1],
    column4: [1, 1, 1, 1, 1, 1],
    column5: [1, 1, 1, 1, 1, 1],
    column6: [1, 1, 1, 1, 1, 1],
    column7: [1, 1, 1, 1, 1, 1]
}
let players = {playerOne: {species: 'unknown', color: 'unknown'}, playerTwo: {species: 'unknown', color: 'unknown'}};
let activePlayer = 'playerOne';
let gameOver = false;
let music = true;
let mute = false;
let test = 0;
let placeHolder;
let turnOne = true;

const toggleMute = function(){
    if (music === true && mute === false) {
        backgroundmusic.pause();
        music = false;
        mute = true;
        console.log('musicoff, muted');
        muteImage.src = 'imgs/mute.png';
    }
    else if (music === false && mute === false) {
        mute = true;
        console.log('muted');
        muteImage.src = 'imgs/mute.png';
    }
    else if (mute === true) {
        backgroundmusic.play();
        mute = false;
        music = true;
        console.log('musicon');
        muteImage.src = 'imgs/volume.png';
    }
}

muter.addEventListener('click', toggleMute);

const chipselection = function(){
    // console.log(event.target);                                   // <img class="arrow#.... details
    // console.log(event.target.className);                         // arrow#
    // console.log(event.target.className.charAt(5));               // #
    // console.log(players[activePlayer].color);                    // figuring out stuff
    // console.log(col1[0].outerHTML.slice(22,35));                 // figuring out stuff
    // players[activePlayer].color= [placeHolder].src;
    placeHolder = `col${event.target.className.charAt(5)}`;
    if (event.target.className.charAt(5) == 1) {
        // console.log(col1[0].outerHTML.slice(22,35));
        players[activePlayer].color= col1[0].outerHTML.slice(23,35);
        arrow1.removeEventListener('click', chipselection);
        arrow1.removeEventListener('mouseover', option);
    } 
    else if (event.target.className.charAt(5) == 2) {
        // console.log(col2[0].outerHTML.slice(22,38));
        players[activePlayer].color= col2[0].outerHTML.slice(23,38);
        arrow2.removeEventListener('click', chipselection);
        arrow2.removeEventListener('mouseover', option);
    }
    else if (event.target.className.charAt(5) == 3) {
        // console.log(col3[0].outerHTML.slice(22,38));
        players[activePlayer].color= col3[0].outerHTML.slice(23,38);  // I just realized I don't need to do it this way... I know the column number
        arrow3.removeEventListener('click', chipselection);
        arrow3.removeEventListener('mouseover', option);
    }
    else if (event.target.className.charAt(5) == 4) {
        players[activePlayer].color= 'imgs/green.jpg';
        arrow4.removeEventListener('click', chipselection);
        arrow4.removeEventListener('mouseover', option);
    }
    else if (event.target.className.charAt(5) == 5) {
        players[activePlayer].color= 'imgs/purple.jpg';
        arrow5.removeEventListener('click', chipselection);
        arrow5.removeEventListener('mouseover', option);
    }
    else if (event.target.className.charAt(5) == 6) {
        players[activePlayer].color= 'imgs/black.jpg';
        arrow6.removeEventListener('click', chipselection);
        arrow6.removeEventListener('mouseover', option);
    }
    else if (event.target.className.charAt(5) == 7) {
        players[activePlayer].color= 'imgs/rainbow.jpg';
        arrow7.removeEventListener('click', chipselection);
        arrow7.removeEventListener('mouseover', option);
    }
    if (activePlayer === 'playerTwo') {activePlayer = 'playerOne';}
    else if (activePlayer === 'playerOne') {activePlayer = 'playerTwo';}

    // The above ~30 lines I originally did in the ~90 below.  Decided to be more efficient

    // placeHolder = `arrow${event.target.className.charAt(5)}`;
    // console.log(placeHolder);
    // [placeHolder].removeEventListener('click', chipselection);
    // [placeHolder].removeEventListener('mouseover', option);
       //need to get variable color

    // if ( (event.target.className.charAt(5)) == 1) {
    //     arrow1.removeEventListener('click', chipselection);
    //     arrow1.removeEventListener('mouseover', option);
    //     if (activePlayer == 'playerOne') {
    //         players.playerOne.color = 'imgs/red.jpg';
    //         activePlayer = 'playerTwo';
    //     }
    //     else if (activePlayer == 'playerTwo') {
    //         players.playerTwo.color = 'imgs/red.jpg';
    //     }
    // }
    // else if ( (event.target.className.charAt(5)) == 2) {
    //     arrow2.removeEventListener('click', chipselection);
    //     arrow2.removeEventListener('mouseover', option);
    //     if (activePlayer == 'playerOne') {
    //         players.playerOne.color = 'imgs/orange.jpg';
    //         activePlayer = 'playerTwo';
    //     }
    //     else if (activePlayer == 'playerTwo') {
    //         players.playerTwo.color = 'imgs/orange.jpg';
    //     }
    // }
    // else if ( (event.target.className.charAt(5)) == 3) {
    //     arrow3.removeEventListener('click', chipselection);
    //     arrow3.removeEventListener('mouseover', option);
    //     if (activePlayer == 'playerOne') {
    //         players.playerOne.color = 'imgs/yellow.jpg';
    //         activePlayer = 'playerTwo';
    //     }
    //     else if (activePlayer == 'playerTwo') {
    //         players.playerTwo.color = 'imgs/yellow.jpg';
    //     }
    // }
    // else if ( (event.target.className.charAt(5)) == 4) {
    //     arrow4.removeEventListener('click', chipselection);
    //     arrow4.removeEventListener('mouseover', option);
    //     if (activePlayer == 'playerOne') {
    //         players.playerOne.color = 'imgs/green.jpg';
    //         activePlayer = 'playerTwo';
    //     }
    //     else if (activePlayer == 'playerTwo') {
    //         players.playerTwo.color = 'imgs/green.jpg';
    //     }
    // }
    // else if ( (event.target.className.charAt(5)) == 5) {
    //     arrow5.removeEventListener('click', chipselection);
    //     arrow5.removeEventListener('mouseover', option);
    //     if (activePlayer == 'playerOne') {
    //         players.playerOne.color = 'imgs/purple.jpg';
    //         activePlayer = 'playerTwo';
    //     }
    //     else if (activePlayer == 'playerTwo') {
    //         players.playerTwo.color = 'imgs/purple.jpg';
    //     }
    // }
    // else if ( (event.target.className.charAt(5)) == 6) {
    //     arrow6.removeEventListener('click', chipselection);
    //     arrow6.removeEventListener('mouseover', option);
    //     if (activePlayer == 'playerOne') {
    //         players.playerOne.color = 'imgs/black.jpg';
    //         activePlayer = 'playerTwo';
    //     }
    //     else if (activePlayer == 'playerTwo') {
    //         players.playerTwo.color = 'imgs/black.jpg';
    //     }
    // }
    // else if ( (event.target.className.charAt(5)) == 7) {
    //     arrow7.removeEventListener('click', chipselection);
    //     arrow7.removeEventListener('mouseover', option);
    //     if (activePlayer == 'playerOne') {
    //         players.playerOne.color = 'imgs/rainbow.jpg';
    //         activePlayer = 'playerTwo';
    //     }
    //     else if (activePlayer == 'playerTwo') {
    //         players.playerTwo.color = 'imgs/rainbow.jpg';
    //     }
    // }

    console.log(players);            
    if (activePlayer == 'playerOne' && players.playerTwo.color != 'unknown') {
        console.log('silence the listeners');
        arrows.forEach(element => {element.removeEventListener('click', chipselection);});
        // arrow1.removeEventListener('click', chipselection);
        // arrow2.removeEventListener('click', chipselection);
        // arrow3.removeEventListener('click', chipselection);
        // arrow4.removeEventListener('click', chipselection);
        // arrow5.removeEventListener('click', chipselection);
        // arrow6.removeEventListener('click', chipselection);
        // arrow7.removeEventListener('click', chipselection);
        beginGameFunctions();
    }
    else {
        console.log(`time for player two to select a color`);
        chooseChipColors();
    }
}

const chooseChipColors = function() {
    if (activePlayer === 'playerOne') {
        h1.innerText = `Choose player one's chip color`;
        col1.forEach(element => element.src = 'imgs/red.jpg');
        col2.forEach(element => element.src = 'imgs/orange.jpg');
        col3.forEach(element => element.src = 'imgs/yellow.jpg');
        col4.forEach(element => element.src = 'imgs/green.jpg');
        col5.forEach(element => element.src = 'imgs/purple.jpg');
        col6.forEach(element => element.src = 'imgs/black.jpg');
        col7.forEach(element => element.src = 'imgs/rainbow.jpg');

        arrows.forEach(element => {element.addEventListener('click', chipselection);});
        // arrow1.addEventListener('click', chipselection);
        // arrow2.addEventListener('click', chipselection);
        // arrow3.addEventListener('click', chipselection);
        // arrow4.addEventListener('click', chipselection);
        // arrow5.addEventListener('click', chipselection);
        // arrow6.addEventListener('click', chipselection);
        // arrow7.addEventListener('click', chipselection);
    }
    else h1.innerText = `Choose player two's chip color`;
}




const chooseNumberOfPlayers = function(){
    const humanschosen = function(){
        zerohumans.style.display = 'none';
        onehuman.style.display = 'none';
        twohumans.style.display = 'none';
        if(event.target.id==='zero'){
            players.playerOne.species = 'ai';
            players.playerTwo.species = 'ai';
            if (mute === false) {backgroundmusic.play(); music = true;}
        }
        else if(event.target.id==='one'){
            players.playerOne.species = 'human';
            players.playerTwo.species = 'ai';
            if (mute === false) {backgroundmusic.play(); music = true;}
        }
        else if(event.target.id==='two'){
            players.playerOne.species = 'human';
            players.playerTwo.species = 'human';
            if (mute === false) {backgroundmusic.play(); music = true;}
        }
        else {console.log('problem?');}
        zerohumans.removeEventListener('click', humanschosen);
        onehuman.removeEventListener('click', humanschosen);
        twohumans.removeEventListener('click', humanschosen);
        turnOnArrowHighlights();
        chooseChipColors();
    }

    zerohumans.addEventListener('click', humanschosen);
    onehuman.addEventListener('click', humanschosen);
    twohumans.addEventListener('click', humanschosen);
}
const option = function() {
    this.style.height = '100%';
    this.style.filter = 'hue-rotate(270deg)';
    this.style.cursor = 'pointer';
}
const unoption = function(){
    this.style.height = '75%'
    this.style.filter = 'hue-rotate(0deg)';
    this.style.cursor = 'arrow';
}
const turnOnArrowHighlights = function() {
    arrows.forEach(element => {element.addEventListener('mouseover', option);});
    // arrow1.addEventListener('mouseover', option);
    // arrow2.addEventListener('mouseover', option);
    // arrow3.addEventListener('mouseover', option);
    // arrow4.addEventListener('mouseover', option);
    // arrow5.addEventListener('mouseover', option);
    // arrow6.addEventListener('mouseover', option);
    // arrow7.addEventListener('mouseover', option);
    arrows.forEach(element => {element.addEventListener('mouseout', unoption);});
    // arrow1.addEventListener('mouseout', unoption);
    // arrow2.addEventListener('mouseout', unoption);
    // arrow3.addEventListener('mouseout', unoption);
    // arrow4.addEventListener('mouseout', unoption);
    // arrow5.addEventListener('mouseout', unoption);
    // arrow6.addEventListener('mouseout', unoption);
    // arrow7.addEventListener('mouseout', unoption);
    console.log('All blinkers are a go');
}

const setArrowOpacities = function () {
    arrows.forEach(element => {element.style.opacity = '1';});
    // arrow1.style.opacity = '1';
    // arrow2.style.opacity = '1';
    // arrow3.style.opacity = '1';
    // arrow4.style.opacity = '1';
    // arrow5.style.opacity = '1';
    // arrow6.style.opacity = '1';
    // arrow7.style.opacity = '1';
}

const beginGameFunctions = function(){
    
    const matchStart = function() {
        turnOnArrowHighlights();                    // DONE: re-activates all the arrows' highlighting
        turnOnArrowDrops();                         // DONE: activate drop down capacities
        setArrowOpacities();                        // DONE: need to set opacities for testWin()
        allWhite();                                 // DONE: resets all assigned img values to white
        resetValues();                              // DONE: in the event of a new game, this will reset used variable values
        updatePlayerTurn();                         // DONE: updates h1's text to inform user(s) whose turn it is
        // matchTurn();                                // WORK IN PROGRESS:   begins function that performs a turn
    }


    const allWhite = function(){
        cols.forEach(element => {element.forEach(element => element.src = 'imgs/white.jpg');});

        // col1.forEach(element => element.src = 'imgs/white.jpg');
        // col2.forEach(element => element.src = 'imgs/white.jpg');
        // col3.forEach(element => element.src = 'imgs/white.jpg');
        // col4.forEach(element => element.src = 'imgs/white.jpg');
        // col5.forEach(element => element.src = 'imgs/white.jpg');
        // col6.forEach(element => element.src = 'imgs/white.jpg');
        // col7.forEach(element => element.src = 'imgs/white.jpg');
    }

    const resetValues = function(){
        if (gameOver) {
            console.log('Resetting the game...');
            zerohumans.innerText = 'zero';
            onehuman.innerText = 'one';
            twohumans.innerText = 'two';
            onehuman.style.display = 'inline-block';
            twohumans.style.display = 'inline-block';
            h1.innerText = 'How many human players?';
            zerohumans.style.display = 'block';
            zerohumans.removeEventListener('click', resetValues);
            grid = {
                column1: [1, 1, 1, 1, 1, 1],
                column2: [1, 1, 1, 1, 1, 1],
                column3: [1, 1, 1, 1, 1, 1],
                column4: [1, 1, 1, 1, 1, 1],
                column5: [1, 1, 1, 1, 1, 1],
                column6: [1, 1, 1, 1, 1, 1],
                column7: [1, 1, 1, 1, 1, 1]
            }
            players = {playerOne: {species: 'unknown', color: 'unknown'}, playerTwo: {species: 'unknown', color: 'unknown'}};
            activePlayer = 'playerOne';
            gameOver = false;
            turnOne = true;
            setArrowOpacities();
            updateGraphics();
            chooseNumberOfPlayers();
        }
    }

    const matchTurn = function() {
        updatePlayerTurn();                         // DONE: changes text to represent player's turn
        columnInput();                              // DONE: determines which columns have space for chips
        updateGraphics();                           //       places correct colored chip at bottom of column and updates its img src
        testWin();                                  //       verifies if 4 sequential chips are of same color  if not
    }



    const addchip = function() {                                // function called when arrows are successfully clicked
                // event.target.className.charAt(5)   is the number of the arrow
            let placeHolder = `column${event.target.className.charAt(5)}`;
            if (grid[placeHolder][5] === 1) {grid[placeHolder][5] = players[activePlayer].color}
            else if (grid[placeHolder][4] === 1) {grid[placeHolder][4] = players[activePlayer].color}
            else if (grid[placeHolder][3] === 1) {grid[placeHolder][3] = players[activePlayer].color}
            else if (grid[placeHolder][2] === 1) {grid[placeHolder][2] = players[activePlayer].color}
            else if (grid[placeHolder][1] === 1) {grid[placeHolder][1] = players[activePlayer].color}
            else if (grid[placeHolder][0] === 1) {grid[placeHolder][0] = players[activePlayer].color}
        matchTurn();
    }

    const aiAddChip = function(x) {
        if (grid[x][5] === 1) {grid[x][5] = players[activePlayer].color}
        else if (grid[x][4] === 1) {grid[x][4] = players[activePlayer].color}
        else if (grid[x][3] === 1) {grid[x][3] = players[activePlayer].color}
        else if (grid[x][2] === 1) {grid[x][2] = players[activePlayer].color}
        else if (grid[x][1] === 1) {grid[x][1] = players[activePlayer].color}
        else if (grid[x][0] === 1) {grid[x][0] = players[activePlayer].color}
        matchTurn();
    }

    const aiMove = function () {
        let aiPseudoRando = Math.floor((1+(5*Math.random()))+(1+(5*Math.random())));
        if (aiPseudoRando === 3) {
            if(grid.column1[0] === 1){
                let temp = 'column1';
                aiAddChip(temp);
            }
            else aiMove();
        }
        else if (aiPseudoRando === 8) {
            if(grid.column2[0] === 1){
                let temp = 'column2';
                aiAddChip(temp);
            }
            else aiMove();
        }
        else if (aiPseudoRando === 2 || aiPseudoRando === 7) {
            if(grid.column3[0] === 1){
                let temp = 'column3';
                aiAddChip(temp);
            }
            else aiMove();
        }
        else if (aiPseudoRando === 5 || aiPseudoRando === 6) {
            if(grid.column4[0] === 1){
                let temp = 'column4';
                aiAddChip(temp);
            }
            else aiMove();
        }
        else if (aiPseudoRando === 9 || aiPseudoRando === 4) {
            if(grid.column5[0] === 1){
                let temp = 'column5';
                aiAddChip(temp);
            }
            else aiMove();
        }
        else if (aiPseudoRando === 10) {
            if(grid.column6[0] === 1){
                let temp = 'column6';
                aiAddChip(temp);
            }
            else aiMove();
        }
        else if (aiPseudoRando === 11) {
            if(grid.column7[0] === 1){
                let temp = 'column7';
                aiAddChip(temp);
            }
            else aiMove();
        }
    }
    

    const updatePlayerTurn = function(){
        // console.log(players);
        if (turnOne === true){
            h1.innerText = `Player ones turn`;
            activePlayer === 'playerOne';
        }
        else{
            if (activePlayer === 'playerOne') {
                activePlayer = 'playerTwo';
                h1.innerText = `Player two's turn`;
            }
            else {
                activePlayer = 'playerOne';
                h1.innerText = `Player one's turn`;
            }
        }
        if (turnOne === true && players.playerOne.species === 'ai') {
            // console.log(`upcoming first rando "ai" move...`);
            turnOne = false;
            setTimeout(aiMove, 5000);
        }
        else if (players[activePlayer].species === 'ai') {
            // console.log(`upcoming rando "ai" move...`);
            setTimeout(aiMove, 50);
        }
        turnOne = false;
        // else if (activePlayer === 'playerOne') {h1.innerText = `Player two's turn`; activePlayer = 'playerTwo';}
        // else {h1.innerText = `Player one's turn`; activePlayer = 'playerOne';}
    }

    const turnOnArrowDrops = function() {
        arrows.forEach(element => {element.addEventListener('click', addchip)});
        // arrow1.addEventListener('click', addchip);
        // arrow2.addEventListener('click', addchip);
        // arrow3.addEventListener('click', addchip);
        // arrow4.addEventListener('click', addchip);
        // arrow5.addEventListener('click', addchip);
        // arrow6.addEventListener('click', addchip);
        // arrow7.addEventListener('click', addchip);
    }
    const columnInput = function(){
        test = 0;
        grid.column1.forEach(function(element){if (element === 1) {test++;}})
        if (test === 0) {
            arrow1.removeEventListener('mouseover', option);
            arrow1.removeEventListener('mouseout', unoption);
            arrow1.removeEventListener('click', addchip);
            arrow1.style.opacity = '0';
        }
        test = 0;
        grid.column2.forEach(function(element){if (element === 1) {test++;}})
        if (test === 0) {
            arrow2.removeEventListener('mouseover', option);
            arrow2.removeEventListener('mouseout', unoption);
            arrow2.removeEventListener('click', addchip);
            arrow2.style.opacity = '0';
        }
        test = 0;
        grid.column3.forEach(function(element){if (element === 1) {test++;}})
        if (test === 0) {
            arrow3.removeEventListener('mouseover', option);
            arrow3.removeEventListener('mouseout', unoption);
            arrow3.removeEventListener('click', addchip);
            arrow3.style.opacity = '0';
        }
        test = 0;
        grid.column4.forEach(function(element){if (element === 1) {test++;}})
        if (test === 0) {
            arrow4.removeEventListener('mouseover', option);
            arrow4.removeEventListener('mouseout', unoption);
            arrow4.removeEventListener('click', addchip);
            arrow4.style.opacity = '0';
        }
        test = 0;
        grid.column5.forEach(function(element){if (element === 1) {test++;}})
        if (test === 0) {
            arrow5.removeEventListener('mouseover', option);
            arrow5.removeEventListener('mouseout', unoption);
            arrow5.removeEventListener('click', addchip);
            arrow5.style.opacity = '0';
        }
        test = 0;
        grid.column6.forEach(function(element){if (element === 1) {test++;}})
        if (test === 0) {
            arrow6.removeEventListener('mouseover', option);
            arrow6.removeEventListener('mouseout', unoption);
            arrow6.removeEventListener('click', addchip);
            arrow6.style.opacity = '0';
        }
        test = 0;
        grid.column7.forEach(function(element){if (element === 1) {test++;}})
        if (test === 0) {
            arrow7.removeEventListener('mouseover', option);
            arrow7.removeEventListener('mouseout', unoption);
            arrow7.removeEventListener('click', addchip);
            arrow7.style.opacity = '0';
        }
    }

    const updateGraphics = function(){                      // I feel like I could spend 30minutes figuring out a forEach loop
                                                            // or I can copy paste and change numbers and be done in 3 minutes
                                                            // i want a working game asap.  can always go back if I have time...
    // col1.forEach(element => element.src = 'imgs/red.jpg');
    // col1[0].src = 'imgs/green.jpg';
    console.log(col1);
    if (grid.column1[0] != 1) col1[0].src = grid.column1[0];
    if (grid.column1[1] != 1) col1[1].src = grid.column1[1];
    if (grid.column1[2] != 1) col1[2].src = grid.column1[2];
    if (grid.column1[3] != 1) col1[3].src = grid.column1[3];
    if (grid.column1[4] != 1) col1[4].src = grid.column1[4];
    if (grid.column1[5] != 1) col1[5].src = grid.column1[5];

    if (grid.column2[0] != 1) col2[0].src = grid.column2[0];
    if (grid.column2[1] != 1) col2[1].src = grid.column2[1];
    if (grid.column2[2] != 1) col2[2].src = grid.column2[2];
    if (grid.column2[3] != 1) col2[3].src = grid.column2[3];
    if (grid.column2[4] != 1) col2[4].src = grid.column2[4];
    if (grid.column2[5] != 1) col2[5].src = grid.column2[5];

    if (grid.column3[0] != 1) col3[0].src = grid.column3[0];
    if (grid.column3[1] != 1) col3[1].src = grid.column3[1];
    if (grid.column3[2] != 1) col3[2].src = grid.column3[2];
    if (grid.column3[3] != 1) col3[3].src = grid.column3[3];
    if (grid.column3[4] != 1) col3[4].src = grid.column3[4];
    if (grid.column3[5] != 1) col3[5].src = grid.column3[5];

    if (grid.column4[0] != 1) col4[0].src = grid.column4[0];
    if (grid.column4[1] != 1) col4[1].src = grid.column4[1];
    if (grid.column4[2] != 1) col4[2].src = grid.column4[2];
    if (grid.column4[3] != 1) col4[3].src = grid.column4[3];
    if (grid.column4[4] != 1) col4[4].src = grid.column4[4];
    if (grid.column4[5] != 1) col4[5].src = grid.column4[5];
    
    if (grid.column5[0] != 1) col5[0].src = grid.column5[0];
    if (grid.column5[1] != 1) col5[1].src = grid.column5[1];
    if (grid.column5[2] != 1) col5[2].src = grid.column5[2];
    if (grid.column5[3] != 1) col5[3].src = grid.column5[3];
    if (grid.column5[4] != 1) col5[4].src = grid.column5[4];
    if (grid.column5[5] != 1) col5[5].src = grid.column5[5];

    if (grid.column6[0] != 1) col6[0].src = grid.column6[0];
    if (grid.column6[1] != 1) col6[1].src = grid.column6[1];
    if (grid.column6[2] != 1) col6[2].src = grid.column6[2];
    if (grid.column6[3] != 1) col6[3].src = grid.column6[3];
    if (grid.column6[4] != 1) col6[4].src = grid.column6[4];
    if (grid.column6[5] != 1) col6[5].src = grid.column6[5];

    if (grid.column7[0] != 1) col7[0].src = grid.column7[0];
    if (grid.column7[1] != 1) col7[1].src = grid.column7[1];
    if (grid.column7[2] != 1) col7[2].src = grid.column7[2];
    if (grid.column7[3] != 1) col7[3].src = grid.column7[3];
    if (grid.column7[4] != 1) col7[4].src = grid.column7[4];
    if (grid.column7[5] != 1) col7[5].src = grid.column7[5];
    }

    const testWin = function(){                              
        // complicated... tests for not fasly of a search of each column for 0 basically if a column is full (of imgs / chips) then the search fails
        // failed search returns undefined   i.e. falsy
        // method failed.  Moving to easier path
        // if (!(grid.column1.find(element => element = '1') ||  
        // grid.column2.find(element => element = '1') ||        
        // grid.column3.find(element => element = '1') ||
        // grid.column4.find(element => element = '1') ||
        // grid.column5.find(element => element = '1') ||
        // grid.column6.find(element => element = '1') ||
        // grid.column7.find(element => element = '1')))
        //     {gameOver = true;}
        //     console.log(gameOver);
        //     console.log(grid);
        //     console.log(grid.column2);
        //     console.log(grid.column2.find(element => element = '1'));

        // Here comes the ugly part.  Building an algorithm would take me a while...  this will take less than an hour
        // all column possibilities

        const activePlayerSwap = function() {
            if (activePlayer === 'playerOne') {activePlayer = 'playerTwo'}
            else activePlayer = 'playerOne';
        }

        if (grid.column1[0]===grid.column1[1] && grid.column1[1]===grid.column1[2] && grid.column1[2]===grid.column1[3] && grid.column1[3] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}
        else if (grid.column1[4]===grid.column1[1] && grid.column1[1]===grid.column1[2] && grid.column1[2]===grid.column1[3] && grid.column1[3] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}
        else if (grid.column1[4]===grid.column1[5] && grid.column1[5]===grid.column1[2] && grid.column1[2]===grid.column1[3] && grid.column1[3] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}
        else if (grid.column1[4]===grid.column1[5] && grid.column1[5]===grid.column1[6] && grid.column1[6]===grid.column1[3] && grid.column1[3] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}
        else if (grid.column1[4]===grid.column1[5] && grid.column1[5]===grid.column1[6] && grid.column1[6]===grid.column1[7] && grid.column1[7] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}

        else if (grid.column2[0]===grid.column2[1] && grid.column2[1]===grid.column2[2] && grid.column2[2]===grid.column2[3] && grid.column2[3] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}
        else if (grid.column2[4]===grid.column2[1] && grid.column2[1]===grid.column2[2] && grid.column2[2]===grid.column2[3] && grid.column2[3] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}
        else if (grid.column2[4]===grid.column2[5] && grid.column2[5]===grid.column2[2] && grid.column2[2]===grid.column2[3] && grid.column2[3] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}
        else if (grid.column2[4]===grid.column2[5] && grid.column2[5]===grid.column2[6] && grid.column2[6]===grid.column2[3] && grid.column2[3] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}
        else if (grid.column2[4]===grid.column2[5] && grid.column2[5]===grid.column2[6] && grid.column2[6]===grid.column2[7] && grid.column2[7] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}

        else if (grid.column3[0]===grid.column3[1] && grid.column3[1]===grid.column3[2] && grid.column3[2]===grid.column3[3] && grid.column3[3] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}
        else if (grid.column3[4]===grid.column3[1] && grid.column3[1]===grid.column3[2] && grid.column3[2]===grid.column3[3] && grid.column3[3] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}
        else if (grid.column3[4]===grid.column3[5] && grid.column3[5]===grid.column3[2] && grid.column3[2]===grid.column3[3] && grid.column3[3] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}
        else if (grid.column3[4]===grid.column3[5] && grid.column3[5]===grid.column3[6] && grid.column3[6]===grid.column3[3] && grid.column3[3] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}
        else if (grid.column3[4]===grid.column3[5] && grid.column3[5]===grid.column3[6] && grid.column3[6]===grid.column3[7] && grid.column3[7] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}

        else if (grid.column4[0]===grid.column4[1] && grid.column4[1]===grid.column4[2] && grid.column4[2]===grid.column4[3] && grid.column4[3] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}
        else if (grid.column4[4]===grid.column4[1] && grid.column4[1]===grid.column4[2] && grid.column4[2]===grid.column4[3] && grid.column4[3] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}
        else if (grid.column4[4]===grid.column4[5] && grid.column4[5]===grid.column4[2] && grid.column4[2]===grid.column4[3] && grid.column4[3] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}
        else if (grid.column4[4]===grid.column4[5] && grid.column4[5]===grid.column4[6] && grid.column4[6]===grid.column4[3] && grid.column4[3] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}
        else if (grid.column4[4]===grid.column4[5] && grid.column4[5]===grid.column4[6] && grid.column4[6]===grid.column4[7] && grid.column4[7] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}

        else if (grid.column5[0]===grid.column5[1] && grid.column5[1]===grid.column5[2] && grid.column5[2]===grid.column5[3] && grid.column5[3] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}
        else if (grid.column5[4]===grid.column5[1] && grid.column5[1]===grid.column5[2] && grid.column5[2]===grid.column5[3] && grid.column5[3] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}
        else if (grid.column5[4]===grid.column5[5] && grid.column5[5]===grid.column5[2] && grid.column5[2]===grid.column5[3] && grid.column5[3] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}
        else if (grid.column5[4]===grid.column5[5] && grid.column5[5]===grid.column5[6] && grid.column5[6]===grid.column5[3] && grid.column5[3] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}
        else if (grid.column5[4]===grid.column5[5] && grid.column5[5]===grid.column5[6] && grid.column5[6]===grid.column5[7] && grid.column5[7] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}

        else if (grid.column6[0]===grid.column6[1] && grid.column6[1]===grid.column6[2] && grid.column6[2]===grid.column6[3] && grid.column6[3] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}
        else if (grid.column6[4]===grid.column6[1] && grid.column6[1]===grid.column6[2] && grid.column6[2]===grid.column6[3] && grid.column6[3] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}
        else if (grid.column6[4]===grid.column6[5] && grid.column6[5]===grid.column6[2] && grid.column6[2]===grid.column6[3] && grid.column6[3] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}
        else if (grid.column6[4]===grid.column6[5] && grid.column6[5]===grid.column6[6] && grid.column6[6]===grid.column6[3] && grid.column6[3] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}
        else if (grid.column6[4]===grid.column6[5] && grid.column6[5]===grid.column6[6] && grid.column6[6]===grid.column6[7] && grid.column6[7] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}

        else if (grid.column7[0]===grid.column7[1] && grid.column7[1]===grid.column7[2] && grid.column7[2]===grid.column7[3] && grid.column7[3] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}
        else if (grid.column7[4]===grid.column7[1] && grid.column7[1]===grid.column7[2] && grid.column7[2]===grid.column7[3] && grid.column7[3] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}
        else if (grid.column7[4]===grid.column7[5] && grid.column7[5]===grid.column7[2] && grid.column7[2]===grid.column7[3] && grid.column7[3] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}
        else if (grid.column7[4]===grid.column7[5] && grid.column7[5]===grid.column7[6] && grid.column7[6]===grid.column7[3] && grid.column7[3] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}
        else if (grid.column7[4]===grid.column7[5] && grid.column7[5]===grid.column7[6] && grid.column7[6]===grid.column7[7] && grid.column7[7] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}
        
        //all row posibilities
        else if (grid.column1[0]===grid.column2[0] && grid.column3[0]===grid.column4[0] && grid.column2[0]===grid.column3[0] && grid.column3[0] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}
        else if (grid.column5[0]===grid.column2[0] && grid.column3[0]===grid.column4[0] && grid.column2[0]===grid.column3[0] && grid.column3[0] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}
        else if (grid.column5[0]===grid.column6[0] && grid.column3[0]===grid.column4[0] && grid.column6[0]===grid.column3[0] && grid.column3[0] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}
        else if (grid.column5[0]===grid.column6[0] && grid.column7[0]===grid.column4[0] && grid.column6[0]===grid.column7[0] && grid.column7[0] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}

        else if (grid.column1[1]===grid.column2[1] && grid.column3[1]===grid.column4[1] && grid.column2[1]===grid.column3[1] && grid.column3[1] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}
        else if (grid.column5[1]===grid.column2[1] && grid.column3[1]===grid.column4[1] && grid.column2[1]===grid.column3[1] && grid.column3[1] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}
        else if (grid.column5[1]===grid.column6[1] && grid.column3[1]===grid.column4[1] && grid.column6[1]===grid.column3[1] && grid.column3[1] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}
        else if (grid.column5[1]===grid.column6[1] && grid.column7[1]===grid.column4[1] && grid.column6[1]===grid.column7[1] && grid.column7[1] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}

        else if (grid.column1[2]===grid.column2[2] && grid.column3[2]===grid.column4[2] && grid.column2[2]===grid.column3[2] && grid.column3[2] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}
        else if (grid.column5[2]===grid.column2[2] && grid.column3[2]===grid.column4[2] && grid.column2[2]===grid.column3[2] && grid.column3[2] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}
        else if (grid.column5[2]===grid.column6[2] && grid.column3[2]===grid.column4[2] && grid.column6[2]===grid.column3[2] && grid.column3[2] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}
        else if (grid.column5[2]===grid.column6[2] && grid.column7[2]===grid.column4[2] && grid.column6[2]===grid.column7[2] && grid.column7[2] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}

        else if (grid.column1[3]===grid.column2[3] && grid.column3[3]===grid.column4[3] && grid.column2[3]===grid.column3[3] && grid.column3[3] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}
        else if (grid.column5[3]===grid.column2[3] && grid.column3[3]===grid.column4[3] && grid.column2[3]===grid.column3[3] && grid.column3[3] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}
        else if (grid.column5[3]===grid.column6[3] && grid.column3[3]===grid.column4[3] && grid.column6[3]===grid.column3[3] && grid.column3[3] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}
        else if (grid.column5[3]===grid.column6[3] && grid.column7[3]===grid.column4[3] && grid.column6[3]===grid.column7[3] && grid.column7[3] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}

        else if (grid.column1[4]===grid.column2[4] && grid.column3[4]===grid.column4[4] && grid.column2[4]===grid.column3[4] && grid.column3[4] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}
        else if (grid.column5[4]===grid.column2[4] && grid.column3[4]===grid.column4[4] && grid.column2[4]===grid.column3[4] && grid.column3[4] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}
        else if (grid.column5[4]===grid.column6[4] && grid.column3[4]===grid.column4[4] && grid.column6[4]===grid.column3[4] && grid.column3[4] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}
        else if (grid.column5[4]===grid.column6[4] && grid.column7[4]===grid.column4[4] && grid.column6[4]===grid.column7[4] && grid.column7[4] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}

        else if (grid.column1[5]===grid.column2[5] && grid.column3[5]===grid.column4[5] && grid.column2[5]===grid.column3[5] && grid.column3[5] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}
        else if (grid.column5[5]===grid.column2[5] && grid.column3[5]===grid.column4[5] && grid.column2[5]===grid.column3[5] && grid.column3[5] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}
        else if (grid.column5[5]===grid.column6[5] && grid.column3[5]===grid.column4[5] && grid.column6[5]===grid.column3[5] && grid.column3[5] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}
        else if (grid.column5[5]===grid.column6[5] && grid.column7[5]===grid.column4[5] && grid.column6[5]===grid.column7[5] && grid.column7[5] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}

        // / diagonals
        else if (grid.column1[3]===grid.column2[2] && grid.column3[1]===grid.column4[0] && grid.column2[2]===grid.column3[1] && grid.column3[1] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}
        else if (grid.column1[4]===grid.column2[3] && grid.column3[2]===grid.column4[1] && grid.column2[3]===grid.column3[2] && grid.column3[2] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}
        else if (grid.column5[0]===grid.column2[3] && grid.column3[2]===grid.column4[1] && grid.column2[3]===grid.column3[2] && grid.column3[2] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}
        else if (grid.column1[5]===grid.column2[4] && grid.column3[3]===grid.column4[2] && grid.column2[4]===grid.column3[3] && grid.column3[3] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}
        else if (grid.column5[1]===grid.column2[4] && grid.column3[3]===grid.column4[2] && grid.column2[4]===grid.column3[3] && grid.column3[3] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}
        else if (grid.column5[1]===grid.column6[0] && grid.column3[3]===grid.column4[2] && grid.column6[0]===grid.column3[3] && grid.column3[3] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}
        else if (grid.column5[2]===grid.column2[5] && grid.column3[4]===grid.column4[3] && grid.column2[5]===grid.column3[4] && grid.column3[4] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}
        else if (grid.column5[2]===grid.column6[1] && grid.column3[4]===grid.column4[3] && grid.column6[1]===grid.column3[4] && grid.column3[4] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}
        else if (grid.column5[2]===grid.column6[1] && grid.column7[0]===grid.column4[3] && grid.column6[1]===grid.column7[0] && grid.column7[0] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}
        else if (grid.column5[3]===grid.column6[2] && grid.column3[5]===grid.column4[4] && grid.column6[2]===grid.column3[5] && grid.column3[5] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}
        else if (grid.column5[3]===grid.column6[2] && grid.column7[1]===grid.column4[4] && grid.column6[2]===grid.column7[1] && grid.column7[1] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}
        else if (grid.column5[4]===grid.column6[3] && grid.column7[2]===grid.column4[5] && grid.column6[3]===grid.column7[2] && grid.column7[2] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}

        // \ diagonals
        else if (grid.column7[3]===grid.column6[2] && grid.column5[1]===grid.column4[0] && grid.column6[2]===grid.column5[1] && grid.column5[1] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}
        else if (grid.column7[4]===grid.column6[3] && grid.column5[2]===grid.column4[1] && grid.column6[3]===grid.column5[2] && grid.column5[2] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}
        else if (grid.column3[0]===grid.column6[3] && grid.column5[2]===grid.column4[1] && grid.column6[3]===grid.column5[2] && grid.column5[2] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}
        else if (grid.column7[5]===grid.column6[4] && grid.column5[3]===grid.column4[2] && grid.column6[4]===grid.column5[3] && grid.column5[3] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}
        else if (grid.column3[1]===grid.column6[4] && grid.column5[3]===grid.column4[2] && grid.column6[4]===grid.column5[3] && grid.column5[3] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}
        else if (grid.column3[1]===grid.column2[0] && grid.column5[3]===grid.column4[2] && grid.column2[0]===grid.column5[3] && grid.column5[3] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}
        else if (grid.column3[2]===grid.column6[5] && grid.column5[4]===grid.column4[3] && grid.column6[5]===grid.column5[4] && grid.column5[4] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}
        else if (grid.column3[2]===grid.column2[1] && grid.column5[4]===grid.column4[3] && grid.column2[1]===grid.column5[4] && grid.column5[4] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}
        else if (grid.column3[2]===grid.column2[1] && grid.column1[0]===grid.column4[3] && grid.column2[1]===grid.column1[0] && grid.column1[0] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}
        else if (grid.column3[3]===grid.column2[2] && grid.column5[5]===grid.column4[4] && grid.column2[2]===grid.column5[5] && grid.column5[5] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}
        else if (grid.column3[3]===grid.column2[2] && grid.column1[1]===grid.column4[4] && grid.column2[2]===grid.column1[1] && grid.column1[1] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}
        else if (grid.column3[4]===grid.column2[3] && grid.column1[2]===grid.column4[5] && grid.column2[3]===grid.column1[2] && grid.column1[2] != '1'){gameOver = true;activePlayerSwap(); h1.innerText = `${activePlayer} has won!`;}

        // yeap, took under an hour.  ~50mins

        else if (arrow1.style.opacity == '0' && arrow2.style.opacity == '0' && arrow3.style.opacity == '0' && arrow4.style.opacity == '0' && 
        arrow5.style.opacity == '0' && arrow6.style.opacity == '0' && arrow7.style.opacity == '0') {
            gameOver = true;
            h1.innerText = 'The game is a draw';
        }
        

        if (gameOver){
            arrow1.removeEventListener('click', addchip);
            arrow2.removeEventListener('click', addchip);
            arrow3.removeEventListener('click', addchip);
            arrow4.removeEventListener('click', addchip);
            arrow5.removeEventListener('click', addchip);
            arrow6.removeEventListener('click', addchip);
            arrow7.removeEventListener('click', addchip);
            zerohumans.innerText = 'rematch?';
            zerohumans.style.display = 'inline-block';
            zerohumans.addEventListener('click', resetValues);
            players.playerOne.species = 'unknown';
            players.playerTwo.species = 'unknown';
            activePlayer = 'playerOne';
            turnOne = true;
        }
    }

    matchStart();
}

chooseNumberOfPlayers();


