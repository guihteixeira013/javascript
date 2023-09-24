/*
let num = ['ferrari', 'porsche']

console.log(`in PARKING: ${num} [BUSY: ${num.length}]`)
num[2] = 'ford K'                   //ford K arrived
console.log(`in PARKING: ${num} [BUSY: ${num.length}]`)
num[1] = 'polo'                     //porsche left and polo arrived
console.log(`in PARKING: ${num} [BUSY: ${num.length}]`)

    // IF you dont know how is the last position in a ARRAY, use the .push method to add it.

num.push('fusca')                   //fusca arrived
console.log(`in PARKING: ${num} [BUSY: ${num.length}]`)
num.push('fiesta')                  //fiesta arrived
console.log(`in PARKING: ${num} [BUSY: ${num.length}]`)
*/

let num = [5, 8, 1 , 7]

console.log(`The array has ${num.length} values. There are: [${num}]`)
console.log(`The first value is ${num[0]}`)

num.sort()      // sorting array values to ascending form
num.push(1)     // adding value 1 to the last position 
console.log(`The ascending form: ${num}`)