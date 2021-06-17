const quizDB = [
  {
    question: "Q1. What is the full form of HTML?",
    a: "Hello to my land",
    b: "Hey Text Markup Language",
    c: "HyperText Makeup Language",
    d: "HyperText Markup Language",
    ans: "ans4"
  },
  {
    question: "Q2. What is the full form of CSS?",
    a: "Cascading Style Sheets",
    b: "Cascading Style Sheep",
    c: "Cartoon Style Sheets",
    d: "Cascading Super Sheets",
    ans: "ans1"
  },
  {
    question: "Q3. What is the full form of HTTP?",
    a: "HyperText Transfer Product",
    b: "HyperText Test Protocol",
    c: "Hey Transfer Protocol",
    d: "HyperText Transfer Protocol",
    ans: "ans4"
  },
  {
    question: "Q4. What is the full form of JS?",
    a: "JavaScript",
    b: "JavaSuper",
    c: "JavaSubh",
    d: "JavaSchedule",
    ans: "ans1"
  }
];

const question = document.querySelector('.question');
const questionWrapper = document.querySelector('.question-wrapper');

const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');


let questionCount = 0;
let score = 0;
const loadQuestion = () => {
  const questionList = quizDB[questionCount];
  question.innerText = questionList.question;
  option1.innerText = questionList.a;
  option2.innerText = questionList.b;
  option3.innerText = questionList.c;
  option4.innerText = questionList.d;
}


loadQuestion();
//button.disabled = true;

const getCheckAnswer = () => {
  //button.disabled = false;
  let answer;
  answers.forEach((curAnsElem) => {
    if (curAnsElem.checked) {
      answer = curAnsElem.id;
    }


  });

  return answer;
};
const deselectAll = () => {
  answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click', () => {
  const checkedAnswer = getCheckAnswer();
  console.log(checkedAnswer);

  if (checkedAnswer == quizDB[questionCount].ans) {
    score++;
  };
  questionCount++;
  deselectAll();
  if (questionCount < quizDB.length) {
    loadQuestion();
  }
  else {
    question.style.display = "none";
    // option1.style.display = "none"
    // option2.style.display = "none"
    // option3.style.display = "none"
    // option4.style.display = "none"
    questionWrapper.style.display = "none";
    submit.style.display = "none";
    showScore.innerHTML = `
    <h3>You Scored ${score}/ ${quizDB.length} </h3>
    <button class = "btn" onclick = "location.reload()">Play Again</button>
    `;
    showScore.classList.remove('scoreArea');



  }
});
