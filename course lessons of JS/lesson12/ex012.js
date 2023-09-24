var now = new Date
var hour = now.getHours()
var min = now.getMinutes()
console.log(`São ${hour}:${min}`)

if (hour < 6) {
    console.log(`BOA MADRUGADA!`)
} else if (hour < 12) {
    console.log(`BOM DIA!`)
} else if (hour < 18) {
    console.log(`BOA TARDE!`)
} else {
    console.log(`BOA NOITE!`)
}