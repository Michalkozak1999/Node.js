
import handleDate from "./handleData.js"

const handleCommand = ({ add, remove, list }) => {
    console.log(add, remove, list)
    if (add) {
        if (typeof add !== "string") {
            return console.log("wpisz nazwę dodawanego zadania (tekst!!!)".red)
        } else if (add.length < 7) {
            return console.log("nazwa zadania musi miec wiecej niż 6 znaków".red)
        }
        handleDate(1, add);
    } else if (remove) {
        if (typeof remove !== "string" || remove.length < 7) {
            return console.log("wpisz nazwę usuwanego zadania, to musi być tekst i musi mieć wiećej niż 6 znaków".red)

        }
        handleDate(2, remove)
    } else if (list || list === "") {

        handleDate(3, null)
        console.log("pokazuje listę")
    }

    else {
        console.log("nie rozumiem polecenia. użyj --add=nazwa zadania".red)
    }
}

export default handleCommand
// module.exports = handleCommand