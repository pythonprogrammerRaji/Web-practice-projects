
// Write the quiz question and answer using create one variable that is object 
const questions = [
    {
        question:"HTML Stands for ____",
        answers : [
            {text:" HyperText Markup Language", correct:true},
            {text:" HyperText Markup Link", correct:false},
            {text:" Holistick Technical Method Library", correct:false},
            {text:" HyperText Technical Language", correct:false},

        ]

    },

    {
        question: "HTML was first proposed in the year____",
        answers: [
            {text:" 1985", correct:false},
            {text:" 1990", correct:true},
            {text:" 1995", correct:false},
            {text:" 2000", correct:false},

        ]
    },

    {
        question: "HTML program is saved by using the _____ extension",
        answers: [
            {text:" .ht", correct:false},
            {text:" .hml", correct:false},
            {text:" .html", correct:true},
            {text:" htlm", correct:false},

        ]
    },

    {
        question: " What type of language in HTML ?",
        answers: [
            {text:" Scripting Language", correct:false},
            {text:" Markup Link", correct:true},
            {text:" Network Protocol", correct:false},
            {text:" Programming Language", correct:false},

        ]
    },

    {
        question: "HTML user _____?",
        answers: [
            {text:" Predefined tags", correct:false},
            {text:" User-defined tags", correct:false},
            {text:" Fixed tags defined by the language", correct:true},
            {text:" tags for link only", correct:false},

        ]
    }


];

// call the html id in Javascript

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");


// create the variable 
// Before start the quiz question and score will be 0

let currentQuestionIndex = 0;       // in question first question index number is 0
let score = 0;        //   Score is also 0


// Now we are start the quiz

function startQuiz(){
    currentQuestionIndex = 0;       //first question 
    score = 0;                      //score
    nextButton.innerHTML = "NEXT";        
    showQuestion();               // create one function to display the question and answer
}

// Here we are write the some code to display question and answer inside   this function

function showQuestion(){

    // This is to remove the html answer button 
    resetAnswer();

    // this is for display the question
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;


    // this is for display the answer
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");           //<button class="btn"></button>
        answerButtons.appendChild(button);
        // now we are check the dataset is correct or not
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
            button.addEventListener("click", selectAnswer)  // here call the one function
        
        

    });
}

// Here remove all html answer button in the web browser
function resetAnswer(){
    nextButton.style.display = "none";  //here next button not display
    while(answerButtons.firstChild){      //  here first firstChild is html answer buttons
        answerButtons.removeChild(answerButtons.firstChild)
    }
}




 // Here we select correct answer 
function selectAnswer(e){
    let selectBtn = e.target;        // e is one parameter that one target the correct button
    let isCorrect = selectBtn.dataset.correct === "true"; // in dataset answer will be correct the backGround color will be green
    if(isCorrect){
        selectBtn.classList.add("correct");
        // we are write the css code to change the backGround color
        score++;       // Incase answer is correct score will be increase
    }
    //in dataset answer will be not correct the backGround color will be red
    else{
        selectBtn.classList.add("incorrect"); // we are write the css code to change the backGround color
    }

    // here to take the array to write the some code
    // if selected one button the answer will be correct add backGround color green and another one button not selected  (disabled)
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true; // another one button not selected
    })
    nextButton.style.display = "block"; // next button will be display to move the next question

}

// in button give the one event click when click the answer to perform this function handleButton();
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleButton();
    }
    // start the quiz in the starting
    else {
        startQuiz();
    }
})


// int the function we will move the next questions till all question completed
function handleButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    // display the score
    else {
        scoreShow()
    }
}

// To display the score and restart the quiz again
function scoreShow(){
    resetAnswer();
    questionElement.innerHTML = `Your score is ${score} out of ${questions.length}...!`;
    nextButton.innerHTML = `Play Again`;
    nextButton.style.display = "block"
}

startQuiz();