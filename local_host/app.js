import http from "http"



// const http = require("http")

http.createServer((request, respons) => {
    respons.writeHead(200, { 'Content-Type': 'text/html' })
    respons.end('<h1>Witaj na stronie, stworzonej w Node.js!</h1>')
}).listen(3000, "127.0.0.1")