const fs = require('fs')




ACCESS
fs.access('./names.txt', fs.constants.F_OK, (err) => {
    console.log(err ? "plik nie istnieje" : "plik istnieje")
})


fs.access('./zablokowany.txt', fs.constants.W_OK, (err) => {
    console.log(err ? "plik nie można zapisywać" : "plik można zapisywać")
})


RENAME

fs.rename("names.txt", 'imiona.txt', (err) => {
if(err) return console.log(err);
    console.log("nazwa zmieniona")

})

try {
fs.renameSync("imiona.txt", "names.txt")
} catch (err){
    console.log(err)
}


READDIR

console.log(fs.readdirSync('./'))

fs.readdir('./', (err, files) => {
    if (err) return console.log("blad", err);
    console.log("zawartość", files)
})