console.log("jestem w module notes")


setTimeout(() => {
    console.log('module', module.loaded)
}, 2000)

module.exports = "coś zwócone z moduło notes"