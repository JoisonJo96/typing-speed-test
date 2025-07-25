
const questions = [
  {
    sentence: "ഞാൻ ____ പോകുന്നു.",
    answer: "വീട്",
    options: ["കൂടെ", "വീട്", "വണ്ടി", "വഴി"]
  },
  {
    sentence: "പൂവിന് ____ ഉണ്ട്.",
    answer: "മണം",
    options: ["മണം", "നീളം", "പൂവ്", "കണ്ണ്"]
  },
  {
    sentence: "പെൻസിൽ ____ തട്ടുന്നു.",
    answer: "മെസ",
    options: ["മേശ", "മെസ", "മരം", "ചവിട്ടി"]
  },
  {
    sentence: "അവൻ ____ കഴിച്ചു.",
    answer: "ചോറു",
    options: ["തേന്", "ചോറു", "പാലു", "കറി"]
  },
  {
    sentence: "അമ്മ ____ ഉണ്ടാക്കുന്നു.",
    answer: "സാധനം",
    options: ["അപ്പം", "പായasam", "ചായ", "സാധനം"]
  },
  {
    sentence: "ഞങ്ങൾ ____ കളിച്ചു.",
    answer: "പന്ത്",
    options: ["ചിത്രം", "പന്ത്", "തൂവല്", "പൂവ്"]
  },
  {
    sentence: "കുട്ടി ____ എഴുതി.",
    answer: "അക്ഷരം",
    options: ["അക്ഷരം", "ചിത്രം", "കഥ", "കവിത"]
  },
  {
    sentence: "മരത്തിൽ ____ ഉണ്ടായിരുന്നു.",
    answer: "പൂവ്",
    options: ["പഴം", "ഇല", "ശാഖ", "പൂവ്"]
  },
  {
    sentence: "പക്ഷി ____ പറന്നു.",
    answer: "ആകാശം",
    options: ["പുഴ", "വൃക്ഷം", "വീടിന്", "ആകാശം"]
  },
  {
    sentence: "നിന്നെ കണ്ടപ്പോൾ ഞാൻ ____.",
    answer: "സന്തോഷം",
    options: ["ദുഃഖം", "സന്തോഷം", "ഭയം", "ചിന്ത"]
  },
  {
    sentence: "വൃത്തത്തിന് ____ ഉണ്ട്.",
    answer: "വട്ടം",
    options: ["വട്ടം", "വണ്ണം", "നിഴൽ", "തൂക്കം"]
  },
  {
    sentence: "വഴിയിലൂടെ ____ ഓടുന്നു.",
    answer: "കാർ",
    options: ["വണ്ടി", "കാർ", "പക്ഷി", "മരം"]
  },
  {
    sentence: "അച്ഛൻ ____ പോയി.",
    answer: "ഓഫീസ്",
    options: ["മത്സ്യം", "കച്ചവടം", "ഓഫീസ്", "മരമുണ്ട"]
  },
  {
    sentence: "പുലി ____ പൊട്ടിച്ചു.",
    answer: "കരഞ്ഞു",
    options: ["കരഞ്ഞു", "പാടിച്ചു", "പറഞ്ഞു", "ചിരിച്ചു"]
  },
  {
    sentence: "പുസ്തകത്തിൽ ____ എഴുതുക.",
    answer: "പേജ്",
    options: ["ചിത്രം", "കഥ", "പേജ്", "വാക്ക്"]
  },
  {
    sentence: "വാനത്തിൽ ____ കാണുന്നു.",
    answer: "മേഘം",
    options: ["താരകം", "മേഘം", "പക്ഷി", "മരങ്ങൾ"]
  },
  {
    sentence: "ചെടിയിൽ ____ വിരിഞ്ഞു.",
    answer: "പൂവ്",
    options: ["പട്ടം", "ഇല", "പൂവ്", "കമ്പി"]
  },
  {
    sentence: "മുട്ടയുടെ ____ പൊട്ടുന്നു.",
    answer: "ഒമ്ലെറ്റ്",
    options: ["വെട്ട്", "കഷണം", "ഒമ്ലെറ്റ്", "കറ്റം"]
  },
  {
    sentence: "അവൾ ____ വിളിച്ചു.",
    answer: "സഹോദരി",
    options: ["സഹോദരി", "അമ്മ", "വണ്ടി", "കത്തി"]
  },
  {
    sentence: "നമ്മുടെ ദേശീയ പക്ഷി ____ ആണ്.",
    answer: "മയിൽ",
    options: ["കാക്ക", "മയിൽ", "ചെമ്മാൻ", "പഞ്ചി"]
  },
  {
    sentence: "താമസസ്ഥലം ____ ആണ്.",
    answer: "വീട്",
    options: ["കാര്", "ക്ലാസ്", "വീട്", "റോഡ്"]
  },
  {
    sentence: "കുറുപ്പ് ____ എഴുതി.",
    answer: "കവിത",
    options: ["ചിത്രം", "കവിത", "പുസ്തകം", "നാടകം"]
  },
  {
    sentence: "അവൻ ____ വീണു.",
    answer: "തറയിൽ",
    options: ["പുഴയിൽ", "തറയിൽ", "വാതിലിൽ", "കൈയിൽ"]
  },
  {
    sentence: "പെൺകുട്ടി ____ പറഞ്ഞു.",
    answer: "കഥ",
    options: ["പാട്ട്", "കവിത", "കഥ", "വാക്ക്"]
  },
  {
    sentence: "തളിർ ____ ഉയരുന്നു.",
    answer: "ഇല",
    options: ["വെള്ളം", "പൂവ്", "ഇല", "പുഴ"]
  },
  {
    sentence: "മുഴു രാത്രി ____ കാണിച്ചു.",
    answer: "ചന്ദ്രൻ",
    options: ["സൂര്യൻ", "ചന്ദ്രൻ", "മേഘം", "നക്ഷത്രം"]
  },
  {
    sentence: "അവൻ ____ എടുത്തു.",
    answer: "പെൻ",
    options: ["പുസ്തകം", "പെൻ", "ചട്ടുതി", "ചായ"]
  },
  {
    sentence: "അവളുടെ കണ്ണിൽ ____ നിറഞ്ഞു.",
    answer: "കണ്ണീർ",
    options: ["സന്തോഷം", "വിയർപ്പ്", "കണ്ണീർ", "ഭയം"]
  },
  {
    sentence: "കുട്ടികൾ ____ ഓടുന്നു.",
    answer: "പായുന്നു",
    options: ["നടക്കുന്നു", "കുളിക്കുന്നു", "പായുന്നു", "പാടുന്നു"]
  },
  {
    sentence: "വണ്ടിയുടെ ____ പൊട്ടി.",
    answer: "ചക്രം",
    options: ["കണ്ണാടി", "ചക്രം", "കണ്ണു", "ഇഞ്ചൻ"]
  }
];


let currentIndex = 0;
let timerInterval;
let timeLeft = 15;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const resultEl = document.getElementById("result");
const timerEl = document.getElementById("timer");

function startTimer() {
  timeLeft = 15;
  updateTimer();
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      showCorrectAnswer();
    }
  }, 1000);
}

function updateTimer() {
  timerEl.textContent = timeLeft;
  if (timeLeft <= 5) {
    timerEl.classList.add("flash-red");
  } else {
    timerEl.classList.remove("flash-red");
  }
}

function disableAllOptions() {
  const allBtns = document.querySelectorAll(".option-btn");
  allBtns.forEach(btn => btn.disabled = true);
}

function showCorrectAnswer() {
  const current = questions[currentIndex];
  document.getElementById("blank").textContent = current.answer;
  resultEl.textContent = "⏰ സമയം കഴിഞ്ഞു! ശരിയുള്ളത്: " + current.answer;
  disableAllOptions();
  setTimeout(() => {
    currentIndex++;
    if (currentIndex < questions.length) {
      loadQuestion();
    } else {
      showCompletion();
    }
  }, 2000);
}

function loadQuestion() {
  clearInterval(timerInterval);
  resultEl.textContent = "";
  optionsEl.innerHTML = "";

  const current = questions[currentIndex];
  const sentence = current.sentence.replace("____", "<span id='blank'>_____</span>");
  questionEl.innerHTML = sentence;

  current.options.forEach(option => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = option;

    btn.onclick = () => {
      clearInterval(timerInterval);
      const isCorrect = option === current.answer;
      if (isCorrect) {
        btn.classList.add("correct");
        document.getElementById("blank").textContent = option;
        resultEl.textContent = "✅ ശരിയാണ്!";
      } else {
        btn.classList.add("wrong");
        document.getElementById("blank").textContent = current.answer;
        resultEl.textContent = "❌ തെറ്റാണ്! ശരിയുള്ളത്: " + current.answer;
      }
      disableAllOptions();
      setTimeout(() => {
        currentIndex++;
        if (currentIndex < questions.length) {
          loadQuestion();
        } else {
          showCompletion();
        }
      }, 2000);
    };

    optionsEl.appendChild(btn);
  });
 




  startTimer();
}

function showCompletion() {
  questionEl.innerHTML = "🎉 എല്ലാവരും പൂർത്തിയായി!";
  optionsEl.innerHTML = "";
  resultEl.innerHTML = "";
  timerEl.style.display = "none";
}

 loadQuestion();