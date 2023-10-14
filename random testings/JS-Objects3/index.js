
const object = new Object();
object.firstName = "Guilherme";
object.lastName = "Teixeira";

// you can use "objName." or "this." to indicate 
object.fullName = function() {return object.firstName + " " + this.lastName}

console.log(object.fullName());