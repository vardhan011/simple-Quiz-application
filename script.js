    
const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Lisbon"],
      correct: 2
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correct: 1
    },
    {
      question: "Who wrote 'Hamlet'?",
      options: ["Shakespeare", "Dickens", "Hemingway", "Austen"],
      correct: 0
    },
    {
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic", "Indian", "Arctic", "Pacific"],
      correct: 3
    },
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      correct: 1
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").textContent = currentQuestion.question;
  
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = ""; // Clear previous options
    currentQuestion.options.forEach((option, index) => {
      const optionButton = document.createElement("button");
      optionButton.textContent = option;
      optionButton.onclick = () => checkAnswer(index);
      optionsContainer.appendChild(optionButton);
    });
  }
  
  function checkAnswer(selectedOptionIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOptionIndex === currentQuestion.correct) {
      score++;
    }
    nextQuestion();
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    document.getElementById("question-container").classList.add("hidden");
    document.getElementById("next-btn").classList.add("hidden");
  
    const resultContainer = document.getElementById("result-container");
    resultContainer.classList.remove("hidden");
    document.getElementById("score").textContent = `Your score: ${score} out of ${questions.length}`;
  }
  
  function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("result-container").classList.add("hidden");
    document.getElementById("question-container").classList.remove("hidden");
    document.getElementById("next-btn").classList.remove("hidden");
    loadQuestion();
  }
  
  loadQuestion();
  