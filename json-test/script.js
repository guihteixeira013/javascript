// SENDING OBJECTS TO JSON
console.log("HOW TO CONVERTER JAVASCRIPT OBJECTS IN TO JSON FORMAT?")

const objs = [
    {
        name:'Guilherme',
        age:28,
        is_studying:true,
        is_working:false,
        hobbies:['gaming', true, false, null, -10],
        career:{
            profission:'programming',
            years:2,
            current_company:'Mc Donalds'
        },
    },
    {
        name:'Pamela',
        age:23,
        is_studying:true,
        is_working:false,
        hobbies:['instagram', false, true, 3, null],
        career:{
            profission:'programming',
            years:1,
            current_company:'Burguer King'
        },
    },
]

console.log(objs)
console.log("^^ Type: " + (typeof objs).toUpperCase() + " ^^")

// CONVERTER OBJETO PARA JSON
const jsonData = JSON.stringify(objs)

console.log(jsonData)
console.log("^^ Type: " + (typeof jsonData).toUpperCase() + " ^^")

// CONVERTER JSON PARA OBJETO
const objData = JSON.parse(jsonData);

console.log(objData)
console.log("^^ Type: " + (typeof objData).toUpperCase() + " ^^")