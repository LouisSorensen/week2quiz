const questions = [
    {
        question: "Which country does NOT share a land border with Spain?",
        answers: [
            { text: "Portugal", correct: false},
            { text: "Andorra", correct: false},
            { text: "Italy", correct: true},
            { text: "France", correct: false},
        ] 
    },
    {
        question: "Which country does the Rhine river NOT run through?",
        answers: [
            { text: "Switzerland", correct: false},
            { text: "Germany", correct: false},
            { text: "Poland", correct: true},
            { text: "Austria", correct: false},
        ]  
    },
    {
        question: "Where is the Hagia Sophia?",
        answers: [
            { text: "Turkey", correct: true},
            { text: "Spain", correct: false},
            { text: "Italy", correct: false},
            { text: "Croatia", correct: false},
        ] 
    },
    {
        question: "In which country would you find a Pastel de Nata?",
        answers: [
            { text: "Portugal", correct: true},
            { text: "Spain", correct: false},
            { text: "France", correct: false},
            { text: "Germany", correct: false},
        ] 
    },
    {
        question: "Which country does NOT share a land border with Germany?",
        answers: [
            { text: "France", correct: false},
            { text: "Poland", correct: false},
            { text: "Austria", correct: false},
            { text: "Slovakia", correct: true},
        ] 
    },
    {
        question: "Which two countries are connected by the Øresund Bridge?",
        answers: [
            { text: "Denmark and Sweden", correct: true},
            { text: "Turkey and Greece", correct: false},
            { text: "Norway and Denmark", correct: false},
            { text: "Sweden and Norway", correct: false},
        ] 
    },
    {
        question: "Which country recognises German, French and Italian as national languages?",
        answers: [
            { text: "Austria", correct: false},
            { text: "Switzerland", correct: true},
            { text: "Germany", correct: false},
            { text: "Italy", correct: false},
        ] 
    },
    {
        question: "Which country does NOT share a land border with Greece?",
        answers: [
            { text: "Albania", correct: false},
            { text: "Turkey", correct: false},
            { text: "Bulgaria", correct: false},
            { text: "Romania", correct: true},
        ] 
    },
    {
        question: "Where is Mount Vesuvius?",
        answers: [
            { text: "Malta", correct: false},
            { text: "Greece", correct: false},
            { text: "Croatia", correct: false},
            { text: "Italy", correct: true},
        ] 
    },
    {
        question: "Which country shares land borders with Austria, Slovenia, Croatia, Serbia, Romania, Ukraine and Slovakia?",
        answers: [
            { text: "Hungary", correct: true},
            { text: "Moldova", correct: false},
            { text: "Montenegro", correct: false},
            { text: "Switzerland", correct: false},
        ] 
    },
    {
        question: "Vilnius is the capital of which country?",
        answers: [
            { text: "Belarus", correct: false},
            { text: "Latvia", correct: false},
            { text: "Estonia", correct: false},
            { text: "Lithuania", correct: true},
        ] 
    },
    {
        question: "Where is Neuschwanstein Castle?",
        answers: [
            { text: "Switzerland", correct: false},
            { text: "France", correct: false},
            { text: "Germany", correct: true},
            { text: "Austria", correct: false},
        ] 
    },
    {
        question: "Chișinău is the capital of which country?",
        answers: [
            { text: "Albania", correct: false},
            { text: "Moldova", correct: true},
            { text: "North Macedonia", correct: false},
            { text: "Romania", correct: false},
        ] 
    },
    {
        question: "The capital city of which country is in both Europe and Asia?",
        answers: [
            { text: "Turkey (Istanbul)", correct: true},
            { text: "Georgia (Tbilisi)", correct: false},
            { text: "Azerbaijan (Baku)", correct: false},
            { text: "Poland (Warsaw)", correct: false},
        ] 
    },
    {
        question: "Which country does NOT have direct acccess to the Black Sea?",
        answers: [
            { text: "Georgia", correct: false},
            { text: "Turkey", correct: false},
            { text: "Armenia", correct: true},
            { text: "Bulgaria", correct: false},
        ] 
    },
    {
        question: "San Marino is surrounded by which country?",
        answers: [
            { text: "Switzerland", correct: false},
            { text: "Croatia", correct: false},
            { text: "Austria", correct: false},
            { text: "Italy", correct: true},
        ] 
    },

];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}, Good Job!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();