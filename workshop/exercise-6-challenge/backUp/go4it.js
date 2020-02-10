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
const arrow1 = document.querySelector('.arrow1');
const arrow2 = document.querySelector('.arrow2');
const arrow3 = document.querySelector('.arrow3');
const arrow4 = document.querySelector('.arrow4');
const arrow5 = document.querySelector('.arrow5');
const arrow6 = document.querySelector('.arrow6');
const arrow7 = document.querySelector('.arrow7');








let players = {playerOne: {species: 'unknown', color: 'unknown'}, playerTwo: {species: 'unknown', color: 'unknown'}};
let activePlayer = 'playerOne';






const chipselection = function(){
    console.log(event.target);
    players.activePlayer.color = event.target;
}

const chooseChipColors = function() {
    console.log(col1);
    h1.innerText = `Choose player one's chip color`;
    col1.forEach(element => element.src = 'imgs/red.jpg');
    col2.forEach(element => element.src = 'imgs/orange.jpg');
    col3.forEach(element => element.src = 'imgs/yellow.jpg');
    col4.forEach(element => element.src = 'imgs/green.jpg');
    col5.forEach(element => element.src = 'imgs/purple.jpg');
    col6.forEach(element => element.src = 'imgs/black.jpg');
    col7.forEach(element => element.src = 'imgs/rainbow.jpg');
    arrow1.addEventListener('click', chipselection);

}




const chooseNumberOfPlayers = function(){
    const humanschosen = function(){
        zerohumans.style.display = 'none';
        onehuman.style.display = 'none';
        twohumans.style.display = 'none';
        if(event.target.id==='zero'){
            players.playerOne.species = 'ai';
            players.playerTwo.species = 'ai';
        }
        else if(event.target.id==='one'){
            players.playerOne.species = 'human';
            players.playerTwo.species = 'ai';
        }
        else if(event.target.id==='two'){
            players.playerOne.species = 'human';
            players.playerTwo.species = 'human';
        }
        else {console.log('problem?');}
        zerohumans.removeEventListener('click', humanschosen);
        onehuman.removeEventListener('click', humanschosen);
        twohumans.removeEventListener('click', humanschosen);
        chooseChipColors();
    }

    zerohumans.addEventListener('click', humanschosen);
    onehuman.addEventListener('click', humanschosen);
    twohumans.addEventListener('click', humanschosen);
}

chooseNumberOfPlayers();

