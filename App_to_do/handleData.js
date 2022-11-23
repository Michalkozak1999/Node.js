
import colors from 'colors'
import fs from 'fs'

const handleDate = (type, title) => {
    const data = fs.readFileSync('data.json');
    // const data = fs.readFileSync('data.json', 'utf8');
    // data.toString()
    let tasks = JSON.parse(data)
    // console.log(tasks)

    if (type === 1 || type === 2) {

        const isExisted = tasks.find(task => task.title === title) ? true : false;
        if (type === 1 && isExisted) {
            return console.log("takie zadanie już istnieje".red)
        }
    } else if (type === 2 && !isExisted) {
        return console.log("nie mogę usunać zadanie, które nie istenieje".red)
    }


    switch (type) {
        case 1:
            //przebudowa tablicy
            tasks = tasks.map((task, index) => ({
                id: index + 1, title: task.title
            })) // jesli nie wezmiemy w nawias to zostanie potraktowane jako kod funkcji // chcemy zwrócić tablice
            console.log("dodaje zadanie")

            const id = tasks.length + 1;
            tasks.push({ id: id, title: title })
            // console.log(tasks)
            const dataJSON = JSON.stringify(tasks);
            // console.log(dataJSON)
            fs.writeFileSync('data.json', dataJSON)
            console.log(`dodaje zadanie ${title}`.white.bgBlue)
            break;
        case 2:
            const index = tasks.findIndex(task => task.title === title)
            tasks.splice(index, 1)
            //prtzebudowa bo najpierw chcemy usuwac element z bazy 
            tasks = tasks.map((task, index) => ({
                id: index + 1, title: task.title
            }))
            // console.log(tasks)
            const dataJSON1 = JSON.stringify(tasks)
            fs.writeFile('data.json', dataJSON1, 'utf8', (err) => {
                if (err) throw err
                console.log(`zadanie ${title} zostało usunięte`.red.bgCyan)
            })
            break;
        case 3:
            console.log(`Lista zadań do zrobienia obejmuje ${tasks.length} pozycji. Do zrobienia msz:`)
            if (tasks.length) {
                tasks.forEach((task, index) => {
                    if (index % 2) return console.log(task.title.green)
                    return console.log(task.title.yellow)
                });
            }
    }

}

export default handleDate
// module.exports =