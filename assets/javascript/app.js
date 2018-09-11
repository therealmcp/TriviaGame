// Add doc.ready from jquery

// Global variables
var questionTimer = 10;
var answerTimer = 5;
var correctAnswers = 0;
var wrongAnswers = 0;

var questions = [
    question1 = {
        question: "What was 2Pac's first album called?",
        answers: ["2Pacalypse Now", "Thug LIfe", "Me against the world", "All Eyez on Me"]
    },

    question2 = {
        question: "Which of these artists were NOT in N.W.A.?",
        answers: ["Terminator X", "MC Ren", "Arabian Prince", "The D.O.C."]
    },

    question3 = {
        question: "Which of these artists are NOT from Compton?",
        answers: ["Snoop Dogg", "The Game", "Kendrick Lamar", "Coolio"]
    }
];

// Choose a question at random
var randQuestion = questions[Math.floor(Math.random() * questions.length)];

// Pull rand question from array once it's been used.

// Array of the answers for the question chosen and displayed by program
// Using slice to return a copy of answer array
var questAnswers = randQuestion.answers.slice(0);

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
newAnswers = shuffle(questAnswers);

// Add event listener to buttons clicked
$(".btn").on("click", function() {
    var clicked = $(this).html();
    if (clicked === randQuestion.answers[0]) {
        console.log("correct");
        $(this).addClass("btn-success");
        correctAnswers++;
        $("#correct").text(correctAnswers);
    } else {
        $(this).addClass("btn-danger");
        $(randQuestion.answers[0]).addClass("btn-success"); // Doesn't work
        wrongAnswers++;
        $("#wrong").text(wrongAnswers);
    };
});

var showQuestion = function() {
    $("#question").text(randQuestion.question);
    $("#firstChoice").text(newAnswers[0]);
    $("#secondChoice").text(newAnswers[1]);
    $("#thirdChoice").text(newAnswers[2]);
    $("#fourthChoice").text(newAnswers[3]);
    for (i = 0; i > newAnswers.length; i++) {
        if(newAnswers[i] === randQuestion.answers[0]) {
            
        }
    }
    $(".btn").
    timerQ;
    
};

// Ask question and start timer when the page is loaded
window.onload = function() {
    showQuestion();
  };

// Timer that will count down and display time left
var timerQ = setInterval(function() {
    questionTimer--;
    $("#timer").text(questionTimer);

    // If timer reaches zero, the answer page is displayed and player gets question wrong
    if (questionTimer === 0) {
        clearTimeout(timerQ);
        timer;
    };
}, 1000);

var timer = setInterval(function() {
    answerTimer--;
    $("timer").text(answerTimer);
    if (answerTimer === 0) {
        clearTimeout(timer);
        showQuestion();
    };
}, 1000);

// If question is answered before timer reaches zero, the answer page is displayed and user gets question right

// Once the user has answered all questions a final page is displayed