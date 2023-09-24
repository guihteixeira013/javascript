/*
Showing each array value
         WRONG WAY
    console.log(values[0])
    console.log(values[1])
    console.log(values[2])
    console.log(values[3])
    console.log(values[4])
    console.log(values[5])

         ANOTHER WAY
for(let pos = 0; pos < values.length; pos++) {
    console.log(values[pos])
}

         BEST WAY
for (let pos in values) {
    console.log(`The position ${pos} has the value ${values[pos]}`)
}

*/

// HOW TO SEARCH any value in array 
let values = [5, 8, 1 , 7, 9, 3]
console.log(values)
let pos = values.indexOf(13)
if (pos == -1) {
    console.log(`The value its not found!`)
} else {
    console.log(`its in the position ${pos}`)
}
