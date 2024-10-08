/* jshint strict: true */

document.getElementById('fontsize').onchange = fontsize;
document.getElementById('animation').onchange = animation;
document.getElementById('start').onclick = startAnimationBtn;
document.getElementById('stop').onclick = stopAnimationBtn;
document.getElementById('turbo').onclick = speedUpTurbo;


/* declare and initial public variables */
let animationArray = [];
let animationIntervalID;
let speed = 250;

/* prepare the default environment */
toggleButtons("initial"); // disable buttons by default

/* change the font size in the text area */
function fontsize() {
    const size = this.value;
    const textArea = document.getElementById("text-area");
    textArea.style.fontSize = parseInt(size) + 'pt';
}


function animation() {
    const target = this.value;
    const textArea = document.getElementById("text-area");
    if(target !== "Blank"){
        animationArray = ANIMATIONS[target].split("=====\n");
        toggleButtons('stop'); // active start button after the animation chose.
    }else{
        toggleButtons("initial");
    }

}

/* start the animation in the text area */
function startAnimationBtn() {
    toggleButtons('start');
    const textArea = document.getElementById("text-area");
    let i =0;
    animationIntervalID = setInterval(function () {
        if (i < animationArray.length){
            textArea.value = animationArray[i];
        }else{
            i=0;
            textArea.value = animationArray[i];
        }
        i++;
    },speed);
}

/* stop the animation in the text area */
function stopAnimationBtn() {
    toggleButtons('stop');
    clearInterval(animationIntervalID);
}

function speedUpTurbo(){

    if (this.checked === true){
        clearInterval(animationIntervalID);
        speed = 50;
        startAnimationBtn(); // start again.
    }else{
        clearInterval(animationIntervalID);
        speed = 250;
        startAnimationBtn(); // start again.
    }
}

/* change the disable buttons when start or stop */
function toggleButtons(clickedButton) {
    const stop = document.getElementById("stop");
    const start = document.getElementById("start");

    if (clickedButton === 'start'){
        stop.disabled = false;
        start.disabled = true;
    }else if (clickedButton == 'stop'){
        start.disabled = false;
        stop.disabled = true;
    }else{
        // initial state buttons are disabled.
        start.disabled = true;
        stop.disabled = true;
    }
}