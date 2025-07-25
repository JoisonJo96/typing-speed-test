function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("show");
}




// ✅ Paragraphs for each difficulty level
const textSamples = {
  easy: [
    `Typing is a useful skill for everyone. It helps me write letters and emails fast. With daily practice, my fingers move quickly. I enjoy learning new words to type. The keyboard is now easy to use. I look at the screen and type carefully. Sometimes I make mistakes, but I correct them. I want to type without looking at the keys. Practice every day improves my speed. I am happy with my progress so far.`,
    `The sun rises early in the morning. Birds chirp loudly in the trees. The air smells fresh and clean. People start their work with energy. Children walk to school happily. Flowers bloom in many colors. The sky is bright and clear today. I like to watch the sunrise daily. Nature gives peace to everyone’s mind. Every morning is a new beginning.`,
    `My family is very important to me. We spend time talking and laughing together. We share meals and help each other. On weekends, we go to the park. We play games and enjoy fresh air. I love my parents and my siblings. They always support and encourage me. Family makes me feel safe and happy. I want to spend more time with them. They are my biggest strength and joy.`,
    `I have a small garden at home. I grow flowers, vegetables, and herbs. Every morning, I water the plants. The garden looks green and beautiful. Bees come to collect nectar from flowers. I enjoy spending time with nature there. The fresh air makes me feel relaxed. Plants grow slowly but steadily each day. I learn patience by taking care of them. Gardening is a peaceful hobby for me.`,
    `Reading books is a good habit. Books take me to new places and ideas. I read stories about heroes and adventures. Sometimes I learn new facts and knowledge. Reading improves my vocabulary and focus. I keep a notebook to write new words. I try to read a little every day. Libraries have many interesting books to choose. Books help me grow smarter and curious. I want to read more books this year.`
  ],
  normal: [
    `Learning to type faster helps us in many ways. In today’s world, typing is needed for school, work, and communication. The more we type, the more confident we become. Good typing saves time and reduces mistakes. It also helps when doing research, writing notes, or chatting online. When we type well, we can express ideas clearly and quickly. This is why typing is an important skill for everyone.`,
    `Many students use computers every day. They use them to complete homework, attend classes, and read books. Typing is very helpful in all these tasks. Fast typing lets students finish their work quicker and with fewer errors. It also makes studying easier and more enjoyable. Typing is not just for writing—it helps with thinking and planning. A student who can type well learns faster and does better in school.`,
    `Technology has become part of our daily lives. We use phones, tablets, and laptops for many tasks. Typing is the link between us and these devices. Whether it’s sending a message or writing a document, typing is always involved. Practicing typing every day makes us more skilled and efficient. It also builds focus and attention to detail. In a digital world, typing well is a big advantage.`,
    `The internet gives us access to endless information. We search for answers, read news, and write emails. All these things need typing. When we type with speed and accuracy, we can do more in less time. Typing becomes easier when our fingers know the keyboard well. It’s like learning to ride a cycle—slow at first, then automatic. With practice, anyone can become a great typist.`,
    `Office workers, teachers, students, and even artists use typing daily. It is no longer a special skill, but a basic one. Just like reading or writing, typing should be practiced from a young age. Good typing can reduce stress and make work fun. It also helps in interviews, projects, and competitions. Typing opens the door to many careers. Learning to type is like learning to speak in the digital world.`
  ],
  hard: [
    `Typing is not only about speed, but also accuracy and endurance. Professional typists train their fingers to move with muscle memory, allowing them to produce large volumes of text without fatigue. Each keystroke becomes second nature, eliminating the need to glance at the keyboard. The rhythm of the keys provides feedback, guiding the user subconsciously. With time, typing evolves into an art form that balances speed, precision, and flow.`,
    `In a world driven by digital communication, typing has transformed from a clerical skill into a fundamental necessity. Writers, coders, marketers, and students rely heavily on their typing abilities to meet deadlines and stay productive. The keyboard is a modern-day pen, and mastering it unlocks efficiency and professionalism. Fast, accurate typing enables clear thought expression, boosting confidence in both academic and workplace settings.`,
    `The structure of a keyboard is designed for ergonomic efficiency. Touch typing reduces eye strain, wrist discomfort, and cognitive load by allowing the typist to focus entirely on the screen. With each finger assigned specific keys, the typist develops spatial memory. This structured finger movement helps minimize errors and promotes smoother flow. Advanced typists also adapt to various layouts such as QWERTY, Dvorak, or Colemak for optimization.`,
    `When practicing typing under pressure, the brain must coordinate visual, motor, and linguistic processing in real-time. This cognitive multitasking helps improve mental agility and sharpens memory recall. Studies suggest that regular typing enhances brain connectivity and supports neuroplasticity. Moreover, typists develop faster reading comprehension since their eyes follow sentence flow instinctively. Thus, typing becomes more than just a mechanical skill—it becomes brain training.`,
    `In competitive environments such as data entry, legal transcription, or live captioning, even a small typing delay can have significant effects. Professionals in these fields often use specialized software to track words-per-minute, accuracy, and error rates. Speed typing competitions have even emerged worldwide, with elite typists reaching over 150 WPM. While the average user may not need such speed, adopting best typing practices improves performance across all digital tasks.`
  ]
};

// ✅ DOM elements
const displayText = document.getElementById("displayText");
const inputText = document.getElementById("inputText");
const resultBox = document.getElementById("resultBox");
const difficultySelect = document.getElementById("difficulty");
const timerSelect = document.getElementById("timerSelect");
const timerDisplay = document.getElementById("timerDisplay");

// ✅ State
let currentText = "";
let timerInterval;
let started = false;
let mistakeCount = 0;
let startTime;

// ✅ Get random text
function getRandomText(level) {
  const texts = textSamples[level];
  const randomIndex = Math.floor(Math.random() * texts.length);
  return texts[randomIndex];
}

// ✅ Set text on screen
function setText() {
  clearInterval(timerInterval);
  started = false;
  inputText.disabled = false;
  mistakeCount = 0;
  resultBox.textContent = "";
  timerDisplay.textContent = "00:00";
  timerDisplay.classList.remove("timer-warning");
  inputText.value = "";

  const level = difficultySelect.value;
  currentText = getRandomText(level);
  displayText.innerHTML = "";

  currentText.split("").forEach(char => {
    const span = document.createElement("span");
    span.textContent = char;
    displayText.appendChild(span);
  });
}

// ✅ Result calculation
function calculateResult() {
  const timeSpent = (Date.now() - startTime) / 60000;
  const wordsTyped = inputText.value.trim().split(/\s+/).filter(w => w).length;
  const wpm = Math.round(wordsTyped / timeSpent) || 0;

  resultBox.innerHTML = `
    ✅ <strong>Test Completed!</strong><br>
    ⏱ Time: ${timerSelect.value / 60} minute(s)<br>
    📝 Words Typed: ${wordsTyped}<br>
    ⚡ WPM: ${wpm}<br>
    ❌ Mistakes: ${mistakeCount}
  `;
}

// ✅ Timer
function startTimer(duration) {
  let timeLeft = duration;
  timerInterval = setInterval(() => {
    const m = String(Math.floor(timeLeft / 60)).padStart(2, "0");
    const s = String(timeLeft % 60).padStart(2, "0");
    timerDisplay.textContent = `${m}:${s}`;

    if (timeLeft <= 10) {
      timerDisplay.classList.add("timer-warning");
    }

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      inputText.disabled = true;
      calculateResult();
    }

    timeLeft--;
  }, 1000);
}

// ✅ Typing input listener
inputText.addEventListener("input", () => {
  if (!started) {
    started = true;
    startTime = Date.now();
    startTimer(parseInt(timerSelect.value));
  }

  const userInput = inputText.value;
  const spans = displayText.querySelectorAll("span");
  mistakeCount = 0;

  spans.forEach((span, i) => {
    const typed = userInput[i];
    if (!typed) {
      span.className = "";
    } else if (typed === span.textContent) {
      span.className = "correct";
    } else {
      span.className = "incorrect";
      mistakeCount++;
    }
  });

  if (userInput.length >= currentText.length) {
    clearInterval(timerInterval);
    inputText.disabled = true;
    calculateResult();
  }
});

// ✅ Dropdown change handlers
difficultySelect.addEventListener("change", setText);
timerSelect.addEventListener("change", setText);

// ✅ Run on load
window.onload = setText;














// 🔁 Reset for every change
function resetTest() {
  clearInterval(timer);
  isTypingStarted = false;
  inputTextArea.disabled = false;
  inputTextArea.value = "";
  timerDisplay.classList.remove("warning");
  resultDiv.innerHTML = "";
  displaySampleText();
  updateTimerDisplay(timeSelect.value);
}

// 🔄 On change of difficulty or timer
timeSelect.addEventListener("change", resetTest);
difficultySelect.addEventListener("change", () => {
  loadSampleText();
  resetTest();
});

// 🔃 Init
window.onload = () => {
  loadSampleText();
  updateTimerDisplay(timeSelect.value);
};
