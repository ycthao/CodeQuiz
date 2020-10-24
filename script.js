let timerId;
let time = 10;

let startEl = document.getElementById("start");
let instructionEl = document.getElementById("instruction");
let quizQuestionEl = document.getElementById("start-quiz");
let timerEl = document.getElementById("time");
let gameOverEl = document.getElementById("save-score");

function startQuiz() {
    // Hide instruction when start button is clicked
    instructionEl.setAttribute("class", "hide");

    // Unhide quiz section by taking hide class off
    quizQuestionEl.removeAttribute("class");

    // start timer
    timerId = setInterval(timeCountdown, 1000);
}

function timeCountdown() {
    // update time
    time--;
    // show time
    timerEl.textContent = time;

    // do this when time becomes 0
    if (time <= 0){
        timerEl.textContent = 0;
        // Calling gameOver function to end game when time goes to 0
        gameOver();
    }
  }

function gameOver()
{
    // if time = 0  then this screen need to show
    // to show game over screen, need to remove question
    
    // hide questions div
    quizQuestionEl.setAttribute("class", "hide");
    
    // unhide gave over screen
    gameOverEl.removeAttribute("class");

    // if all answers are correct show this screen
}


startEl.onclick = startQuiz;