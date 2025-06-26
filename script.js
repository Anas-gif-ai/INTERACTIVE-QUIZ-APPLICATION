const questions = [
 
  {
    question: "What does CSS stand for?",
    answers: [
      { text: "Cascading Style Sheets", correct: true },
      { text: "Computer Styling System", correct: false },
      { text: "Creative Style Syntax", correct: false },
      { text: "Coded Styling Sheet", correct: false }
    ]
  },
  {
    question: "Which HTML tag is used to create a hyperlink?",
    answers: [
      { text: "<link>", correct: false },
      { text: "<a>", correct: true },
      { text: "<href>", correct: false },
      { text: "<p>", correct: false }
    ]
  },
  {
    question: "What will be the output of 2 + '2' in JavaScript?",
    answers: [
      { text: "4", correct: false },
      { text: "'22'", correct: true },
      { text: "Error", correct: false },
      { text: "undefined", correct: false }
    ]
  },
  {
    question: "Which property in CSS is used to change the text color?",
    answers: [
      { text: "font-color", correct: false },
      { text: "text-color", correct: false },
      { text: "color", correct: true },
      { text: "background-color", correct: false }
    ]
  },
  {
    question: "What keyword is used to declare a constant in JavaScript?",
    answers: [
      { text: "var", correct: false },
      { text: "let", correct: false },
      { text: "const", correct: true },
      { text: "static", correct: false }
    ]
  },
  {
    question: "Which data structure follows the LIFO principle?",
    answers: [
      { text: "Queue", correct: false },
      { text: "Stack", correct: true },
      { text: "Linked List", correct: false },
      { text: "Graph", correct: false }
    ]
  },
  {
    question: "What method is used to add a new element to the end of an array?",
    answers: [
      { text: "push()", correct: true },
      { text: "pop()", correct: false },
      { text: "shift()", correct: false },
      { text: "unshift()", correct: false }
    ]
  },
  {
    question: "What is the purpose of the 'this' keyword in JavaScript?",
    answers: [
      { text: "Refers to the function itself", correct: false },
      { text: "Refers to the current object", correct: true },
      { text: "Creates a new variable", correct: false },
      { text: "Declares a constant", correct: false }
    ]
  },
  {
    question: "Which HTTP method is used to update existing data?",
    answers: [
      { text: "GET", correct: false },
      { text: "POST", correct: false },
      { text: "PUT", correct: true },
      { text: "DELETE", correct: false }
    ]
  },
  {
    question: "Which JavaScript method converts a JSON string into a JavaScript object?",
    answers: [
      { text: "JSON.parse()", correct: true },
      { text: "JSON.stringify()", correct: false },
      { text: "JSON.convert()", correct: false },
      { text: "JSON.toObject()", correct: false }
    ]
  }
];
  
  const questionElement = document.getElementById("question");
  const answerButtons = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-btn");
  const scoreContainer = document.getElementById("score-container");
  const scoreText = document.getElementById("score");
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerText = "Next";
    scoreContainer.classList.add("hide");
    showQuestion();
  }
  
  function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
  
    currentQuestion.answers.forEach(answer => {
      const button = document.createElement("button");
      button.innerText = answer.text;
      button.classList.add("btn");
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", selectAnswer);
      answerButtons.appendChild(button);
    });
  }
  
  function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
      answerButtons.removeChild(answerButtons.firstChild);
    }
  }
  
  function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
      selectedBtn.classList.add("correct");
      score++;
    } else {
      selectedBtn.classList.add("incorrect");
    }
    
  
    Array.from(answerButtons.children).forEach(button => {
      button.disabled = true;
      if (button.dataset.correct === "true") {
        button.classList.add("correct");
      }
    });
  
    nextButton.style.display = "block";
  }
  
  function showScore() {
    resetState();
    questionElement.innerText = "Quiz Completed!";
    scoreContainer.classList.remove("hide");
    scoreText.innerText = `${score} / ${questions.length}`;
    nextButton.innerText = "Restart";
    nextButton.style.display = "block";
  }
  
  function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showScore();
    }
  }
  
  nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
      handleNextButton();
    } else {
      startQuiz();
    }
  });
  
  startQuiz();
  