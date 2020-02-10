//kinda don't feel like putting comments everywhere if I'm not going to copy paste the js files

const main = document.getElementById('main');

main.style.backgroundColor = 'grey';
main.style.height = '1vh';

const makeBoxes = function(numberOfBoxesToMake){
    for (i=0; i<numberOfBoxesToMake; i++){
        const button = document.createElement('button');
        button.innerText = i+1;
        button.classList.add(`button${i+1}`);
        button.style.backgroundColor = 'red';
        button.style.height = '100px';
        button.style.width = '100px';
        main.appendChild(button);

        const makeRed = function(){
            button.removeEventListener('click', makeRed);
            button.addEventListener ('click', makeGreen); 
            button.style.backgroundColor = 'red';
        }

        const makeGreen = function(){
            button.removeEventListener('click', makeGreen);
            button.addEventListener ('click', makeRed); 
            button.style.backgroundColor = 'green';
        }

        if (button.style.backgroundColor == 'red') {
            console.log('true');
            button.addEventListener ('click', makeGreen);
            
        }
        else if (button.style.backgroundColor == 'green') {

        }
        else {console.log('what happened?'); //hoping not to need this lol... Well shit.  I did
        console.log(button.style.backgroundColor.value);  //I had missed the letter d in backgrounDDDD
        }


    }

}

makeBoxes(20);

// I'm kind of shocked at two things:
// 1. I did this in like 20mins wihtout looking at anything
// 2. It works.  I'm just surprised that looping function calls into eachother that reference
// functions scoped in functions can run like this.

// I asked Scott about this and he believes the EventListener is pushing the makeGreen and makeRed functions 
// (and perhaps their arguements) to global scope.