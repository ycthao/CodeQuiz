let startEl = document.getElementById("start");
let instructionEl = document.getElementById("instruction");


function startQuiz() {
    // Call just to see if the on click work.  will delete once everything works
    //alert("It works!");

    // once start quiz is open
    // need to hide quiz instruction and show questions
    // also need to start timer
    
    // Hide instruction when start button is clicked
    instructionEl.setAttribute("class", "hide");

}

startEl.onclick = startQuiz;