// Task N1
const button = document.createElement("button");
const div1 = document.createElement("div");
const buttonText = document.createTextNode("Hide Div");
const divText = document.createTextNode("Please don't hide me!");
document.body.append(button, div1);

button.setAttribute("id", "myBtn");
button.append(buttonText);
div1.setAttribute("id", "myDiv");
div1.append(divText);
button.addEventListener("click", () => (div1.style.display = "none"));

// Task N2
const div2 = document.createElement("div");
const h2 = document.createElement("h2");
const a = document.createElement("a");

div2.setAttribute("id", "card");
div2.append(h2, a);

h2.append(document.createTextNode("Gandalf"));

a.setAttribute("href", "#");
a.append(document.createTextNode("Go to profile"));

document.body.append(div2);

// Task N3

const scoreboard = document.createElement("h1");
scoreboard.append(document.createTextNode("My Score: 0"));
document.body.append(scoreboard);

const questions = [
  "20 + 10 / 2 = ?",
  "Which of these is not a primitive type?",
  "What does DOM stand for?",
];

const answers = [
  [30, 25, 20, 15],
  ["boolean", "symbol", "null", "object"],
  [
    "Dorm Outside Madrid",
    "Document Online Markup",
    "Document Object Model",
    "Document Order Modal",
  ],
];

const updateScoreBoard = (clickedElement) => {
  clickedElement.style.background = "green";
  scoreboard.innerText =
    scoreboard.innerText.slice(0, -1) + (+scoreboard.innerText.slice(-1) + 1);
};

const calculateScore = (e) => {
  const clickedElement = e.target;

  switch (clickedElement.innerText) {
    case "25":
      updateScoreBoard(clickedElement);
      break;
    case "object":
      updateScoreBoard(clickedElement);
      break;
    case "Document Object Model":
      updateScoreBoard(clickedElement);
      break;
    default:
      e.target.style.background !== "red"
        ? (e.target.style.background = "red")
        : (e.target.style.background = "white");
      break;
  }
};

for (let i = 0; i < questions.length; i++) {
  const div3 = document.createElement("div");
  const h1 = document.createElement("h1");
  h1.append(document.createTextNode(questions[i]));
  div3.append(h1);
  const answerButtons = [];

  for (const answer of answers[i]) {
    const quizBtn = document.createElement("button");
    answerButtons.push(quizBtn);
    quizBtn.append(document.createTextNode(answer));
    quizBtn.addEventListener("click", (e) => calculateScore(e, i));
    div3.append(quizBtn);
  }

  answerButtons.forEach((btn) =>
    btn.addEventListener("click", () =>
      answerButtons.forEach((btn) => (btn.disabled = true))
    )
  );

  document.body.append(div3);
}
