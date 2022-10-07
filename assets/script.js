var quizQuestionsContainer = document.querySelector("#quiz"); //point to our div with the quiz questions
var resultsPage = document.querySelector("#results-page");//point to our results page form
var restartBttn = document.querySelector("#restart-game");//point to our reset game button
var submitBttn = document.querySelector("#submit-score");//point to our submit initials button
var question1 = document.querySelector("#question1"); //point to our first question
var question2 = document.querySelector("#question2"); //point to our second question
var question3 = document.querySelector("#question3"); //point to our third question

var q1a1Bttn = document.querySelector("#q1a1");//point to first button in first question
var q1a2Bttn = document.querySelector("#q1a2"); //point to second button in first question

var q2a1Bttn = document.querySelector("#q2a1");//point to first button in second question
var q2a2Bttn = document.querySelector("#q2a2");//point to second button in second question

var q3a1Bttn = document.querySelector("#q3a1");//point to first button in third question
var q3a2Bttn = document.querySelector("#q3a2");//point to second button in third question

var initialsInput = document.querySelector("#input"); //points to our input field
var displayScore = document.querySelector("#score"); //points to our display score paragraph


//timer
var displayTimer = document.querySelector("#timer");
var secondsLeft = 60;
var paused = false;

//quiz logic
q1a1Bttn.addEventListener("click", function(){ //correct answer
    question1.classList.replace('active-question', 'not-active');
    question2.classList.replace('not-active', 'active-question');
})
q1a2Bttn.addEventListener("click", function(){
    deductTime();
    question1.classList.replace('active-question', 'not-active');
    question2.classList.replace('not-active', 'active-question');
})


q2a1Bttn.addEventListener("click",function(){
    deductTime();
    question2.classList.replace('active-question', 'not-active');
    question3.classList.replace('not-active', 'active-question');
})
q2a2Bttn.addEventListener("click", function(){ //correct answer
    question2.classList.replace('active-question', 'not-active');
    question3.classList.replace('not-active', 'active-question');
})

q3a1Bttn.addEventListener("click", function(){
    deductTime();
    question3.classList.replace('active-question', 'not-active');
    resultsPage.classList.replace('not-active', 'results');
    paused = true;
})
q3a2Bttn.addEventListener("click", function(){
    question3.classList.replace('active-question', 'not-active');
    resultsPage.classList.replace('not-active', 'results');
    paused = true;
})







restartBttn.addEventListener("click", function(){
    resultsPage.classList.replace('results', 'not-active');
    question1.classList.replace('not-active', 'active-question');
    secondsLeft = 60;
    paused = false;
})

submitBttn.addEventListener("click", function(){
    displayScore.textContent = "Player: " + initialsInput.value;
})

initialsInput.addEventListener("keydown", function(event){
    var key = event.key;
    if (key === "Enter"){
        event.preventDefault();
        displayScore.textContent = "Player: " + initialsInput.value;
    }
})


//timer
function setTime(){
    var timeInterval = setInterval(function(){

        if (paused === false){
        secondsLeft--;
        displayTimer.textContent = secondsLeft;
        }
        

        if(secondsLeft === 0){
            clearInterval(timeInterval);
        }
    },1000);
}

setTime();

function deductTime(){
    secondsLeft -= 3;
}