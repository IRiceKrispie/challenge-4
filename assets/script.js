var quizCard = document.querySelector(".quiz-card"); //point to our section with the quiz card class
var quizQuestion = document.querySelector("#quiz"); //point to our div with the quiz question
var quizButton = document.createElement("button"); //create button list element
var quizButton2 = document.createElement("button"); //create 2nd button list element
var quizButton3 = document.createElement("button"); //create 3rd button list element
var form = document.querySelector(".results"); //point to our results form
var submitBttn = document.querySelector("#submit-score"); //point to our submit button
var score = 0;

function question1(){
    quizQuestion.textContent = "What is 2 + 2?"; //display the question

    quizButton.textContent = "3";
    quizQuestion.appendChild(quizButton);

    quizButton2.textContent = "5";
    quizQuestion.appendChild(quizButton2);

    quizButton3.textContent = "4";
    quizQuestion.appendChild(quizButton3);
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
    quizQuestion.textContent = "When was USA founded?";
    quizButton.textContent = "2000";
    quizQuestion.appendChild(quizButton);

    quizButton2.textContent = "1776";
    quizQuestion.appendChild(quizButton2);

    quizButton3.textContent = "1875";
    quizQuestion.appendChild(quizButton3);

    quizButton.addEventListener("click", function(){
        quizQuestion.removeChild(quizButton);
        quizQuestion.removeChild(quizButton2);
        quizQuestion.removeChild(quizButton3);
        quizQuestion.textContent = "";
        question3();
    })

    quizButton2.addEventListener("click", function(){
        if(quizButton2.textContent === "1776"){
            score += 1;
        }
        quizQuestion.removeChild(quizButton);
        quizQuestion.removeChild(quizButton2);
        quizQuestion.removeChild(quizButton3);
        quizQuestion.textContent = "";
        question3();
    })

    quizButton3.addEventListener("click", function(){
        quizQuestion.removeChild(quizButton);
        quizQuestion.removeChild(quizButton2);
        quizQuestion.removeChild(quizButton3);
        quizQuestion.textContent = "";
        question3();
    })

}

function question3(){
    quizQuestion.textContent = "what is the first letter in the English Alphabet?";

    quizButton.textContent = "A";
    quizQuestion.appendChild(quizButton);

    quizButton2.textContent = "B";
    quizQuestion.appendChild(quizButton2);

    quizButton3.textContent = "C";
    quizQuestion.appendChild(quizButton3);

    quizButton.addEventListener("click", function(){
        if(quizButton.textContent === "A"){
            score += 1;
        }
        quizQuestion.removeChild(quizButton);
        quizQuestion.removeChild(quizButton2);
        quizQuestion.removeChild(quizButton3);
        quizQuestion.textContent = "";
        results();
    })

    quizButton2.addEventListener("click", function(){
        
        quizQuestion.removeChild(quizButton);
        quizQuestion.removeChild(quizButton2);
        quizQuestion.removeChild(quizButton3);
        quizQuestion.textContent = "";
        results();
    })

    quizButton3.addEventListener("click", function(){
        quizQuestion.removeChild(quizButton);
        quizQuestion.removeChild(quizButton2);
        quizQuestion.removeChild(quizButton3);
        quizQuestion.textContent = "";
        results();
    })

}

function results(){
    form.style.display = 'flex';
}


function buildQuiz(){
    //question1();
    results();
}

var init = buildQuiz();