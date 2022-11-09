const users = [
    { id: 1, name: "Adam" },
    { id: 2, name: "Rafał" },
    { id: 3, name: "Kmieć" }
]



module.exports = {
    showUsers: function () {
        const names = users.map(task => {
            return (
                task.name
            )
        })
        console.log("nasi użytkownicy to :")
        names.forEach(task => {
            return (
                console.log(task)
            )
        })
    },
    showUsersObject(id) {
        console.log("szukany użytkownik to:");
        const user = users.find(user => {
            return (
                id === user.id
            )
        })
        console.log(user)
    },
    userListLenght: users.length
}