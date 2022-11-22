import request from "request"
import fs from 'fs'
///http://api.nbp.pl/api/exchangerates/rates/a/${code}/


const validCodes = ["usd", "eur", "gbp", "chf"]

const code = process.argv[2]

console.log(code)

const isValid = validCodes.find(currency => currency === code) ? true : false;
console.log(isValid)

const url = `http://api.nbp.pl/api/exchangerates/rates/a/${code}/?format=json`

request(url, { json: true }, (err, res, body) => {
    if(err){
        return console.log("bład", err)
    }
    if(res.statusCode !== 200){
        return console.log("coś nie tak poszlo, sprawdz url")
    }
    const message = `średnia cena ${body.currency} w dniu ${body.rates[0].effectiveDate} wynosi ${body.rates[0].mid} złotych`

    fs.appendFile('curriences.txt', message + '\n', (err)=>{
        console.log("wynik dodany")
    })
    console.log(message)
})