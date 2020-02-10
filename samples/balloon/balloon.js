const balloon = document.getElementById('balloon');
const MIN_BALLOON_SIZE = 6;
const MAX_BALLOON_SIZE = 100;
let balloonSize = 12;
const INCREMENT = 2;
const MAX_EXPLOSION_SIZE = 1000;
balloon.style.fontSize = `${balloonSize}px`;


function handleKeyDown() {
    if (event.key === "ArrowUp"){
        if (balloonSize < MAX_BALLOON_SIZE){
            balloonSize += INCREMENT;
            balloon.style.fontSize = `${balloonSize}px`;
                if(balloonSize >= MAX_BALLOON_SIZE){
                    document.removeEventListener('keydown', handleKeyDown);
                    balloon.innerText = '💥';

                    const explosion = setInterval(function(){
                        balloonSize += 50;
                        balloon.style.fontSize = `${balloonSize}px`;
                        if (balloonSize > MAX_EXPLOSION_SIZE){
                            clearInterval(explosion);
                        }
                    },20);
            }
        }

                        //fadeout using opacity  one day...





    }
    else if(event.key === "ArrowDown") {

        if(balloonSize > MIN_BALLOON_SIZE){
            balloonSize -= INCREMENT;
            balloon.style.fontSize = `${balloonSize}px`;
            if(balloonSize === MIN_BALLOON_SIZE){

            }

        }
        // balloon deflates
        //if balloon == baloonMinSize, then keep size
        console.log("down");

    }
};






        // event listener that triggers for keydown event
document.addEventListener('keydown', handleKeyDown);