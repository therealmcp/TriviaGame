// Global variables
var questionTimer = 9;
var answerTimer = 4;

var questions = [
    question1 = {
    question: "What was 2 Pac's first album called?",
    answers: ["2Pacalypse Now", "Thug LIfe", "Me against the world", "All Eyez on Me"]
    },

    question2 = {
    question: "Which of these artists were NOT in N.W.A.?",
    answers: ["Terminator X", "MC Ren", "Arabian Prince", "The D.O.C."]
    }
];

// Choose a question at random
var randQuestion = questions[Math.floor(Math.random() * questions.length)];

// Array of the answers for the question chosen and displayed by program
var questAnswers = randQuestion.answers

// Shuffle an array
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while(0 != currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};

// Shuffle answers of chosen question
questAnswers = shuffle(questAnswers);

// Shuffle questions



var nextQuestion = function() {
    $("#question").text(randQuestion.question);
    $("#firstChoice").text(questAnswers[0]);
    $("#secondChoice").text(questAnswers[1]);
    $("#thirdChoice").text(questAnswers[2]);
    $("#fourthChoice").text(questAnswers[3]);
};

window.onload = function() {
    nextQuestion();
  };

// Timer that will count down and display time left


    // If timer reaches zero, the answer page is displayed and player gets question wrong


// Ask question and start timer when the page is loaded

// If question is answered before timer reaches zero, the answer page is displayed and user gets question right

// Once the user has answered all questions a final page is displayed