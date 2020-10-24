let timerId;
let time = 10;

let startEl = document.getElementById("start");
let instructionEl = document.getElementById("instruction");
let quizQuestionEl = document.getElementById("start-quiz");
let timerEl = document.getElementById("time");

function startQuiz() {
    // Call just to see if the on click work.  will delete once everything works
    //alert("It works!");

    // once start quiz is open
    // need to hide quiz instruction and show questions
    // also need to start timer
    
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
    timerEl.textContent = time;

    if (time <= 0){
        timerEl.textContent = 0;
    }


  }


startEl.onclick = startQuiz;