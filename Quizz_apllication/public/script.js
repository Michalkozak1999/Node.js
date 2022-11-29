const qestion = document.querySelector('#qestion')




const answer1 = document.querySelector('#answer1')
const answer2 = document.querySelector('#answer2')
const answer3 = document.querySelector('#answer3')
const answer4 = document.querySelector('#answer4')

function fillQestionElements(data) {
    qestion.innerText = data.qestion
    for (const i in data.answers) {
        const answerEl = document.querySelector(`#answer${Number(i) + 1}`)

        answerEl.innerText = data.answers[i];

    }
    // answer1.innerText = data.answers[0]
    // answer2.innerText = data.answers[1]
    // answer3.innerText = data.answers[2]
    // answer4.innerText = data.answers[3]

}

const gameBoard = document.querySelector('#game-board')
const h2 = document.querySelector("h2");
function showNextQestion() {
    fetch('/qestion', {
        method: "GET"
    }).then(res => res.json()).then(data => {
        if (data.winner === true) {
            gameBoard.style.display = "none"
            h2.innerText = "WYGRAŁEŚ"
            return;
        }

        if (data.loser === true) {
            gameBoard.style.display = "none"
            h2.innerText = "Nie Pykło"
            return;
        }

        fillQestionElements(data)
    })


}

showNextQestion()


const goodAnswersSpan = document.querySelector("#good-answers")
function handleAnswerFeedback(data) {
    goodAnswersSpan.innerText = data.goodAnswers;
    showNextQestion()
}

function sendAnswer(answerindex) {
    fetch(`/answer/${answerindex}`, {
        method: "POST"
    }).then(res => res.json()).then(data => {
        handleAnswerFeedback(data)
    })
}

const buttons = document.querySelectorAll(".answe-btn")

for (const button of buttons) {
    button.addEventListener("click", (event) => {
        const answerIndex = event.target.dataset.answer;
        sendAnswer(answerIndex);
    })
}

function callToAFriend() {
    fetch(`/help/friend`, {
        method: "GET"
    }).then(res => res.json()).then(data => {
        console.log(data);
    })
}

document.querySelector("#callToAFriend").addEventListener("click", callToAFriend)