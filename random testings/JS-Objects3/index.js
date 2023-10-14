
let school = { 
    name : "Vivekanada School", 
    location : "Delhi", 
    established : 1995, 
    displayinfo : function() { 
        document.write(`${school.name} was established  
          in ${school.established} at ${school.location}`); 
    } 
} 
  
let hospital = {
    name : "Ana Costa",
    location : "Av. Ana Costa",
    established : 1980,
}

//  estou aplicando .assign() neste caso ...

let assigned = Object.assign(school, hospital);
console.log(assigned);
console.log(assigned === school);
console.log(school);