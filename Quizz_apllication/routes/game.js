
function gameRoutes(app) {
    let goodAnswers = 0;
    let isGameOver = false;
    let callToAFriend = false;
    let qestionToTheCrowdUsed = false;
    let halfOnHalfUsed = false;

    const qestions = [
        {
            qestion: "Jaki jest najlepszy język programowanie według mnie?",
            answers: ['C++', "Fortran", "JavaScript", "java"],
            correctAnswer: 2,
        },
        {
            qestion: "Czy ten kurs jest Fajny?",
            answers: ['Nie wiem', "Oczywiście że tak", "Jest najlepszy", "XD"],
            correctAnswer: 2,
        },
        {
            qestion: "Czy chcesz zjeść pizze?",
            answers: ['Nawet dwie!', "Jestem na diecie", "Wolę brokuły", "nie wiem"],
            correctAnswer: 2,
        },
    ]

    app.get('/qestion', (req, res) => {
        if (goodAnswers === qestions.length) {
            res.json({
                winner: true,
            })
        } else if (isGameOver) {
            res.json({
                loser: true,
            })
        } else {
            const nextQestion = qestions[goodAnswers];
            const { qestion, answers } = nextQestion;

            res.json({
                qestion, answers
            })

        }
    })


    app.post('/answer/:index', (req, res) => {

        if (isGameOver) {
            res.json({
                loser: true
            })
        }


        const { index } = req.params
        console.log(index)

        const qestion = qestions[goodAnswers];


        const isGoodAnswer = qestion.correctAnswer === index * 1

        if (isGoodAnswer) {
            goodAnswers++;
        } else {
            isGameOver = true;
        }

        res.json({
            correct: isGoodAnswer,
            goodAnswers,
        });



        // res.json({
        //     correct: qestion.correctAnswer === index * 1 ? true : false
        // })

        // if (qestion.correctAnswer === index * 1) {
        //     res.json({
        //         correct: true
        //     })
        // } else {
        //     res.json({
        //         correct: false
        //     })
        // }
        // console.log(qestion.correctAnswer === index * 1)
    })



    app.get('/help/friend', (req, res) => {
        if (callToAFriend) {
            return res.json({
                text: "To koło ratunkowe było już wykorzystane"
            })
        }
        const qestion = qestions[goodAnswers];
        const doesFriendKnowAnswer = Math.random() < 0.5;
        res.json({
            text: doesFriendKnowAnswer ? `Hmmm wydaje mi się że odpowiedz to: ${qestions.answers[qestion.correctAnswer]}` : "Hmm no nie wiem"
        })
    })
}

export default gameRoutes

