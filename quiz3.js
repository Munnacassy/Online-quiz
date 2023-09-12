// Define an array of quiz questions
const quizQuestions = [
    {
      question: "which country has won the most world cups?",
      options: ["Brazil", "Portugal", "India", "Japan"],
      correctAnswer: "Brazil"
    },
    {
      question: "How many minutes are in a full week",
      options: ["10800", "54979", "72088", "78428"],
      correctAnswer: "10800"
    },
    {
      question: "which planet in the Milky Way is tha hottest?",
      options: ["Mars", "Earth", "Venus", "Sun"],
      correctAnswer: "Venus"
    },
    {
      question: "how many elements are present in periodic table?",
      options: ["184", "186", "188", "200"],
      correctAnswer: "188"
    },
    {
      question: "What company was originally called 'cadabra' ?",
      options: ["Flipkart", "Amazon", "Ajio", "Meesho"],
      correctAnswer: "Amazon"
    },
    {
      question: "how many dots appear in a pair of dice?",
      options: ["40", "50", "42", "52"],
      correctAnswer: "42"
    },
    {
      question: "What phone company produced in 3310?",
      options: ["samsung", "oppo", "nokia", "lava"],
      correctAnswer: "nokia"
    },
    {
      question: "pink ladies and granny smiths are types of what fruits ?",
      options: ["banana", "apple", "orange", "strawberry"],
      correctAnswer: "apple"
    },
    {
      question: "what color is the mickey mouse's shoes?",
      options: ["white", "black", "red", "yellow"],
      correctAnswer: "yellow"
    }
  ];
  
  // Variables to track quiz state
  let currentQuestionIndex = 0;
  let score = 0;
  let timeLeft = 45;
  let timerInterval;
  
  // Function to start the quiz
  function startQuiz() {
    // Hide the start button and display the first question
    document.getElementById("start-button").style.display = "none";
    displayQuestion();
    startTimer();
  }
  
  // Function to display a question and its options
  function displayQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const questionText = document.getElementById("question-text");
    const answerButtons = document.getElementById("answer-buttons");
  
    // Clear previous question and answer options
    questionText.innerHTML = "";
    answerButtons.innerHTML = "";
  
    // Display the current question
    questionText.innerHTML = currentQuestion.question;
  
    // Create answer buttons for each option
    currentQuestion.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      button.classList.add("answer-button");
      answerButtons.appendChild(button);
  
      // Add click event listener to check the answer
      button.addEventListener("click", function() {
        checkAnswer(option);
      });
    });
  }
  
  // Function to check the selected answer
  function checkAnswer(selectedOption) {
    const currentQuestion = quizQuestions[currentQuestionIndex];
  
    // Check if the selected answer is correct
    if (selectedOption === currentQuestion.correctAnswer) {
      score++;
    }
  
    // Move to the next question or end the quiz if all questions are answered
    currentQuestionIndex++;
  
    if (currentQuestionIndex < quizQuestions.length) {
      displayQuestion();
    } else {
      endQuiz();
    }
  }
  
  // Function to start the timer
  function startTimer() {
    timerInterval = setInterval(function() {
      timeLeft--;
  
      // Update the timer text
      document.getElementById("timer").textContent = timeLeft;
  
      // End the quiz if time runs out
      if (timeLeft <= 0) {
        endQuiz();
      }
    }, 1000);
  }
  
  // Function to end the quiz
  function endQuiz() {
    // Stop the timer
    clearInterval(timerInterval);
  
    // Calculate the score percentage
    const scorePercentage = (score / quizQuestions.length) * 100;
  
    // Display the final score
    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = `
      <h2>Quiz Completed!</h2>
      <p>Your Score: ${score} out of ${quizQuestions.length}</p>
      <p>Score Percentage: ${scorePercentage}%</p>
    `;
  }
  
  // Add event listener to start the quiz when the start button is clicked
  document.getElementById("start-button").addEventListener("click", startQuiz);