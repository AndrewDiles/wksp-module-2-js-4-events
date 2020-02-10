const main = document.getElementById('main');
const body = document.getElementById('body');

let viewPortWidth = window.innerWidth;
let viewPortHeight = window.innerHeight;

body.style.backgroundColor = 'black';
//Below is me trying to prevent boxes from escaping borders of window
body.style.height = `${viewPortHeight}px`;
body.style.width = `${viewPortWidth}px`;
body.style.margin = '200px;';
body.style.display = 'flex';
// body.style.position = 'relative';
main.style.width = `${0.95 * viewPortWidth}px`;
main.style.height = `${0.95 * viewPortHeight}px`;

//struggling to keep them inside...



const makeBoxes = function(numberOfBoxesToMake){
    for (i=0; i<numberOfBoxesToMake; i++){
        const button = document.createElement('button');
        button.innerText = i+1;
        button.style.fontSize = '30px';
        button.style.backgroundColor = 'maroon';
        button.style.height = '50px';
        button.style.width = '50px';
        const x = 100*Math.random();
        const y = 100*Math.random();
        button.style.left = `${x}%`;
        button.style.top = `${y}%`;
        button.style.position = 'absolute';
        main.appendChild(button);

        const makeMaroon = function(){
            button.removeEventListener('click', makeMaroon);
            button.addEventListener ('click', makeGreen); 
            button.style.backgroundColor = 'maroon';
        }

        const makeGreen = function(){
            button.removeEventListener('click', makeGreen);
            button.addEventListener ('click', makeMaroon); 
            button.style.backgroundColor = 'green';
        }

        if (button.style.backgroundColor == 'maroon') {
            console.log('true');
            button.addEventListener ('click', makeGreen);
            
        }
        else if (button.style.backgroundColor == 'green') {
        }
    }

}

makeBoxes(20);