
let school = {
    name: "João Octávio",
    location: "Morro São Bento",
    established: "1930",
    displayInfo: function() {
        console.log(`${school.name} was established in ${school.established} at ${school.location}.`);
    }
}

school.displayInfo();