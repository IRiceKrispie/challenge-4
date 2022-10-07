var quizCard = document.querySelector(".quiz-card"); //point to our section with the quiz card class
var quizQuestion = document.querySelector("#quiz"); //point to our div with the quiz question
var quizButton = document.createElement("button"); //create button list element
var quizButton2 = document.createElement("button"); //create 2nd button list element
var quizButton3 = document.createElement("button"); //create 3rd button list element
var form = document.querySelector(".results"); //point to our results form
var submitBttn = document.querySelector("#submit-score"); //point to our submit button
var initialsInput = document.querySelector("#input"); //points to our input field
var restartBttn = document.querySelector("#restart-game");
var score = 0;
var totalTime = 200;

function question1(){
    quizQuestion.textContent = "What is 2 + 2?"; //display the question

    quizButton.textContent = "3";
    quizQuestion.appendChild(quizButton);

    quizButton2.textContent = "5";
    quizQuestion.appendChild(quizButton2);

    quizButton3.textContent = "4";
    quizQuestion.appendChild(quizButton3);

    console.log(quizQuestion);
    //user selects wrong answer
    quizButton.addEventListener("click", function(){
        quizQuestion.removeChild(quizButton);
        quizQuestion.removeChild(quizButton2);
        quizQuestion.removeChild(quizButton3);
        quizQuestion.textContent = "";
        question2();
    })

    quizButton2.addEventListener("click", function(){
        quizQuestion.removeChild(quizButton);
        quizQuestion.removeChild(quizButton2);
        quizQuestion.removeChild(quizButton3);
        quizQuestion.textContent = "";
        question2();
    })

    //user selects correct answer
    quizButton3.addEventListener("click", function(){
        if(quizButton3.textContent === "4"){
            score += 1;
        }
        
        quizQuestion.removeChild(quizButton);
        quizQuestion.removeChild(quizButton2);
        quizQuestion.removeChild(quizButton3);
        quizQuestion.textContent = "";
        question2();
    })
}

function question2(){
    quizQuestion.textContent = "What is 3 + 3?"; //display the question

    quizButton.textContent = "3";
    quizQuestion.appendChild(quizButton);

    quizButton2.textContent = "5";
    quizQuestion.appendChild(quizButton2);

    quizButton3.textContent = "4";
    quizQuestion.appendChild(quizButton3);

    console.log(quizQuestion);
    //user selects wrong answer
    quizButton.addEventListener("click", function(){
        quizQuestion.removeChild(quizButton);
        quizQuestion.removeChild(quizButton2);
        quizQuestion.removeChild(quizButton3);
        quizQuestion.textContent = "";
        question3();
    })

    quizButton2.addEventListener("click", function(){
        quizQuestion.removeChild(quizButton);
        quizQuestion.removeChild(quizButton2);
        quizQuestion.removeChild(quizButton3);
        quizQuestion.textContent = "";
        question3();
    })

    //user selects correct answer
    quizButton3.addEventListener("click", function(){
        if(quizButton3.textContent === "4"){
            score += 1;
        }
        
        quizQuestion.removeChild(quizButton);
        quizQuestion.removeChild(quizButton2);
        quizQuestion.removeChild(quizButton3);
        quizQuestion.textContent = "";
        question3();
    })
}

function question3(){
    console.log(quizQuestion.innerHTML);
    quizQuestion.textContent = "What is 5+5?"; //display the question

    quizButton.textContent = "3";
    quizQuestion.appendChild(quizButton);

    quizButton2.textContent = "5";
    quizQuestion.appendChild(quizButton2);

    quizButton3.textContent = "4";
    quizQuestion.appendChild(quizButton3);

    console.log(quizQuestion);
    //user selects wrong answer
    quizButton.addEventListener("click", function(){
        quizQuestion.removeChild(quizButton);
        quizQuestion.removeChild(quizButton2);
        quizQuestion.removeChild(quizButton3);
        quizQuestion.textContent = "";
    })

    quizButton2.addEventListener("click", function(){
        quizQuestion.removeChild(quizButton);
        quizQuestion.removeChild(quizButton2);
        quizQuestion.removeChild(quizButton3);
        quizQuestion.textContent = "";
    })

    //user selects correct answer
    quizButton3.addEventListener("click", function(){
        if(quizButton3.textContent === "4"){
            score += 1;
        }
        
        quizQuestion.removeChild(quizButton);
        quizQuestion.removeChild(quizButton2);
        quizQuestion.removeChild(quizButton3);
        quizQuestion.textContent = "";
    })
}






function results(){
    form.style.display = 'flex';
    var displayScore = document.querySelector("#score");
    displayScore.textContent = "Input Initials";
    submitBttn.addEventListener("click", function(){
        displayScore.textContent = "Player: " + initialsInput.value + " Score: " + score ;
    })

    initialsInput.addEventListener("keydown", function(event){
        var key = event.key;
        if (key === "Enter"){
            event.preventDefault();
            displayScore.textContent = "Player: " + initialsInput.value + " Score: " + score ;
        }
    })

    restartBttn.addEventListener("click", function(event){
        score = 0;
        form.style.display = 'none';
        buildQuiz();
    })
}


function buildQuiz(){
    question1();
    //results();
}

buildQuiz();