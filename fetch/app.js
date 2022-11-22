import fetch from 'node-fetch'

// jak ustalić co pisaliśmy

// console.log(process.argv)


// const year = process.argv[2] || Math.floor(Math.random() * 2020)
// console.log(year)

// fetch(`http://numbersapi.com/${year}/year?json`)
//     .then(response => {
//         return (
//             console.log(response.status),
//             response.json()  //musimy zwracać json
//         )

//     })
//     .then(data => console.log(data))
//     .catch(error => console.log("errorrr", error))



// WYKONANIE W INNY SPOSÓB


//http://numbersapi.com/${number}/${type}?json

console.log(process.argv)


const arg = process.argv[2];
let type = ""

if (arg.indexOf("--year") === 0) {
    console.log("szukamy roku")
    type = "year"
} else if (arg.indexOf("--math") === 0) {
    console.log("szukamy infomracji  o liczbie")
    type = "math"
} else if (arg.indexOf("--trivia") === 0) {
    console.log("szukamy ciekawostki")
    type = "trivia"
}


const equalSig = arg.search("=")
console.log(equalSig)
if (equalSig === -1) {
    console.log("nie wpisałes liczby")
}


const number = arg.slice(equalSig + 1) || 1;
console.log(number)

// if (number === "" || isNaN(Number(number))) {
//     console.log("to nie jest liczba")
//     process.exit()
// }


fetch(`http://numbersapi.com/${number}/${type}?json`)
    .then(responese => {
        if (responese.ok) {
            return (
                responese.json()
            )
        } else {
            throw new Error("ooo coś nie tak: " + responese.status)
        }

    })
    .then(data => {
        return (
            console.log(data.text)
        )
    })
    .catch(err => console.log("bład", err))