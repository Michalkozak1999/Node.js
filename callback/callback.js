const add = (x, y) => x + y;
const division = (number1, number2) => number1 / number2


const math = (a, b, callback) => {
    console.log(callback(a, b))
};

math(3, 4, add)
math(4, 2, division)


setTimeout(() => console.log("co u cbiebie"), 2000)
console.log("hej!")

const fs = require("fs")
fs.readFile('./text.txt', 'utf8', (err, file) => console.log(file))
console.log("po odczytaniu")