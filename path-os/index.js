const path = require("path")

const pathToFile = path.join(__dirname, "index.js");
console.log(pathToFile)

const pathTOfile2 = __dirname + '\\' + 'index.js'
console.log(pathTOfile2)


const anotherPath = path.join('/users/pl', 'active', 'user.json');
console.log(anotherPath)


const parse = path.parse(__filename)
console.log(parse)


const parse2 = path.parse(path.join(__dirname, 'index.js'))
console.log(parse2)


console.log(path.extname("dsasdsadas.js"))

console.log(path.isAbsolute('./file.js'))
console.log(path.isAbsolute('/file.js')) //ścieżka absolutna

const os = require('os')


const uptime = os.uptime()
console.log(uptime)


console.log(os.homedir())