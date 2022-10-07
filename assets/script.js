var quizQuestionsContainer = document.querySelector("#quiz"); //point to our div with the quiz questions
var resultsPage = document.querySelector("#results-page");//point to our results page form
var restartBttn = document.querySelector("#restart-game");//point to our reset game button
var submitBttn = document.querySelector("#submit-score");//point to our submit initials button
var question1 = document.querySelector("#question1"); //point to our first question
var question2 = document.querySelector("#question2"); //point to our second question
var question3 = document.querySelector("#question3"); //point to our third question
var score = 0;

var q1a1Bttn = document.querySelector("#q1a1");//point to first button in first question
var q1a2Bttn = document.querySelector("#q1a2"); //point to second button in first question
var q1a3Bttn = document.querySelector("#q1a3"); //point to third button is first question
var q1a4Bttn = document.querySelector("#q1a4");//point to fourth button in first question

var q2a1Bttn = document.querySelector("#q2a1");//point to first button in second question
var q2a2Bttn = document.querySelector("#q2a2");//point to second button in second question
var q2a3Bttn = document.querySelector("#q2a3");//point to second button in second question
var q2a4Bttn = document.querySelector("#q2a4");//point to second button in second question

var q3a1Bttn = document.querySelector("#q3a1");//point to first button in third question
var q3a2Bttn = document.querySelector("#q3a2");//point to second button in third question
var q3a3Bttn = document.querySelector("#q3a3");//point to second button in third question
var q3a4Bttn = document.querySelector("#q3a4");//point to second button in third question

var initialsInput = document.querySelector("#input"); //points to our input field
var displayScore = document.querySelector("#score"); //points to our display score unordered list


//timer
var displayTimer = document.querySelector("#timer");
var secondsLeft = 60;
var paused = false;

//quiz logic
//question1
q1a1Bttn.addEventListener("click", function(){ //correct answer
    score++;
    question1.classList.replace('active-question', 'not-active');
    question2.classList.replace('not-active', 'active-question');
})
q1a2Bttn.addEventListener("click", function(){
    deductTime();
    question1.classList.replace('active-question', 'not-active');
    question2.classList.replace('not-active', 'active-question');
})
q1a3Bttn.addEventListener("click", function(){
    deductTime();
    question1.classList.replace('active-question', 'not-active');
    question2.classList.replace('not-active', 'active-question');
})
q1a4Bttn.addEventListener("click", function(){
    deductTime();
    question1.classList.replace('active-question', 'not-active');
    question2.classList.replace('not-active', 'active-question');
})

//question 2
q2a1Bttn.addEventListener("click",function(){
    deductTime();
    question2.classList.replace('active-question', 'not-active');
    question3.classList.replace('not-active', 'active-question');
})
q2a2Bttn.addEventListener("click", function(){ //correct answer
    score++;
    question2.classList.replace('active-question', 'not-active');
    question3.classList.replace('not-active', 'active-question');
})
q2a3Bttn.addEventListener("click",function(){
    deductTime();
    question2.classList.replace('active-question', 'not-active');
    question3.classList.replace('not-active', 'active-question');
})
q2a4Bttn.addEventListener("click",function(){
    deductTime();
    question2.classList.replace('active-question', 'not-active');
    question3.classList.replace('not-active', 'active-question');
})

//question3
q3a1Bttn.addEventListener("click", function(){
    deductTime();
    question3.classList.replace('active-question', 'not-active');
    resultsPage.classList.replace('not-active', 'results');
    paused = true;
})
q3a2Bttn.addEventListener("click", function(){
    deductTime();
    question3.classList.replace('active-question', 'not-active');
    resultsPage.classList.replace('not-active', 'results');
    paused = true;
})
q3a3Bttn.addEventListener("click", function(){ //correct answer
    score++;
    question3.classList.replace('active-question', 'not-active');
    resultsPage.classList.replace('not-active', 'results');
    paused = true;
})
q3a4Bttn.addEventListener("click", function(){
    deductTime();
    question3.classList.replace('active-question', 'not-active');
    resultsPage.classList.replace('not-active', 'results');
    paused = true;
})






restartBttn.addEventListener("click", function(){
    resultsPage.classList.replace('results', 'not-active');
    question1.classList.replace('not-active', 'active-question');
    submitBttn.disabled = false;
    secondsLeft = 60;
    score = 0;
    paused = false;
})

submitBttn.addEventListener("click", function(){
    var listEl = document.createElement("li");
    listEl.textContent = "Player: " + initialsInput.value + "\nScore: " + score;
    displayScore.appendChild(listEl);
    initialsInput.value="";
    submitBttn.disabled = true;
})

initialsInput.addEventListener("keydown", function(event){
    var key = event.key;
    if (key === "Enter" && submitBttn.disabled === false){
        event.preventDefault();
        var listEl = document.createElement("li");
        listEl.textContent = "Player: " + initialsInput.value + "\nScore: " + score;
        displayScore.appendChild(listEl);
        initialsInput.value="";
        submitBttn.disabled = true;
    }
    else if (key === "Enter" && submitBttn.disabled === true){
        event.preventDefault();
    }
})


//timer
function setTime(){
    var timeInterval = setInterval(function(){

        if (paused === false){
            secondsLeft--;
            displayTimer.textContent = "Time Left: " + secondsLeft;
        }
        if (paused === true){
            displayTimer.textContent = "Time Left: " + secondsLeft;
        }
        

        if(secondsLeft === 0){
            clearInterval(timeInterval);
        }
    },1000);
}

setTime(); //start timer

function deductTime(){ //deduct time if user hits wrong button
    secondsLeft -= 10;
}