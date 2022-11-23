// console.log(process.argv.slice(2,3))


import pareArgs from "minimist"

import handleCommand from "./handleCommand.js"

const command = pareArgs(process.argv.slice(2, 3))
delete command._
console.log(command)



handleCommand(command)