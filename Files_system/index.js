const fs = require('fs')




// ACCESS
// fs.access('./names.txt', fs.constants.F_OK, (err) => {
//     console.log(err ? "plik nie istnieje" : "plik istnieje")
// })


// fs.access('./zablokowany.txt', fs.constants.W_OK, (err) => {
//     console.log(err ? "plik nie można zapisywać" : "plik można zapisywać")
// })


// // RENAME

// fs.rename("names.txt", 'imiona.txt', (err) => {
// if(err) return console.log(err);
//     console.log("nazwa zmieniona")

// })

// try {
// fs.renameSync("imiona.txt", "names.txt")
// } catch (err){
//     console.log(err)
// }


// // READDIR//

// console.log(fs.readdirSync('./'))

// fs.readdir('./', (err, files) => {
//     if (err) return console.log("blad", err);
//     console.log("zawartość", files)
// })


//ReadFile

// fs.readFile("names.txt", 'utf8', (err, data) => {
//     if(err) throw Error(err)
//     console.log(data)
// })

// try{
// const names = fs.readFileSync('names.txt', 'utf8')
// console.log(names)
// } catch (err){
//     console.log(err)
// }

/// WriteFile
// fs.readFile("names.txt", "utf8", (err, data) => {
//     if (err) return console.log("nie udało się")

//     fs.writeFile("uesrs.txt", "Nowy Plik", (err) => {
//         if (err) {
//             console.log(err)
//         } else {
//             console.log("udało się zapisac w pliku")
//         }
//     })
// })


const names = "Jen, Jerzy"
fs.readFile('names.txt', (err, data) => {
    console.log(data)

    fs.appendFile("uesrs.txt", data, (err) => {
        if (err) console.log(err)
        else console.log("udało się zapisać w pliku ")
    })
})