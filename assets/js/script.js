var btnStart = document.getElementById("btn-start");
var questionsDisplay = document.getElementById("questionsDisplay");
var btnNext = document.getElementById("btn-next");
var checkClicked = false;
var answer = document.getElementById("answerDisplay");
var questionTracker = 0;
var gameOver = document.getElementById("gameOver");

// Checks if button is clicked and displays "correct" or "wrong". Checks the answer and displays "Next button"
questionsDisplay.addEventListener("click", function(e) {
  if (checkClicked === false) {
    if (e.target && e.target.className === "btn-choice") {
      answer.classList.add("show");
      answer.classList.remove("hidden");

      if (e.target.textContent === questions[questionTracker].answer) {
        answer.textContent = "Correct";
      } else {
        answer.textContent = "Wrong";
      }

      btnNext.classList.add("show");
      btnNext.classList.remove("hidden");
      checkClicked = true;
    }
  }
});

// Shows the question and hides the start button.
btnStart.addEventListener("click", function() {
  questionsDisplay.classList.add("show");
  questionsDisplay.classList.remove("hidden");
  btnStart.classList.add("hidden");
  updateQuestions();
});

// Updating the questions
function updateQuestions() {
  // h3 for the title
  var h3title = document.getElementById("questionTitle");
  h3title.textContent = questions[questionTracker].title;

  // buttons for each answer

  for (var i = 0; i < questions[questionTracker].choices.length; i++) {
    console.log("choice" + i);
    var choice = document.getElementById("choice" + i);
    choice.textContent = questions[questionTracker].choices[i];
  }
}

// Hides the Next button and goes to the next question and hides the answer
btnNext.addEventListener("click", function() {
  // change the checkClicked back to false
  checkClicked = false;
  btnNext.classList.add("hidden");
  btnNext.classList.remove("show");
  // change the question

  // change the choices

  // hide the answer response

  answer.classList.add("hidden");
  answer.classList.remove("show");

  if (questionTracker === questions.length - 1) {
    gameOver.classList.remove("hidden");
    gameOver.classList.add("show");
    questionsDisplay.classList.remove("show");
    questionsDisplay.classList.add("hidden");
  } else {
    questionTracker++;
    updateQuestions();
  }
});

// hide questions and choices and the next button
// display "game over!"
