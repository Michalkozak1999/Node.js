

import http from "http"
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const port = process.env.PORT || 3000;
const users = [
    { name: "adam", id: 1 },
    { name: "adam2", id: 2 },
]

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    switch (req.url) {
        case '/':
            fs.readFile(path.join(__dirname, "index.html"), (err, page) => {

                if (err) res.end('<h1>nie udalo sie pobrac pliku</h1>')
                else res.end(page)
            })
            // res.end("strona Główna");
            break;
        case '/users':
            fs.readFile(path.join(__dirname, "users.html"), (err, page) => {

                if (err) res.end('<h1>nie udalo sie pobrac pliku</h1>')
                else res.end(page)
            })

            break;
        case '/api.users':
            res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' }); // nie bylo potrzebne w tym wypadku
            const userJSON = JSON.stringify(users);  // pares z JSON na obiekt
            res.end(userJSON);
            break;
        case '/code.js':
           
            res.writeHead(200, { 'Content-Type': 'application/javascript; charset=utf-8' })
            fs.readFile(path.join(__dirname, "script.js"), (err, page) => {

                if (err) res.end('<h1>nie udalo sie pobrac pliku</h1>')
                else res.end(page)
            })
            break;
        default:
            res.end('<h1>Strona nie istnieje</h1>')
    }

}).listen(port, '127.0.0.1', () => {
    console.log(`Nasz server nasłuchuje na porcie ${port}`)
})