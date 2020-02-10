//grab main
const main = document.getElementById('main');


//set styles to make room in body for boxes
main.style.height = '100vh';

//3.1 function to make x buttons

const makeButton = function(x) {
    // loop x times (x will be 20)
    for (i=0; i<x; i++){
        const button = document.createElement('button');    //grab button
        button.className = `button${i+1}`;                  //give it a classname
        button.innerText = i+1;                             //give it a visible number
        button.style.backgroundColor = 'green';             //set its bg to green
        button.style.height = '50px';
        button.style.width = '50px';
        main.appendChild(button);                           //insert the box into main

        //define upcoming function that will turn boxes red
        const turnRed = function(){
            button.style.backgroundColor = 'red';           //sets new bg color. Note: button references button number i
        }
        button.addEventListener ('click', turnRed);         //set listener for click to make boxes red
    }
}

//3.1 run button maker function x20
makeButton(20);



