import exp from "constants";
import express from "express"
import path from "path"

const app = express();




app.use(express.json())

app.post('/hellow', (req, res) => {
    const { name, surname } = req.body

    res.send("witaj" + name + " " + surname)
})








app.listen(3000, () => {
    console.log('server is listening at http://localhost:3000');
});

// app.all('/', (req) => {
//     // console.log('requ.url', req.url);
//     // console.log('requ.orginalurl', req.originalUrl);
//     // console.log('requ.path', req.path);
//     // console.log('requ.secure', req.secure);
//     // console.log('requ.protocol', req.protocol);
//     // const { name, surname } = req.query;
//     // console.log(`Hellow ` + name + '' + surname)

//     console.log(req.get("Referer"))

// });

// app.get('/', () => {
//     console.log("spis ludzi")
// })

// app.get('/:id', (req) => {
//     console.log("informacja szczegółowa na teamt osoby o ID 1" + req.params.id)
// })


// app.post('/', (req) => {
//     console.log("dodawanie nowej osoby")
// })

// app.patch('/1', (req) => {
//     console.log("aktualizaję osoby o id 1")
// })

// app.delete('/1', (req) => {
//     console.log("usuwanie osoby o id 1")
// })

// app.get('/hellow/new-user', (req) => {
//     console.log("dodawanie nowego użytkownika")
// })

// app.get('/hellow/:name', (req) => {
//     console.log('hellow'+ req.params.name)
// })

// app.get('/', (req, res) => {

//     const str ="rozdziel ten teks według spacji"
//     const ar = str.split(" ")
//     res.send(ar)

// })
// app.get('/', (req, res) => {

//     // res.location('https://google.com');
//     // res.sendStatus(302)
//     res.redirect('https://google.com')

// })

// app.get('/', (req, res) => {
//     res.send('<a href="/home/about/company"> Cofnij')
// })


// app.get('/home/about/company', (req, res) => {

//     // res.location('https://google.com');
//     // res.sendStatus(302)
//     res.redirect('..')
//     //cofniecie o 1 (można tez skorzystac z goback)
//     // res.redirect('https://google.com', 301)     
//     //inne rozwiazanie 
//     //lepiej stosowac 302

// })


/// Przesyłanie Plików

app.get('/', (req, res) => {
    res.send(`<!DOCTYPE html'>
    <html>
    <body>
        <img src="/logo">
    </body>
    </html>`)
})

import { fileURLToPath } from "url"
// logo licencji

app.get('/logo', (req, res) => {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)

    // const fileName = path.join(__dirname, 'static/licencja.jpg') // bez roota
    const fileName = "licencja.jpg";
    res.sendFile(fileName,
        {
            root: path.join(__dirname, "static"),
            //zabezpiecza do ściezek wyżej i tylko od folderu statycznego 

        })

})


// app.get('/logo', (req, res) => {
//     const __filename = fileURLToPath(import.meta.url)
//     const __dirname = path.dirname(__filename)

//     // const fileName = path.join(__dirname, 'static/licencja.jpg') // bez roota
//     const fileName = "licencja.jpg";
//     res.sendFile(fileName,
//         {
//             root: path.join(__dirname, "static"), 
//              //zabezpiecza do ściezek wyżej i tylko od folderu statycznego 

//         }


// )

// ciasteczka
app.get('/hi/:name', (req, res) => {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)
    const dt = new Date()
    dt.setDate(dt.getDate() + 7) //zapamiętane ciastko przez 7 dni
    const { name } = req.params
    res.cookie('visitor_name', name, {
        expires: dt,
    });
    res.send("imie zapisano")

})

app.get('/logout', (req, res) => {
    res.clearCookie("visitor_name")

    res.redirect('/')
})

// app.get('/hi', () => {
//     console.log('hi world');
// });

