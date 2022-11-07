// modół - klecek niezalezny który można połączyć '\

const http = require('http'); // metoda slużąca do zaimportowania modułu 


const server = http.createServer((request, response) => {
    console.log(request.url)
    response.writeHead(200, { 'Content-Type': 'text/html' })
    response.end('<h1> Hello Node !</h1>')
})

server.listen(5500, '127.0.0.1', () => console.log("serwer wystartował"))