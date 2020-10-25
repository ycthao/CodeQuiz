let currentQuestionIndex = 0;
let timerId;
let time = questions.length * 15;

let startEl = document.getElementById("start");
let instructionEl = document.getElementById("instruction");
let quizQuestionEl = document.getElementById("start-quiz");
let timerEl = document.getElementById("time");
let gameOverEl = document.getElementById("save-score");
let choicesEl = document.getElementById("choices");
let feedbackEl = document.getElementById("feedback");
let initialsEl = document.getElementById("initials");
let submitBtn = document.getElementById("submit");

function startQuiz() {
    // Hide instruction when start button is clicked
    instructionEl.setAttribute("class", "hide");

    // Unhide quiz section by taking hide class off
    quizQuestionEl.removeAttribute("class");

    // start timer
    timerId = setInterval(timeCountdown, 1000);
    timerEl.textContent = time;
    getQuestion();
}

function getQuestion() {
    // get current question object from array
    let currentQuestion = questions[currentQuestionIndex];
    
    // update title with current question
    let titleEl = document.getElementById("question-title");
    // print title in between h1 tag
    titleEl.textContent = currentQuestion.title;
    
    // clear out any old question choices
    choicesEl.innerHTML = "";
    
    // loop over choices
    currentQuestion.choices.forEach(function(choice, i) {
        // create new button for each choice
        let questionChoice = document.createElement("button");
        questionChoice.setAttribute("class", "choice");
        questionChoice.setAttribute("value", choice);
        
        questionChoice.textContent = i + 1 + ". " + choice;
        
        // attach click event listener to each choice
        questionChoice.onclick = questionClick;
        
        // display on the page
        choicesEl.appendChild(questionChoice);
    });
}

function questionClick() {
    // check if user guessed wrong
    if (this.value !== questions[currentQuestionIndex].answer) {
        // penalize time -15 seconds
        time -= 15;
        
        // change time to display 0 once it reach 0
        // else it'll and show negative time
        if (time < 0) {
            time = 0;
        }
        timerEl.textContent = time;
        
        // diplay when the answer is wrong
        feedbackEl.textContent = "Wrong!";
        } else {
        // display when the answer if right    
        feedbackEl.textContent = "Correct!";
        }
        
    // flash right/wrong feedback on page for half a second
    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function() {
        feedbackEl.setAttribute("class", "feedback hide");
    }, 1000);
        
    // move to next question
    currentQuestionIndex++;
        
    // check if we've run out of questions
    if (currentQuestionIndex === questions.length) {
        gameOver();
        } else {
        getQuestion();
        }
}
    
function gameOver()
{
    // stop timer
    clearInterval(timerId);
    
    // hide questions section
    quizQuestionEl.setAttribute("class", "hide");
    
    let finalScoreEl = document.getElementById("final-score");
    finalScoreEl.textContent = time;

    // show gave over screen
    gameOverEl.removeAttribute("class");
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
    
function saveScore() {
    // get initial from input box
    let initials = initialsEl.value.trim();

    // validation to make sure something was enter
    if (initials !== "") {
        let highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

        // format new score object for current user
        let newScore = {
        score: time,
        initials: initials
        };

        // save to localstorage
        highscores.push(newScore);
        window.localStorage.setItem("highscores", JSON.stringify(highscores));

        // redirect to highestscore to show all the scores
        window.location.href = "highestscore.html";
    }
}

submitBtn.onclick = saveScore;

startEl.onclick = startQuiz;
