// let user = new Object(); --> "object constructor" syntax
// let user = {};           --> "object literal" syntax

// user {key: value} --> its 1 property

// user {                   --> there are 2 properties
//     name:"guilherme",    --> key "name" store value "GUilherme"
//     age: 28              --> key "age" store value "28"
// }

//         user{} its OBJECT with 2 properties.

let user1 = {
    name: "guilherme",
    age: 28,
}

let user2 = {};

// adicionando propriedades no objeto USER2
user2["name"] = "pamela";
user2["age"] = 24;

console.log(user2.name, user2.age);

// deletando propriedades no objeto USER2
delete user2