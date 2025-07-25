let table = 1;
let number = 1;
const maxTable = 10;
const maxNumber = 10;

const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const feedbackEl = document.getElementById("feedback");
const completedEl = document.getElementById("completed");

function updateQuestion() {
  questionEl.textContent = `${table} × ${number} = ?`;
  answerEl.value = '';
  feedbackEl.textContent = '';
  answerEl.focus();
}

function checkAnswer() {
  const userAnswer = parseInt(answerEl.value);
  const correctAnswer = table * number;

  if (userAnswer === correctAnswer) {
    feedbackEl.textContent = '✅ Correct!';
    feedbackEl.className = 'feedback correct';
    setTimeout(() => {
      number++;
      if (number > maxNumber) {
        table++;
        number = 1;
      }

      if (table > maxTable) {
        questionEl.textContent = '';
        answerEl.style.display = 'none';
        feedbackEl.style.display = 'none';
        completedEl.textContent = '🎉 You completed all tables from 1 to 10!';
      } else {
        updateQuestion();
      }
    }, 800);
  } else {
    feedbackEl.textContent = '❌ Wrong! Try again';
    feedbackEl.className = 'feedback wrong';
  }
}

answerEl.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    checkAnswer();
  }
});

updateQuestion();


  function goHome() {
    window.location.href = "index.html"; // or your homepage file path
  }
