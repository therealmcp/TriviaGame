// Add doc.ready from jquery
$(document).ready(function() {
    
// Global variables
var questionTimer = 30;
var answerTimer = 5;
var correctAnswers = 0;
var wrongAnswers = 0;
var correctAnswersList = [];
var wrongAnswersList = [];

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
// using slice to return a copy of answer array
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

var showQuestion = function() {
    $("#question").text(randQuestion.question);
    $("#firstChoice").attr("value", newAnswers[0]).text(newAnswers[0]);
    $("#secondChoice").attr("value", newAnswers[1]).text(newAnswers[1]);
    $("#thirdChoice").attr("value", newAnswers[2]).text(newAnswers[2]);
    $("#fourthChoice").attr("value", newAnswers[3]).text(newAnswers[3]);

    timerQ;
};

// Prevent multiple clicks
var alreadyClicked = false;

// Add event listener to buttons clicked
$(".btn").on("click", function() {
    var clicked = $(this).html();
    if (clicked === randQuestion.answers[0] && alreadyClicked != true) {
        $(this).addClass("btn-success");
        correctAnswers++;
        $("#correct").text(correctAnswers);
        alreadyClicked = true;
        setTimeout(showQuestion, 1000);
        correctAnswersList.push(randQuestion);
        questions.shift(randQuestion);
        clearTimeout(timerQ);
        timer;
    } else if (alreadyClicked != true) {
        $(this).addClass("btn-danger");
        $("#question").text("The answer was " + randQuestion.answers[0]);
        clearTimeout(timerQ);

        //what this does, finds all elements with class of button, and construct an array from them.
        let answers = Array.from($('.btn'));
        // console.log(answers);

        //loop through those elements and check to see if their innerHTML is equal to the correct answer. If we find a match, add a class.
        //make a function that resets a round and calls it here after some delay
        
        for(let idx = 0; idx < answers.length; idx++){
            if(answers[idx].innerHTML === randQuestion.answers[0]){
                answers[idx].classList.add("btn-success");
            }
        }
        wrongAnswers++;
        $("#wrong").text(wrongAnswers);
        wrongAnswersList.push(randQuestion);
        alreadyClicked = true;
        timer;
    };
});

// Timer that will count down and display time left
var timerQ = setInterval(function() {
    clearTimeout(timer);
    questionTimer--;
    $("#timer").text(questionTimer);

    // If timer reaches zero go to next question
    if (questionTimer === 0) {
        clearTimeout(timerQ);
        $("#question").text("The answer was " + randQuestion.answers[0]);

    };
}, 1000);

var timer = setInterval(function() {
    console.log("timer running");
    clearTimeout(timerQ);
    answerTimer--;
    $("#timer").text(answerTimer);
    timerCheckHandler();
}, 1000);
function timerCheckHandler(){
    if (answerTimer === 0) {
        showQuestion();
        clearInterval(timer);
        // reset game
    };
}


// Ask question and start timer when the page is loaded
showQuestion();

// If question is answered correctly before timer reaches zero reset timer

// Once the user has answered all questions a final page is displayed

});