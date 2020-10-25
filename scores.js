function printHighscores() {
  // either get scores from localstorage or set to empty array
  let highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

  // sort highscores by score property in descending order
  highscores.sort(function(a, b) {
    return b.score - a.score;
  });

  highscores.forEach(function(score) {
    // create li tag for each high score
    let liTag = document.createElement("li");
    liTag.textContent = score.initials + " - " + score.score;

    // display on page
    let olEl = document.getElementById("highscores");
    olEl.appendChild(liTag);
  });
}

// to clear all scores
function clearHighscores() {
  // scores are stored locally, use removeItems to remove
  window.localStorage.removeItem("highscores");
  window.location.reload();
}

// set an onclick event to button to clear all values
// could call a variable then just calling that vairable
document.getElementById("clearScore").onclick = clearHighscores;

// run function when page loads
printHighscores();
