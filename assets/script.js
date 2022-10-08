var quizQuestionsContainer = document.querySelector("#quiz"); //point to our div with the quiz questions
var resultsPage = document.querySelector("#results-page");//point to our results page form
var startPage = document.querySelector("#intro-page"); //point to intro page
var startBttn = document.querySelector("#start-button"); //point to our start button
var restartBttn = document.querySelector("#restart-game");//point to our reset game button
var submitBttn = document.querySelector("#submit-score");//point to our submit initials button
var question1 = document.querySelector("#question1"); //point to our first question
var question2 = document.querySelector("#question2"); //point to our second question
var question3 = document.querySelector("#question3"); //point to our third question
var question4 = document.querySelector("#question4"); //point to our fourth question
var score = 0; //variable to hold our score

var q1a1Bttn = document.querySelector("#q1a1");//point to first button in first question
var q1a2Bttn = document.querySelector("#q1a2"); //point to second button in first question
var q1a3Bttn = document.querySelector("#q1a3"); //point to third button is first question
var q1a4Bttn = document.querySelector("#q1a4");//point to fourth button in first question

var q2a1Bttn = document.querySelector("#q2a1");//point to first button in second question
var q2a2Bttn = document.querySelector("#q2a2");//point to second button in second question
var q2a3Bttn = document.querySelector("#q2a3");//point to third button in second question
var q2a4Bttn = document.querySelector("#q2a4");//point to fourth button in second question

var q3a1Bttn = document.querySelector("#q3a1");//point to first button in third question
var q3a2Bttn = document.querySelector("#q3a2");//point to second button in third question
var q3a3Bttn = document.querySelector("#q3a3");//point to third button in third question
var q3a4Bttn = document.querySelector("#q3a4");//point to fourth button in third question

var q4a1Bttn = document.querySelector("#q4a1");//point to first button in fourth question
var q4a2Bttn = document.querySelector("#q4a2");//point to second button in fourth question
var q4a3Bttn = document.querySelector("#q4a3");//point to third button in fourth question
var q4a4Bttn = document.querySelector("#q4a4");//point to fourth button in fourth question



var initialsInput = document.querySelector("#input"); //points to our input field
var displayScore = document.querySelector("#score"); //points to our display score unordered list


//timer
var displayTimer = document.querySelector("#timer"); //points to the paragraph where we want our timer
var secondsLeft = 60; //amount of time to complete the quiz
var paused = false; //set the timer to not being paused at the start

//start page logic
startBttn.addEventListener("click", function(){
    startPage.classList.replace('active-question', 'not-active');
    question1.classList.replace('not-active', 'active-question');
    setTime(); //start timer when button is hit
})


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
    question4.classList.replace('not-active', 'active-question');
    
})
q3a2Bttn.addEventListener("click", function(){
    deductTime();
    question3.classList.replace('active-question', 'not-active');
    question4.classList.replace('not-active', 'active-question');
    
})
q3a3Bttn.addEventListener("click", function(){ //correct answer
    score++;
    question3.classList.replace('active-question', 'not-active');
    question4.classList.replace('not-active', 'active-question');
    
})
q3a4Bttn.addEventListener("click", function(){
    deductTime();
    question3.classList.replace('active-question', 'not-active');
    question4.classList.replace('not-active', 'active-question');
})

//question 4
q4a1Bttn.addEventListener("click", function(){
    deductTime();
    question4.classList.replace('active-question', 'not-active');
    resultsPage.classList.replace('not-active', 'results');
    paused = true;
})
q4a2Bttn.addEventListener("click", function(){ //correct answer
    score++;
    question4.classList.replace('active-question', 'not-active');
    resultsPage.classList.replace('not-active', 'results');
    paused = true;
})
q4a3Bttn.addEventListener("click", function(){
    deductTime();
    question4.classList.replace('active-question', 'not-active');
    resultsPage.classList.replace('not-active', 'results');
    paused = true;
})
q4a4Bttn.addEventListener("click", function(){
    deductTime();
    question4.classList.replace('active-question', 'not-active');
    resultsPage.classList.replace('not-active', 'results');
    paused = true; //pause the timer on results page
})


//results page
restartBttn.addEventListener("click", function(){
    resultsPage.classList.replace('results', 'not-active');
    question1.classList.replace('not-active', 'active-question');
    displayTimer.style.color = "lavender";
    submitBttn.disabled = false;
    score = 0;
    secondsLeft = 60;
    paused = false;
})

submitBttn.addEventListener("click", function(){
    var listEl = document.createElement("li");
    listEl.textContent = "Player: " + initialsInput.value + " Score: " + score;
    displayScore.appendChild(listEl);
    initialsInput.value="";
    submitBttn.disabled = true; //disable submit button until you play again
})

initialsInput.addEventListener("keydown", function(event){
    var key = event.key;
    if (key === "Enter" && submitBttn.disabled === false){
        event.preventDefault();
        var listEl = document.createElement("li");
        listEl.textContent = "Player: " + initialsInput.value + " Score: " + score;
        displayScore.appendChild(listEl);
        initialsInput.value="";
        submitBttn.disabled = true; //disable submit button until you play again
    }
    else if (key === "Enter" && submitBttn.disabled === true){
        event.preventDefault(); //if submit button is disabled, prevent default
    }
})


//timer
function setTime(){
    
    var timeInterval = setInterval(function(){

        if (paused === false){ //if paused is false countdown and display time
            secondsLeft--;
            displayTimer.textContent = "Time Left: " + secondsLeft;
        }
        if (paused === true){ //if paused is is true display the time it was paused at
            displayTimer.textContent = "Time Left: " + secondsLeft;
        }
        

        if (secondsLeft <= 0){ //display results page if timer runs out
            question1.classList.replace('active-question', 'not-active'); //deactivate question 1
            question2.classList.replace('active-question', 'not-active'); //deactivate question 2
            question3.classList.replace('active-question', 'not-active'); //deactivate question 3
            question4.classList.replace('active-question', 'not-active'); //deactivate question 4
            resultsPage.classList.replace('not-active', 'results'); //activate results page
            displayTimer.textContent = "Out of time!";
            displayTimer.style.color = "red";
            paused = true;
        }
    },1000);
}

function deductTime(){ //deduct time if user hits wrong button
    secondsLeft -= 10;
}