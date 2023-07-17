const quizData = [
    {
        question: "How old ar you?",
        a:"1",
        b:"3",
        c:"6",
        d:"7",
        correct:"c",
    },
    {
        question: "",
        a:"",
        b:"",
        c:"",
        d:"",
        correct:"",
    },
    {
        question: "",
        a:"",
        b:"",
        c:"",
        d:"",
        correct:"",
    },
    {
        question: "",
        a:"",
        b:"",
        c:"",
        d:"",
        correct:"",
    },
    {
        question: "",
        a:"",
        b:"",
        c:"",
        d:"",
        correct:"",
    },
];
const questionE1 =document.getElementById('question')
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById("submit")

let currentQuiz = 0;

let score = 0;

loadQuiz();


function loadQuiz(){
    const currentQuizData = quizData [currentQuiz];

    questionE1.innerText =currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    // currentQuestion++;
}

function getSelected(){
    const answerEls = document.querySelectorAll(".answer");
    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            return answerEl.id;
        }
    })
    

}


submitBtn.addEventListener("click", () => {
    currentQuiz++;

    loadQuiz();

})