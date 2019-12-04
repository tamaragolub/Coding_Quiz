var btnStart = document.getElementById("btn-start");
var questionsDisplay = document.getElementById("questionsDisplay");
var btnNext = document.getElementById("btn-next");
var checkClicked = false;
var answer = document.getElementById("answerDisplay");
var questionTracker = 0

questionsDisplay.addEventListener("click", function(e) {
  if (checkClicked === false) {
    if (e.target && e.target.className === "btn-choice") {
      answer.classList.add("show");
      answer.classList.remove("hidden");

      if (e.target.textContent === questions[0].answer) {
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

btnStart.addEventListener("click", function() {
  questionsDisplay.classList.add("show");
  questionsDisplay.classList.remove("hidden");
  btnStart.classList.add("hidden")
  updateQuestions();
});

function updateQuestions() {
  
  // h3 for the title
  var h3title = document.getElementById("questionTitle");
  h3title.textContent = questions[questionTracker].title;
  
  
  // buttons for each answer
  
  for (var i = 0; i < questions[questionTracker].choices.length; i++) {
    console.log("choice" + i)
    var choice = document.getElementById("choice" + i);
    choice.textContent = questions[questionTracker].choices[i];
  }
}

btnNext.addEventListener("click", function(){
  // change the checkClicked back to false
    checkClicked = false
    btnNext.classList.add("hidden");
    btnNext.classList.remove("show");
  // change the question

    questionTracker++

  // change the choices

    updateQuestions();

  // hide the answer response

  answer.classList.add("hidden");
  answer.classList.remove("show");


})
