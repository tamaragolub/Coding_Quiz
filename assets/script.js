var btnStart = document.getElementById("btn-start");
var questionsDisplay = document.getElementById("questionsDisplay");

questionsDisplay.addEventListener("click", function(e) {
  if (e.target && e.target.className === "btn-choice") {

    var answer = document.createElement("h6");

    if (e.target.textContent === questions[0].answer) {
      
      answer.textContent = "Correct";
    } else {
        
        answer.textContent = "Wrong";
    }
    questionsDisplay.appendChild(answer);
  }
});

btnStart.addEventListener("click", function() {
  btnStart.style.display = "none";

  // h3 for the title
  var h3title = document.createElement("h3");
  h3title.textContent = questions[0].title;
  questionsDisplay.appendChild(h3title);

  // buttons for each answer

  for (var i = 0; i < questions[0].choices.length; i++) {
    var choice = document.createElement("button");
    choice.textContent = questions[0].choices[i];
    choice.classList.add("btn-choice");
    questionsDisplay.appendChild(choice);
  }

  console.log(questions[0]);
});
