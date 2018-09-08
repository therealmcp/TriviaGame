// Global variables
var questionTimer = 9;
var answerTimer = 4;

var questions = [
    question1 = {
    question: "What was 2 Pac's 1st album called ?",
    answers1: ["2Pacalypse Now", "Thug LIfe", "Me against the world", "All Eyez on Me"]
    },

    question2 = {
    qustion: "Which of these artists were NOT in N.W.A.?",
    answers2: ["Terminator X", "MC Ren", "Arabian Prince", "The D.O.C."]
    }
];

var randQuestion = questions[Math.floor(Math.random() * questions.length)];

var sorry = setInterval(function() {
    $(".questions").text("Wrong");
    answerTimer;
    //go to next question
    
}, 1000);

window.onload = function() {
    $("#questions").text(randQuestion);
  };

// Timer that will count down and display time left
var timer = setInterval(function() {
    questionTimer--;
    $("#timer").text(questionTimer)

    // If timer reaches zero, the answer page is displayed and player gets question wrong
    if (questionTimer === 0) {
    clearTimeout(timer);
    sorry;
    };
}, 1000);

// Ask question and start timer when the page is loaded
var question = function() {
    $("#questions").text(randQuestion);
    timer;
};

// If question is answered before timer reaches zero, the answer page is displayed and user gets question right

// Once the user has answered all questions a final page is displayed