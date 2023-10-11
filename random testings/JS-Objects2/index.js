
let school = {
    name: "João Octávio",
    location: "Morro São Bento",
    established: "1930",
    displayInfo: function() {
        console.log(`${school.name} was established in ${school.established} at ${school.location}.`);
    }
}

school.displayInfo(); //displayInfo() is a method inside the School object

// Accessing property name with number;

let exemple = {
    14 : "test",
    2 : "another text",
    name : "guilherme",
}
console.log(exemple[14]);       // its like using array
console.log(exemple[2]);
console.log(exemple.name);